import React from 'react';
import Item from './Item'
import productosStock from './db/db';

const ItemList=({productos}) => {
    return (
        <>
            <div className="contenedorList">
                {productos.map((producto) =>
                    <Item key={producto.id} name={producto.name} grape={producto.grape} price={producto.price} image={producto.image}/>
                                )
                } 
            </div>
        </>)
}

export default ItemList
