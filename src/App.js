import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">        
        <NavBar />        
        <Routes>
          <Route exact path="/" element={ <ItemListContainer greeting="Bienvenido a nuestro store!" /> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer greeting="Acá va a ir el catálogo" /> } />
          <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
