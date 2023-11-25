import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { getDocs,collection,where, query } from "firebase/firestore";
import { db } from "../../firebase/Config";
import "./ItemListContainer.css"



const  ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()

    



    useEffect(()=>{
        const collectionRef = collection(db,'products')

        const p = categoriaId ? query(collectionRef, where("categoria", "==", categoriaId)) : collectionRef

        getDocs(p)
        .then((response)=>{

            setProductos(
                response.docs.map((doc)=>{
                    return{...doc.data(), id: doc.id}
                })
            )
        })
    }, [categoriaId])

    return(
        <div className="ItemListContainer">
            <h1>{greeting}</h1>

            <section>
                {productos.length === 0 ? <h2>Cargando...</h2> : <ItemList productos={productos}/>}
                
            </section>
        </div>
    )

}

export default ItemListContainer;