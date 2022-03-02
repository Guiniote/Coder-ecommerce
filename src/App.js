import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CardContext';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">        
          <NavBar />        
          <Routes>
            <Route exact path="/" element={ <ItemListContainer greeting="Bienvenido a nuestro store!" /> } />
            <Route path="/category/:categoryId" element={ <ItemListContainer greeting="Acá va a ir el catálogo" /> } />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
