import React from 'react';

function ItemDetail({item}) {
    return (
        <>        
            <img src={item.pictureUrl} alt="ProductDetail" width="100%" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h3>{item.price}</h3>            
        </>
    );
}

export default ItemDetail;