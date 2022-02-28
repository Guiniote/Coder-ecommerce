import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail({ item }) {
    
    const [quantityToBuy, setQuantityToBuy] = useState(null);

    const toCart = (itemQuantity) => {
        setQuantityToBuy(itemQuantity);
        itemQuantity === 1 ?
            alert(`Agregaste ${itemQuantity} ítem al carrito!`)
            : alert(`Agregaste ${itemQuantity} ítems al carrito!`);
    }
    
    return (
        <>        
            <img src={item.pictureUrl} alt="ProductDetail" width="100%" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h3>{item.price}</h3>      
            {!quantityToBuy ?
                <ItemCount stock="10" initial="1" onAdd={toCart} />
                : <p>Ítems en el carrito: {quantityToBuy} </p>
            }

            <Link to={`/cart`} >
                <button>Terminar mi compra</button>
            </Link>
        </>
    );
}

export default ItemDetail;