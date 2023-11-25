import { CartContext } from '../../context/CartContext';
import React from 'react';
import { useContext } from 'react';
import './CartItem.css';



const CartItem = ({ item, quantity }) => {
    const { removeProducts} = useContext(CartContext)

    const subtotal = quantity * item.precio

    
    return (
        <div className='container'>
            <picture>

                <img src={item.imagen} alt={item.nombre} className="imgContainer"/>

            </picture>
            <div className='productsCategorie'>
                <h2>
                    {item.nombre}
                </h2>
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    Subtotal: ${subtotal}
                </p>
                <button className='Option' onClick={() => removeProducts(item.id)}>Eliminar</button>
                
            </div>
        </div>

    )
};

export default CartItem;