 /* SUMAR - RESTAR - CARRO */
import { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

    const ItemCount = ({stock, onAdd}) => {
        const [items, setItems] = useState(1)
        const [itemStock , setItemStock ] = useState(stock);
        const [itemAdded , setItemAdded ] = useState(false);
      

        const incrementarStock = () =>{
            if  (items < itemStock) {
                setItems (items () - 1);
            } 
        }
        const decrementarStock = () =>{
            if (items > 1) { 
                setItems (items - 1);
            }
        
        }
    
        const addToCart = () => {
            if (itemStock >= items){
                setItemStock (itemStock - items);
                setItems(itemStock);
                console.log ("Agregaste: "+ items + "productos al carrito")
                setItemAdded(true);
                onAdd(items);
            }
           }
        
        
        return ( 
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div class="btn-group">
                        <button className="btn btn-warning" onClick={decrementarStock}>-</button>
                        <button className="btn btn-warning">{items}</button>
                        <button className="btn btn-warning" onClick={incrementarStock}>+</button>
                    </div>
                </div> 
            </div>
            <div className="row my-1">
                <div className="col">
                 <button className="btn btn-warning" onClick={addToCart}>Agregar al carro</button>
                </div>
            </div>
        </div>
        )
    }
        
    export default ItemCount;
    
    
    