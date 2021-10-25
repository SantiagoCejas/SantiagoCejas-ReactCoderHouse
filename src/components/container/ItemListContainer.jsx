import React, {useState, useEffect} from 'react'
import productosStock from '../db/db';
import ItemList from '../ItemList';

const ItemListContainer = (props)=>{
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState (true);
    useEffect(()=>{
        const productosDisponibles = new Promise((result, reject)=>{
            setTimeout(()=>{
                result(productosStock)
            },3000)
        })
            productosDisponibles.then((productos)=>{
                setProductos(productos)
                setCargando(false)
            })
    },[productos]);

    return(
        <div>
            <h1>{props.titulo}</h1>.
            {cargando ? <h2>Cargando productos..</h2>: <ItemList productos = {productos} />}
        </div>

    )
}
export default ItemListContainer