import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import { Link} from 'react-router-dom'

const Cart = () => {
    const { cart,clearCart, totalQuantity, calculateTotal } = useContext(CartContext)

    const total = calculateTotal().toFixed(2)

    if(totalQuantity() === 0){
        return(
            <div>
                <h1>Carrito vacio</h1>
                <Link to='/' className='Option'>Volver a la tienda</Link>
            </div>
        )
    }

        return(
            <div className='TotalesFooter'>
                {cart.map(p => <CartItem key={p.item.id} item={p.item} quantity={p.quantity}/>)}

                <h2 className='totales'>Total: ${total}</h2>

                <button onClick={() => clearCart()} className='button'>Vaciar carrito</button>

                <Link to='/checkout' className='button'>Checkout</Link>
            </div>
        )


}
export default Cart