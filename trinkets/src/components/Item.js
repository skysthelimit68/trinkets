import React from 'react';
import axios from 'axios';
import { NavLink, Route } from "react-router-dom";
import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping"

class Item extends React.Component {
    
    state = {
        item: null
    }
    
    componentDidMount() {
        axios
        .get(`http://localhost:3333/itemById/${this.props.match.params.id}`)
        .then(res => {
            console.log("got the single good", res)
            this.setState({
                item : res.data
            })
        })
        .catch(err => {
            console.log("Something went terribly wrong!", err)
        })
    }

    render() {
        if(!this.state.item) return "Loading Product ... "
        return (
            <div className="item-wrapper">
                <div className="item-header">
                    <div className="image-wrapper">
                        <img
                            src={this.state.item.imageUrl}
                            alt={this.state.item.name}
                        />
                    </div>
                    <div className="item-title-wrapper">
                        <h2>{this.state.item.name}</h2>
                        <h4>{this.state.item.price}</h4>
                    </div>
                </div>
                <nav className="item-sub-nav">
                    <NavLink exact to={`/itemById/${this.state.item.id}`}>the story</NavLink>
                    <NavLink to={`/itemById/${this.state.item.id}/shipping`}>shipping</NavLink>
                </nav>
                

            <Route 
                exact
                path="/itemById/:id"
                render={(props) => <ItemDescription {...props} item={this.state.item}/>}
            />

            <Route
                path="/itemById/:id/shipping"
                render={(props) => <ItemShipping {...props} item={this.state.item} />}
            />

            </div>
        )
    }
   
}

export default Item;