import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";



function ItemListContainer({ greeting }) {

    const { categoryId } = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const db = getFirestore();

        const q = categoryId ?
            query(collection(db, "items"), where("category", "==", categoryId))
            : query(collection(db, "items"));

        getDocs(q)
            .then(
                (snapshot) => {
                    setProducts(snapshot.docs.map((doc) => doc.data()));
            }, 
                (err) => {
                    alert(`Error: ${err}`);
                }
            )
            .catch((err) => {
                alert(`Error no esperado: ${err}`);
            });    
    }, [categoryId])


    
    return(
        <div>            
            <p>{greeting}</p>
            {products && products.length > 0 ? <ItemList items={products} /> : <h4>Lo siento, no hay productos para esta categoría</h4>}
        </div>
    )
}

export default ItemListContainer;