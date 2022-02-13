import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      
      <ItemListContainer greeting="Acá va a ir el catálogo" />
      
    </div>
  );
}

export default App;
