import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">        
          <NavBar />        
          <Routes>
            <Route exact path="/" element={ <ItemListContainer greeting="Bienvenido a nuestro store!" /> } />
            <Route path="/category/:categoryId" element={ <ItemListContainer greeting="Estos son todos los productos de esta categoría" /> } />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
