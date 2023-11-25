import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, nombre, imagen, precio, stock, descripcion, categoria}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id,
            nombre,
            precio,
            imagen
        }

        addItem(item, quantity)
        console.log(`Se agrego ${quantity} item ${item}al carrito`)
    
    }



    return (
    <article className="cardItem">
        <header className='Header'>
            <h2 className='ItemHeader'>
                {nombre}
            </h2>
        </header>
        <picture>
            <img src={imagen} alt={nombre} className='ItemImg'/>
        </picture>
        <section>
        <p className='Info'>
                Categoria: {categoria}
            </p>
            <p className='Info'>
                Descripcion: {descripcion}
            </p>
            <p className='Info'>
                Precio: ${precio}
            </p>
            
            <footer className='ItemFooter'>
                {quantityAdded > 0 ? (<Link to={`/cart`} className='Option'>Terminar mi compra</Link>)
                : 

                (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />)}
            </footer>
        </section>




    </article>
  )
}

export default ItemDetail