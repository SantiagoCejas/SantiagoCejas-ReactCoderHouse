import React from "react";
import ItemListContainer from "../container/ItemListContainer";
import CartWidget from "./CartWidget";
const Navbar = () =>{
    return(
    <header className="header">
        <nav className ="navbar">
            <div>
                <img className ="imgLogo" src="../../public\media\wine.png" alt ="Logo marca"/>
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
