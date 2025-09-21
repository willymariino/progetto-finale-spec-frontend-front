import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

async function getProductDetail(id, setCurrentItem, setLoading) {

    try {
        const res = await axios.get(`http://localhost:3001/products/${id}`)
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
    const { id } = useParams()


    useEffect(() => {
        getProductDetail(id, setCurrentItem, setLoading)
    }, [id])

    if (loading) {
        return (
            <div>caricamento in corso...</div>
        )
    }


    return (
        <>

            <h1>{currentItem.title}</h1>


        </>
    )
}

export default ProductDetail