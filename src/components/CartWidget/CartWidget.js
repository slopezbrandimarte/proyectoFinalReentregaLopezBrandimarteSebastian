import cart from "./assets/cart.svg"
import "./CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return (
        <Link to='/cart' className="button" style={{display: totalQuantity() > 0 ? 'block' : 'none'}}>
            <img className="cart-icon" src={cart} alt="carrito" />
            {totalQuantity()}
        </Link>
    )
}


export default CartWidget;