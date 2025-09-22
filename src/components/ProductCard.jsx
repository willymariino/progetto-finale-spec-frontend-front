import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineCompare } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";

function ProductCard({ product }) {

    const [isBookMarked, setIsBookMarked] = useState(false)

    const handleBookmark = () => {
        setIsBookMarked(!isBookMarked)
    }


    // console.log("title:", product.title)
    // console.log("category:", product.category)
    // console.log("price:", product.price)

    return (
        <>

            <div>

                <div className="card-header">

                    <p>{product.title}</p>

                    <div className="card-action">
                        <button className="add-button" onClick={handleBookmark}>
                            {isBookMarked ? <FaBookmark /> : <CiBookmark />}
                        </button>
                        <button className="add-button"><MdOutlineCompare /></button>
                    </div>

                </div>

                <p>category:{product.category}</p>
                <p>price: {product.price}</p>

            </div>

        </>
    )
}

export default ProductCard