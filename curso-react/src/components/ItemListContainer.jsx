import { useState, useEffect} from "react";
import {useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx"
import arrayProductos from "./json/productos.json";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import Item from "./Item.jsx";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    /* BUSQUEDAS POR CATEGORIA */
    const {id} = useParams();


//  useEffect(() => {
//    const promesa = new Promise ((resolve) => {
//      setTimeout(() => {
//        resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
//      }, 2000);
//    })
//    promesa.then((respuesta) => {
//      setItems(respuesta);
//    })
//  },[id]);


   /* FIREBASE */
   useEffect(() => {
    const db = getFirestore();
    const ItemsCollection = collection(db, "items");

    const promesa = new Promise ((resolve) => {
      setTimeout(() => {
        resolve(id ? arrayProductos.filter (item => item.categoria === id) : arrayProductos);
      }, 2000);
    })
    promesa.then((respuesta) => {
      setItems(respuesta);
    });
}, []);



//    useEffect(()=> {
//        const db = getFirestore();
//        const ItemsCollection = collection(db,"items");
//        getDocs(ItemsCollection)
//  .then((result)=> {
//    const lista = result.docs.map((producto)=>{
//      return{
//        id:producto.id,
//        ...producto.data()
//      }
//    })
//    setItems(lista)
//  })
//  .catch((error)=> console.log(error))    
//},[id]);

    return ( 
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}
    
export default ItemListContainer