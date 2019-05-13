import React from 'react';
import { Link } from 'react-router-dom'

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }

    render() {
        return (
            <div className="items-list-wrapper">
                {this.state.items.map(item => (
                    <div className="item-card" key={item.id}>
                        <Link to={`/itemById/${item.id}`}>
                            <img
                                className="item-list-image"
                                src={item.imageUrl}
                                alt={item.name}
                            />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default ItemList;