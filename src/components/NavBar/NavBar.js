//////////////////////////////////////////////////////////
/* Librería de estilos (bootstrap/materialize/tailwind) */
//////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { useCart } from '../../context/CardContext';
import { getFirestore } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";



function NavBar() {
    const { howManyIsInCart } = useCart();
    const [categories, setCategories] = useState([]);
    

    useEffect(() => {
        const db = getFirestore();
        
        getDocs(collection(db, "categories"))
            .then(
                (snapshot) => {
                    setCategories(snapshot.docs.map((doc) => doc.data()));
                },
                (err) => {
                    alert(`Error: ${err}`);
                }
            )
            .catch((err) => {
                alert(`Error no esperado: ${err}`);
            });
    }, []);


    
    return(        
        <div className="NavBar">
            <div className="logo">
                <Link to={ `/` }>BikeScript</Link>
            </div>
            <div className="menu">
                <ul type="none">
                    
                    {categories.map((category, index) => 
                        <li key={index}>                 
                            <NavLink to={ `/category/${category.name}` } >{category.name}</NavLink>
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