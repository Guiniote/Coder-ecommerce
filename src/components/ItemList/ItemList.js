import React from "react";
import './ItemList.css';
import Item from "../Item/Item";


function ItemList({items}) {
    return(
        <div className="listado">            
            {items ?  
            items.map(
                item => <Item key={item.id} item={item} />
            ) : <h1>Cargando...</h1> }            
        </div>
    )
}

export default ItemList;