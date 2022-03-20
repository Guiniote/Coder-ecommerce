import React from 'react';
import './CartWidget.css';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../../context/CardContext';


function CartWidget() {
    const { howManyIsInCart } = useCart();

    return(
        <div>
            <NavLink to={`/cart`}><FaShoppingCart className="cartIcon" /></NavLink>
            <p>{howManyIsInCart}</p>
        </div>
    )
}

export default CartWidget;