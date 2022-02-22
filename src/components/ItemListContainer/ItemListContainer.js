import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';


const mockData = [{
    id: 1, 
    category: "bicicletas",
    title: "Mountain Bike", 
    description: "Descripción 1", 
    price: 10000, 
    pictureUrl: "https://borabikes.com.ar/61249-large_default/bicicleta-battle-29-mountain-bike-21-discos-vel-shimano-2020.jpg",
}, {
    id: 2, 
    category: "bicicletas",
    title: "Urbana", 
    description: "Descripción 2", 
    price: 7500, 
    pictureUrl: "https://www.santafixie.com/blog/wp-content/uploads/2020/02/matte-black-perfil-30-1-1-e1621435452985.jpg",
}, {
    id: 3, 
    category: "repuestos",
    title: "Playera", 
    description: "Descripción 3", 
    price: 5000, 
    pictureUrl: "https://www.megatone.net/images/articulos/zoom2x/104/BIC0260SIA.jpg",
}];


function ItemListContainer({greeting}) {

    const { categoryId } = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const asyncMock = new Promise((resolve) => {
        
            setTimeout(() => {
                resolve(mockData);
            }, 2000);
        
        });
        
        asyncMock
            .then(
                (result) => {
                    setProducts(result);
                }, 
                (err) => {
                    alert(`Error: ${err}`);
                }
            )
            .catch((err) => {
                alert(`Error no esperado: ${err}`);
            });    
    }, [categoryId])


    const toCart = (itemQuantity) => itemQuantity === 1 ? alert(`Agregaste ${itemQuantity} ítem al carrito!`) : alert(`Agregaste ${itemQuantity} ítems al carrito!`);  

    let filteredProducts = products && products.filter(productsFiltered => productsFiltered.category === categoryId);
    
    
    return(
        <div>
            <p>{greeting}</p>
            <ItemCount stock="0" initial="1" onAdd={toCart} />            
            {categoryId ? <ItemList items={ filteredProducts } /> : <ItemList items={ products } /> }            
        </div>
    )
}

export default ItemListContainer;