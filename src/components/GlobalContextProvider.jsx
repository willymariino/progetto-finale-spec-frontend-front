import { useState } from "react";
import GlobalContext from "../context/GlobalContext";

function GlobalContextProvider({ children }) {
    const [favorite, setFavorite] = useState([])

    function toggleFavourite(product) {
        setFavorite(prev => {

            if (prev.some(p => p.id === product.id)) {
                return prev.filter(p => p.id !== product.id)
            }
            else {
                return [...prev, product]
            }

        })
    }

    return (
        <GlobalContext.Provider value={{ favorite, toggleFavourite }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider

