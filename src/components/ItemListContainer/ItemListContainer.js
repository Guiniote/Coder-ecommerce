import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';


function ItemListContainer({greeting}) {

    const toCart = (itemQuantity) => itemQuantity === 1 ? alert(`Agregaste ${itemQuantity} ítem al carrito!`) : alert(`Agregaste ${itemQuantity} ítems al carrito!`);    
    
    return(
        <div>
            <p>{greeting}</p>
            <ItemCount stock="0" initial="1" onAdd={toCart} />
        </div>
    )
}

export default ItemListContainer;