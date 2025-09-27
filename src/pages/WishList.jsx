import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import ProductCard from "../components/ProductCard"

function WishList() {

    const { favorites } = useContext(GlobalContext)
    console.log("Favorites attuali:", favorites)


    return (
        <>
            <ul className="product-list">
                {favorites.map(favorite =>
                    <li key={favorite.id} className="product-card">
                        <ProductCard product={favorite} />
                    </li>

                )}

            </ul>
        </>
    )
}

export default WishList