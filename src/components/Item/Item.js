import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item  ({ nombre, imagen, precio, stock, id}){



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
                Precio: ${precio}
            </p>
            <p className='Info'>
                Stock disponible: {stock}
            </p>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='button'>Ver detalle</Link>
                
            </footer>
        </section>




    </article>
)}

export default Item
