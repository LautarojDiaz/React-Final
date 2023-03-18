import { useState, useEffect} from "react";
import {useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx"
import arrayProductos from "./json/productos.json";
import {addDoc,collection, getFirestore} from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    /* BUSQUEDAS POR CATEGORIA */
    const {id} = useParams();

    useEffect(()=> {
        const db = getFirestore();
        const ItemsCollection = collection(db,"items");

        arrayProductos.forEach(items => {
            addDoc(ItemsCollection, items)
    },);

    console.log("Se agregaron los Productos")
},[id]);

    return ( 
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}
    
export default ItemListContainer;


