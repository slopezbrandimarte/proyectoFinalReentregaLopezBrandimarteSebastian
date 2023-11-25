import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ productos }) =>{
    console.log("la data de ItemList",productos)
    return (
        <div className='ListGroup'>
                
            {productos.map(prod => (<Item key={prod.id} {...prod}/>))}
        </div>
    )
}

export default ItemList