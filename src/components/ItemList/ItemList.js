import React from "react";
import './ItemList.css';
import Item from "../Item/Item";
import Loader from "../Loader/Loader";


function ItemList({items}) {
    return(
        <div className="listado">            
            {items ?  
            items.map(
                item => <Item key={item.id} item={item} />
            ) : <Loader loading={true} /> }            
        </div>
    )
}

export default ItemList;