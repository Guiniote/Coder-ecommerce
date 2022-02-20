/*
Librería de estilos (bootstrap/materialize/tailwind)
*/

import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const mockCategories = ["bicicletas", "repuestos", "accesorios"];

function NavBar() {
    
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
                <CartWidget />
            </div>
        </div>        
        )
}
    

export default NavBar;