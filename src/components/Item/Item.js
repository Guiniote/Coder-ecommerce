import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';


function Item({item}) {
    return(
        <div className="item">
            <Link to={`/item/${item.id}`}>
                <img src={item.pictureUrl} alt="Product" width="60%" />
                <h3>{item.price}</h3>
                <p>{item.title}</p>
            </Link>
        </div>
    )
}

export default Item;