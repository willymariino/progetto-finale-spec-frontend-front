import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

async function getProductDetail(slug, setCurrentItem, setLoading) {

    try {
        const res = await axios.get(`http://localhost:3001/products/slug/${slug}`)
        setCurrentItem(res.data.product)
        setLoading(false)
        console.log("oggetto completo", res.data)
        console.log("solamente oggetto product", res.data.product)
    }

    catch (error) {
        { console.error("errore nel caricamento dei dettagli del prodotto! 🙀🙀🙀🙀", error) }
    }

    finally {
        console.log("operazione terminata")
    }
}

function ProductDetail() {

    const [currentItem, setCurrentItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { slug } = useParams()


    useEffect(() => {
        if (slug) {
            getProductDetail(slug, setCurrentItem, setLoading)
        }
    }, [slug])

    if (loading) {
        return (
            <div>caricamento in corso...</div>
        )
    }


    return (
        <>

            <h1>{currentItem.title}</h1>

            <p>Category: {currentItem.category}</p>

            <section>

                <h2>Specifications:</h2>

                <p>Internal memory: {currentItem.internal_memory}</p>
                <p>RAM: {currentItem.ram}</p>
                <p>CPU: {currentItem.cpu}</p>
                <p>GPU: {currentItem.gpu}</p>
                <p>Cooling: {currentItem.cooling || "Not present"}</p>

            </section>

            <section>

                <h2>Description</h2>

                <p>{currentItem.description}</p>


                Optionals:

                <ul>

                    {currentItem.optionals.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}

                </ul>



            </section>

        </>
    )
}

export default ProductDetail