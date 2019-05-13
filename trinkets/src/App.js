import React from 'react';
import './App.css';
import './styles.css';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Home from "./components/Home";
import Item from "./components/Item";
import ItemList from "./components/ItemList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/items')
      .then(res => {
        console.log("i got the goods", res)
        this.setState({
          items: res.data
        })
      })
      .catch(err => {
        console.log("something went wrong", err)
      })
  }


  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">My Secret Trinkets</h1>
          <div className="nav-links">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/item-list">Shop</NavLink>
          </div>
        </nav>

        <Route
          exact={true}
          path="/"
          component={Home}
        />
        <Route
          path="/item-list"
          render={(props) => <ItemList {...props} items={this.state.items} />}
        />
        <Route
          path="/itemById/:id"
          render={(props) => <Item {...props} items={this.state.items} />}
        />


      </div>
    )
  }
}

export default App;
