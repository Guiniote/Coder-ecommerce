import React from 'react';
import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";


function CartWidget() {
    return(
        <div>
            <FaShoppingCart className="cartIcon" />
        </div>
    )
}

export default CartWidget;