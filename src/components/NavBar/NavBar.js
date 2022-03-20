/*
Librería de estilos (bootstrap/materialize/tailwind)
*/

import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { useCart } from '../../context/CardContext';

const mockCategories = ["bicicletas", "repuestos", "accesorios"];

function NavBar() {
    const { howManyIsInCart } = useCart();
    
    return(        
        <div className="NavBar">
            <div className="logo">
                <Link to={ `/` }>BikeScript</Link>
            </div>
            <div className="menu">
                <ul type="none">
                    
                    {mockCategories.map((category, index) => 
                        <li key={index}>                        
                            <NavLink to={ `/category/${category}` } >{category}</NavLink>
                        </li>
                    )}
                   
                </ul>
                
            </div>
            <div className="cart">
                {howManyIsInCart > 0 && <CartWidget />}
            </div>
        </div>        
        )
}
    

export default NavBar;