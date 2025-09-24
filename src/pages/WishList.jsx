import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import ProductCard from "../components/ProductCard"

function WishList() {

    const { favorite } = useContext(GlobalContext)

    return (
        <>
            <ul>
                {favorite.map(favorite =>
                    <li key={favorite.id}>
                        <ProductCard />
                    </li>

                )}

            </ul>
        </>
    )
}

export default WishList