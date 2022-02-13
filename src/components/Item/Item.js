import React from "react";
import './Item.css';


function Item({item}) {
    return(
        <div className="item">
            <a href="/">
                <img src={item.pictureUrl} alt="Product" width="60%" />
                <h3>{item.price}</h3>
                <p>{item.title}</p>
            </a>
        </div>
    )
}

export default Item;