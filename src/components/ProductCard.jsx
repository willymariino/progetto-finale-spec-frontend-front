function ProductCard({ product }) {

    // console.log("title:", product.title)
    // console.log("category:", product.category)
    // console.log("price:", product.price)

    return (
        <>

            <div>

                <p>{product.title}</p>
                <p>category:{product.category}</p>
                <p>price: {product.price}</p>

            </div>

        </>
    )
}

export default ProductCard