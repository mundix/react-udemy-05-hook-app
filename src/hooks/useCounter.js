// custom hooks no es mas que una funcion 
import { useState } from "react";

export const useCounter = ( initialState = 10) => {
    
    const [counter, setCounter] = useState(initialState);

    const increment = (factor = 1) => {
        setCounter(counter + factor);
    }

    const decrement = (factor = 1) => {
        setCounter(counter - factor);
    }

    const reset = () => {
        setCounter(initialState);
    }
    // se puede regresar un objeto { } o un array dependiendo la situacion
    //este custom hook esta extrayendo la logica de mi contador 
    return {
        counter,
        increment,
        decrement,
        reset
    }
}