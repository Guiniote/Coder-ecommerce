import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
    
    const [productInCart, setProductInCart] = useState([]);
    const [howManyIsInCart, setHowManyIsInCart] = useState(0);
    const [totalToBuy, setTotalToBuy] = useState(0);

    const isInCart = (id) => {         
        return (productInCart.filter(cartFiltered => cartFiltered.id === id)).length === 0 ? true : false;        
    }
    
    const addItem = (item, quantity) => {                
        if (isInCart(item.id)) {
            quantity === 1 ?
            alert(`Agregaste ${quantity} ítem al carrito!`)
            : alert(`Agregaste ${quantity} ítems al carrito!`);
            setHowManyIsInCart(howManyIsInCart + quantity);
            let productToBuy = { ...item, quantity: quantity, }           
            setProductInCart([...productInCart, productToBuy]);
        } else {
            alert('No podés agregar un ítem que ya existe en el carrito');
        }        
    }
    
    const howMuchIsInCart = (id) => {
        if (!isInCart(id)) {
            let product = productInCart.filter(cartFiltered => cartFiltered.id === id)            
            return product[0].quantity
        }
    }

    const amountToBuy = (total) => {
        setTotalToBuy(total)
    }
    
    const removeItem = (itemId) => {
        let reducingQuantity = productInCart.filter(producto => producto.id === itemId);        
        setHowManyIsInCart(howManyIsInCart - reducingQuantity[0].quantity);
        setProductInCart(productInCart.filter(producto => producto.id !== itemId))        
    }

    const clearCart = () => {
        setProductInCart([]);
        setHowManyIsInCart(0);
    }

        
    return (        
        <CartContext.Provider value={{ addItem, removeItem, clearCart, productInCart, isInCart, howMuchIsInCart, howManyIsInCart, amountToBuy, totalToBuy }}>
            { children }
        </CartContext.Provider>        
     );
}

export default CartProvider;
