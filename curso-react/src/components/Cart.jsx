import { useContext } from "react";
import { Link } from "react-router-dom";
    /* nose si esta funcionando, con un punto o 2 */
import { CartContext } from "../context/CartContext";
import trash from "./images/trash.svg";



const Cart = () => {
    const {cart, clear ,removeItem ,cartTotal, cartSum} = useContext(CartContext);
    
    if(cartTotal()===0){
        return(
            <div className="containter">
                <div className="row">
                    <div className="alert alert-warning text-center" role="alert">
                        No se encuentran productos, en su carro
                    </div>
                </div>
            </div>
        )
    }

    return(
       <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <h1 className="text-center">Productos Seleccionados</h1>
                    <table className="table" >
                        <tr>
                            <td className="text-end" colSpan={5}><button className="btn btn-warning bg-warning" onClick={() => {clearInterval()}}>Vaciar Carrito</button></td>
                        </tr>
                        {
                            cart.map(item => (
                                <tr  key={item.index} >
                                    <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={120}></img></td>
                                    <td className="text-start aling-middle" width="40%"> {item.nombre} </td>
                                    <td className="text-center aling-middle" width="20%"> {item.quantity} * ${item.precio}</td>
                                    <td className="text-center aling-middle" width="20%"> ${item.quantity * item.precio} </td>
                                    <td className="text-end aling-middle" width="10%">
                                    <button className="btn btn-warning bg-warning" onClick={() => {removeItem(item.index)}} title={"Eliminar producto"}>
                                    <img src={trash} alt=
                                    {"Eliminar Producto"} width={32}></img></button> </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a Pagar</td>
                            <td className="text-center" ><b>${cartSum()}</b></td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
       </div>
    )
}

export default Cart;