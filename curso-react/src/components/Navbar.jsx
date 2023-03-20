
    /* MENU */

    import CartWidget from "./CartWidget";
    import logo from "./images/Logo.png"
    
    
        /* Para los nuevos links A, ahora se usa Link
            a hefr, ahora se usa To */
    import {Link,NavLink} from "react-router-dom"
    
    
    const Navbar = () => {
        return (
    <div className="container">
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-lg bg-">
                    <div className="container-fluid">
                            <Link className="navbar-brand" to="/"><img src={logo} width={"120"}></img></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link justify-content-end text-black" activeClassName={"active"} to={"/"}>Productos</NavLink  >
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link justify-content-end text-black" activeClassName={"active"} to={"/category/Fragancias"}>Fragancias</NavLink  >
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-black" activeClassName={"active"}  to={"/category/Relojes"}>Relojes</NavLink>
                                </li>
                                <li className="nav-item">    
                                    <NavLink className="nav-link text-black" activeClassName={"active"} to={"/category/Anillos"}>Anillos</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col d-flex align-items-center justify-content-end">
            <CartWidget></CartWidget>
        </div>
        </div>
        
    </div>
        )
    }
    
    export default Navbar;