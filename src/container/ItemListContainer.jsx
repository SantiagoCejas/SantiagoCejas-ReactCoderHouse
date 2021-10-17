import React from 'react'


function ItemListContainer({greeting}) {
    return (
        <div>
            <h1>{greeting.text}</h1>
        </div>
    )
}
export default ItemListContainer