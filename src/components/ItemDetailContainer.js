import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { getFirestore } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";



function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const db = getFirestore();
        
        const q = query(collection(db, "items"), where("id", "==", itemId));

        getDocs(q)
            .then((snapshot) => {
                setProduct(snapshot.docs.map((doc) => doc.data())[0]);
            }, 
                (err) => {
                    alert(`Error: ${err}`);
                }
            )
            .catch((err) => {
                alert(`Error no esperado: ${err}`);
            });          
    }, [itemId])

        
        
    return (
        <>
            {product ?  
            <ItemDetail key={product.id} item={product} />                
            : <Loader loading={true} /> }            
        </>
    );
}

export default ItemDetailContainer;