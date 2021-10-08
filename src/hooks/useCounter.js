// custom hooks no es mas que una funcion 

import { useState } from "react"

export const useCounter = ( initialState = 10) => {
    
    const [state, setstate] = useState(initialState);

    const increment = (factor = 1) => {
        setstate(state + factor);
    }

    const decrement = (factor = 1) => {
        setstate(state + factor);
    }

    const reset = () => {
        setstate(initialState);
    }
    // se puede regresar un objeto { } o un array dependiendo la situacion
    //este custom hook esta extrayendo la logica de mi contador 
    return {
        state,
        increment,
        decrement,
        reset
    }
}