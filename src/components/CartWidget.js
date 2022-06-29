import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../context/CartContext';


function CartWidget() {
    const { howManyIsInCart } = useCart();

    return(
        <div className='flex flex-row'>
            <NavLink to={`/cart`}><FaShoppingCart className="text-cyan-400 text-xl" /></NavLink>
            <p className="text-white text-xs">{howManyIsInCart}</p>
        </div>
    )
}

export default CartWidget;