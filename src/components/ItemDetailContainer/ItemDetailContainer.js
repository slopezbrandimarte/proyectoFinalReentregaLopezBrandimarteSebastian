import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import {getDoc,doc} from "firebase/firestore";
import {db} from "../../firebase/Config.js";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const{ itemId } = useParams()
  console.log('El Item que llega es: ' , itemId)

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "products", itemId);

        getDoc(docRef)
            .then(response =>{
                const data = response.data()
                const productAdaptated = {id: response.id, ...data}
                setProduct(productAdaptated)

                console.log('El Item que llega es: ' , productAdaptated)
            })
            .catch(error => {console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })


    }, [itemId])

  return (
    <div>
      {loading && <h2 className="item-list-title">... Cargando ...</h2> }
      
      
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer

