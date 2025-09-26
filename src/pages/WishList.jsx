import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import ProductCard from "../components/ProductCard"

function WishList() {

    const { favorite } = useContext(GlobalContext)
    console.log("Favorites attuali:", favorite)


    return (
        <>
            <ul className="product-list">
                {favorite.map(favorite =>
                    <li key={favorite.id} className="product-card">
                        <ProductCard product={favorite} />
                    </li>

                )}

            </ul>
        </>
    )
}

export default WishList