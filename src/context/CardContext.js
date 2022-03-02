import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
    
    const [productInCart, setProductInCart] = useState([]);

    const isInCart = (id) => {         
        return (productInCart.filter(cartFiltered => cartFiltered.id === id)).length === 0 ? true : false;        
    }
    
    const addItem = (item, quantity) => {                
        if (isInCart(item.id)) {
            quantity === 1 ?
                alert(`Agregaste ${quantity} ítem al carrito!`)
                : alert(`Agregaste ${quantity} ítems al carrito!`);
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

    const removeItem = (itemId) => {
        setProductInCart(productInCart.filter(producto => producto.id !== itemId))
    }

    const clear = () => {
        setProductInCart([]);
    }

        
    return (        
        <CartContext.Provider value={{ addItem, removeItem, clear, productInCart, isInCart, howMuchIsInCart }}>
            { children }
        </CartContext.Provider>        
     );
}

export default CartProvider;
