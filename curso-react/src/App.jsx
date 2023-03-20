  /* COMPONENTE */
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./components/Error404"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";
  
  
  function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route path={"/"} element={<ItemListContainer/>}/>
              <Route path={"/category/:id"} element={<ItemListContainer/>}/>
              <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
              <Route path={"/cart"} element={<Cart/>}/>
              <Route path={"*"} element={<Error404/>}/>
            </Routes>
            <Footer  />
          </div>
        </BrowserRouter>
      </CartContextProvider>
    );
  }
  
  export default App;