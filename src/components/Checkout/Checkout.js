import { useContext, useState } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { CartContext } from "../../context/CartContext"
import {collection, addDoc, Timestamp} from "firebase/firestore"
import {db} from "../../firebase/Config.js"
import { Link } from "react-router-dom"
import './Checkout.css'






const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("")
    const [nuevoStock, setNuevoStock] = useState([])

    const { cart,clearCart, calculateTotal } = useContext(CartContext)

    
const comprar = (userData) => {
    const pedido = {
        cliente: userData,
        productos: cart,
        total: calculateTotal(),
        data: Timestamp.fromDate(new Date())
    }
    console.log(pedido)

    const pedidosRef = collection(db, "pedidos");
    
    addDoc(pedidosRef, pedido)
        .then((doc)=>{
            setPedidoId(doc.id)
            clearCart()
        })
}
    if(pedidoId){
        return(
            <div className="CheckoutId">
                <h1>Gracias por su compra</h1>
                <h3>El id de su pedido es: {pedidoId}</h3>
                <Link to='/' className='Option'>Volver a la tienda</Link>

            </div>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={comprar}/>
        </div>
    )
}
export default Checkout 