import React from 'react'

const Item =({name, grape, price, image})=> {
    return (
        <div className="item">
            <div>
                <h3>{name}</h3>
                <p>{grape}</p>
                <p>${price}</p>
            </div>
            <div>
                <img src={image} alt={name} />
            </div>
        </div>
    )
}

export default Item
