import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { collection, addDoc, getFirestore, writeBatch, doc } from "firebase/firestore";



function Checkout() {
    const [idCompra, setIdCompra] = useState(null);
    const { productInCart, totalToBuy, clearCart, howMuchIsInCart, howMuchIsInStock } = useCart();

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
        const batch = writeBatch(db);
        const itemsToUpdate = productInCart.map(
            (product) => {
                return(product.id)
            }
        )
    
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                setIdCompra(id)
                clearCart()
            })
            .catch((err) => {
                alert(`Error no esperado: ${err}`);
            });     
        
        itemsToUpdate.forEach((itemId, index) => {
            const docRef = doc(db, "items", itemId);
            const itemStock = howMuchIsInStock(itemId);
            const itemQuantity = howMuchIsInCart(itemId);
            batch.update(docRef, { stock: itemStock - itemQuantity });
        });

        batch.commit()
            .then()
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