import productCard from "../components/ProductCard"
import { useState, useEffect } from "react"
import axios from "axios"

async function fetchProducts(query, category, setProducts) {
    // verifico i parametri ricevuti dalla chiamata per debug
    console.log("query:", query) // dovrebbe essere la stringa che inserisci come filtro
    console.log("category:", category) // dovrebbe essere la stringa della categoria scelta
    console.log("setProducts:", setProducts) // dovrebbe essere la funzione setter di useState

    try {
        const res = await axios.get(`http://localhost:3001/products?search=${query}&category=${category}`)

        setProducts(res.data)
        console.log(res.data)
    }

    catch (error) {
        { console.error("errore nel caricamento dei dettagli dei prodotti", error) }
    }

    finally {
        // Messaggio di completamento operazione (sia successo che errore)
        console.log("operazione completata")
    }

}

function ProductList() {
    const [query, setQuery] = useState("")
    const [category, setCategory] = useState("")
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetchProducts(query, category, setProducts) // ricordarsi che gli argomenti vanno scritti nello stesso ordine dei parametri
    }, [query, category])

    return (
        <>

        </>
    )
}

export default ProductList