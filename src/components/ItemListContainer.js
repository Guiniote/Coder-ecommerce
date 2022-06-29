import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from './Loader';



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
                    let snapshotProducts = snapshot.docs.map((doc) => doc.data());
                    snapshotProducts.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        } else if (a.name < b.name) {
                            return -1;
                        } else return 0;
                    });
                    setProducts(snapshotProducts);
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
            {products ? products.length > 0 ? <ItemList items={products} /> : <h4>Lo siento, no hay productos para esta categoría</h4> : <Loader loading={true} />}            
        </div>
    )
}

export default ItemListContainer;