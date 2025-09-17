import ProductCard from "../components/ProductCard"
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

            <h1>prodotti disponibili</h1>

            <section>

                <label htmlFor="search-bar">cerca il prodotto</label>
                <input
                    type="text"
                    id="search-bar"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="cerca il prodotto"
                />

            </section>

            <section>
                <label htmlFor="category">filtra per categoria</label>
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    id='category'
                >
                    <option value=""> scegli la categoria</option>
                    <option value="laptop">laptop</option>
                    <option value="desktop">desktop</option>
                    <option value="smartphone">smartphone</option>
                    <option value="microcomputer">microcomputer</option>
                    <option value="gaming">gaming</option>
                    <option value="tablet">tablet</option>
                    <option value="wearable">wearable</option>
                    <option value="monitor">monitor</option>
                    <option value="networking">networking</option>
                    <option value="audio">audio</option>
                    <option value="storage">storage</option>
                </select>
            </section>

            {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}


            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}

        </>
    )
}

export default ProductList