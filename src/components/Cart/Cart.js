import React from 'react';
import { useCart } from '../../context/CardContext';
import { Link } from 'react-router-dom';


function Cart() {
    const { productInCart, removeItem } = useCart();
            
    let sumador = 0;    

    return (
        <>
            { productInCart.length > 0 ?  
            productInCart.map(
                (product, index) => {                    
                    sumador = sumador + product.price * product.quantity;
                    return (
                        <>  
                            <li key={index}>{`Producto: ${product.title}     Precio: ${product.price}     Cantidad: ${product.quantity}     Subtotal: ${product.price * product.quantity}`}  <button onClick={() => removeItem(product.id)}>Borrar</button> </li>                            
                        </>
                    );
                }
            ) : <><p>No hay productos en el carrito </p><Link to={ `/` }>Volver a la home</Link></> } 
            {productInCart.length > 0 ? <h3>Total: {sumador}</h3> : ''}
        </>
    )
}


export default Cart;