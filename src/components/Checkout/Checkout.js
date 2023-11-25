import { writeBatch } from "firebase/firestore"
import { useContext,useState } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/Config"
import { collection, getDocs, query, where, Timestamp, addDoc} from "@firebase/firestore"





const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {name, phone, email},
                items: cart,
                date: Timestamp.fromDate(new Date()),
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const proudctsAddedFromFirestore = await getDocs(query(productsRef, where(productsRef, 'in', ids)))
            const { docs }  = proudctsAddedFromFirestore
           
            docs.forEach(doc=>{

                console.log('el doc',doc)
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity || 0

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                    console.log('se actualizo el stock' , doc.id)
                }else{
                    outOfStock.push({...dataDoc, id: doc.id})
                }
            })
            if(outOfStock.length === 0){
                await batch.commit()
                const docRef = await addDoc(collection(db, 'orders'), objOrder)
                setOrderId(docRef.id)
                clearCart()
            }else{
                console.log('Productos sin stock', outOfStock)
            }
        }catch(error){
            console.log('el error al cargar en el firestore',error)

        }finally{
            setLoading(false)
        }
    }
    if(loading){
        return <h2>Se esta generando su orden...</h2>
    }
    if(orderId){
        return <h2>Gracias por su compra, su numero de orden es {orderId}</h2>
    }   
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout