import React from "react";
import ItemListContainer from "../container/ItemListContainer";
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
                <ItemListContainer />
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
   </header> 
    );
};
export default Navbar;
