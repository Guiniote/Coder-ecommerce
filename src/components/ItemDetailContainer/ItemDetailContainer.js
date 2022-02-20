import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';


const mockData = [{
    id: 1, 
    title: "Mountain Bike", 
    description: "Descripción 1", 
    price: 10000, 
    pictureUrl: "https://borabikes.com.ar/61249-large_default/bicicleta-battle-29-mountain-bike-21-discos-vel-shimano-2020.jpg",
}, {
    id: 2, 
    title: "Urbana", 
    description: "Descripción 2", 
    price: 7500, 
    pictureUrl: "https://www.santafixie.com/blog/wp-content/uploads/2020/02/matte-black-perfil-30-1-1-e1621435452985.jpg",
}, {
    id: 3, 
    title: "Playera", 
    description: "Descripción 3", 
    price: 5000, 
    pictureUrl: "https://www.megatone.net/images/articulos/zoom2x/104/BIC0260SIA.jpg",
}];


function ItemDetailContainer() {

    const [product, setProduct] = useState(null);

    const getData = (data) => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {                
                resolve(data);                
            }, 2000);
        });
        return promise;
    };
    
    useEffect(() => {
        
        getData(mockData)
            
            .then(
                (result) => {          
                    setProduct(result);
                }, 
                (err) => {
                    alert(`Error: ${err}`);
                }
            )
            .catch((err) => {
                alert(`Error no esperado: ${err}`);
            });          
    }, [])
    
        
    return (
        <>
            {product ?  
            product.map(                
                item => <ItemDetail key={item.id} item={item} />
            ) : <h1>Cargando...</h1> }            
        </>
    );
}

export default ItemDetailContainer;