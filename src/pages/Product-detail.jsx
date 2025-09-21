import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

async function getProductDetail(id, setProduct, setLoading) {

    try {
        const res = await axios.get(`http://localhost:3001/products/${id}`)
        setProduct(res.data.product)
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

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        getProductDetail(id, setProduct, setLoading)
    }, [id])

    if (loading) {
        return (
            <div>caricamento in corso...</div>
        )
    }


    return (
        <>

            <h1>{product.title}</h1>


        </>
    )
}

export default ProductDetail