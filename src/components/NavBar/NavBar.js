/*
Librería de estilos (bootstrap/materialize/tailwind)
*/

import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar(){
    return(        
        <div className="NavBar">
            <div className="logo">
                <a href="/">BikeScript</a>
            </div>
            <div className="menu">
                <ul type = "none">
                    <li>
                        <a href="/">Bicicletas</a>
                    </li>
                    <li>
                        <a href="/">Respuestos</a>
                    </li>
                    <li>
                        <a href="/">Accesorios</a>
                    </li>
                </ul>
                
            </div>
            <div className="cart">
                <CartWidget />
            </div>
        </div>        
        )
    }
export default NavBar;