import React, { useEffect, useState } from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getFirestore } from "../firebase";
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
        <div className="flex flex-row flex-wrap items-center justify-around bg-slate-800 no-underline">
            <div className="my-11 text-5xl text-cyan-400">
                <Link to={ `/` }>BikeScript</Link>
            </div>
            <div className="my-11 text-cyan-400">
                <ul type="none" className="flex flex-row flex-wrap mr-20 p-0">
                    
                    {categories.map((category, index) => 
                        <li key={index} className="px-14">                 
                            <NavLink to={ `/category/${category.name}` } >{category.name}</NavLink>
                        </li>
                    )}
                   
                </ul>
                
            </div>
            <div className="flex flex-row flex-wrap">
                {howManyIsInCart > 0 && <CartWidget />}
            </div>
        </div>        
        )
}
    

export default NavBar;