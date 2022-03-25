import React, {useState} from 'react';
import './ItemCount.css';


function ItemCountModify({stock, initial, onModify}) {

    const [counter, setCounter] = useState(Number(initial));

    const add = () => {        
        counter < Number(stock) ? 
            setCounter(counter + 1)
            : alert('No hay suficiente stock para seguir agregando ítems');
        }
    
    const remove = () => {
        counter > 1 ? setCounter(counter - 1) : alert('No podés agregar menos de un ítem');
    }
    

    return(
        <div className="counter">
            <button onClick={remove}> - </button>
            <p>{counter}</p>
            <button onClick={add}> + </button>
            <button onClick={Number(stock) > 0 ? () => onAdd(counter) : () => alert('No podés agregar al carrito porque no hay stock del producto')}>Añadir al carrito</button>            
        </div>
    )
}

export default ItemCountModify;