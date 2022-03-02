import React from 'react';
import { useCart } from '../../context/CardContext';


function Cart() {

    const { productInCart } = useCart();

    console.log(productInCart);

    return (
        <p>Hola, soy el carrito!</p>
    )
}


export default Cart;