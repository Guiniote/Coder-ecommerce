import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { collection, addDoc, getFirestore } from "firebase/firestore";



function Checkout() {
    const [idCompra, setIdCompra] = useState(null);
    const { productInCart, totalToBuy, clearCart } = useCart();

    const sendOrder = () => {
        const order = {
            buyer: {
                name: "Germán",
                phone: 1234,
                email: "a@a.com",
            },
            productInCart,
            totalToBuy,
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
    
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                setIdCompra(id)
                clearCart()
            })
            .catch((err) => {
                alert(`Error no esperado: ${err}`);
            });     
    }
        

    return ( 
        <>
            {idCompra === null ?
                <button onClick={() => sendOrder()}>Confirmar compra</button>
                : <p>Felicitaciones! su número de pedido es ${idCompra} </p>
            }
        </>
    );
}

export default Checkout;