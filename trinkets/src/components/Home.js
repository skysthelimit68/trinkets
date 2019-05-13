import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-wrapper">
            <img
                className="home-image"
                src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
                alt="some trinkets"
            />
            <Link to="/item-list">
                <button className="md-button shop-button">Shop now!</button>
            </Link>
        </div>
    )
}

export default Home;