/*
Librería de estilos (bootstrap/materialize)
*/

import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        <React.Fragment>
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
            </div>
        </React.Fragment>
        )
    }
export default NavBar;