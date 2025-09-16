import productCard from "../components/ProductCard"
import { useState, useEffect } from "react"
import axios from "axios"

async function fetchProducts(query, category, setProducts) {

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
        fetchProducts(setProducts)
    }, [query, category])

    return (
        <>

        </>
    )
}

export default ProductList