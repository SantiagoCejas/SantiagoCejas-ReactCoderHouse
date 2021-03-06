import React from 'react'

const Item =({name, grape, price, image})=> {
    return (
        <div className="item">
            <div>
                <img src={image} alt={name} />
            </div>
            <div className="itemDetalle">
                <h3>{name}</h3>
                <p>{grape}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Item
