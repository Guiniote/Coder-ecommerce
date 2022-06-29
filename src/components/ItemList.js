import React from "react";
import Item from "./Item";
import Loader from "./Loader";


function ItemList({items}) {
    return(
        <div className="flex flex-wrap items-stretch justify-between mx-20">            
            {items ?  
            items.map(
                item => <Item key={item.id} item={item} />
            ) : <Loader loading={true} /> }            
        </div>
    )
}

export default ItemList;