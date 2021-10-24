import React from 'react';
import item from './Item'

function ItemList() {
    return (
        <div>
                <ul className = "itemList">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
        </div>
    )
}

export default ItemList
