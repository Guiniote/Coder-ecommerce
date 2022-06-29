import React from "react";
import { Link } from 'react-router-dom';


function Item({ item }) {
    return(
        <div className="text-base my-5 py-12 w-80 h-96 shadow-lg shadow-slate-400">            
            <Link to={`/item/${item.id}`}>
                <img src={item.pictureUrl} alt="Product" width="60%" />
                <h3>{item.price}</h3>
                <p>{item.name}</p>
            </Link>
        </div>
    )
}

export default Item;