import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ItemDetail({ item }) {
    const { addItem, isInCart, howMuchIsInCart } = useCart();
    
    const [quantityToBuy, setQuantityToBuy] = useState(null);

    const toCart = (itemQuantity) => {
        setQuantityToBuy(itemQuantity);
        addItem(item, itemQuantity);        
    }
    
    const alreadyAdded = howMuchIsInCart(item.id);

    return (
        <>        
            <img src={item.pictureUrl} alt="ProductDetail" width="40%" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h3>{item.price}</h3>          
            <p>Stock disponible: {item.stock}</p>
            {!quantityToBuy && isInCart(item.id)?
                <ItemCount stock={item.stock} initial="1" onAdd={toCart} />
                : <p>Ítems en el carrito: {quantityToBuy ? quantityToBuy : alreadyAdded } </p>
            }

            <Link to={`/cart`} >
                <button>Terminar mi compra</button>
            </Link>
        </>
    );
}

export default ItemDetail;