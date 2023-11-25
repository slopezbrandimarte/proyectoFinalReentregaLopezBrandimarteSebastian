import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import { Link} from 'react-router-dom'

const Cart = () => {
    const { cart,clearCart, totalQuantity, calculateTotal } = useContext(CartContext)

    

    if(totalQuantity() === 0){
        return(
            <div>
                <h1>Carrito vacio</h1>
                <Link to='/' className='Option'>Volver a la tienda</Link>
            </div>
        )
    }

        return(
            <div>
                {cart.map(p => <CartItem key={p.item.id} item={p.item} quantity={p.quantity}/>)}

                <h3>Total: ${calculateTotal().toFixed(2)}</h3>

                <button onClick={() => clearCart()} className='Option'>Vaciar carrito</button>

                <Link to='/checkout' className='Option'>Checkout</Link>
            </div>
        )


}
export default Cart