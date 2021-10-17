import React from "react";
import ItemListContainer from "./container/ItemListContainer";
import CartWidget from "./CartWidget";
const Navbar = () =>{
    return(
    <header className="header">
        <nav className ="navbar">
            <div className="contentNav">
                <a href="index.html">
                    <img className ="imgLogo" src="https://cdn-icons-png.flaticon.com/512/2553/2553705.png" alt ="Logo marca"/>
                 </a>
                <a href="index.html">Mi Tienda</a>
            </div>
            <div>    
            <div>
                <ul className = "itemList">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
   </header> 
    );
};
export default Navbar;
