import { useState } from "react";

function useStorage(itemKey, initialValue) {

    const [state, setState] = useState(() => {

        const prevState = localStorage.getItem(itemKey)
        if (prevState) {
            return prevState
        }
        else {
            localStorage.setItem(itemKey, initialValue)
            return initialValue
        }

    })

    const changeState = newState => {
        setState(newState)
        localStorage.setItem(itemKey, newState)
    }

    return [state, changeState]

}

export default useStorage