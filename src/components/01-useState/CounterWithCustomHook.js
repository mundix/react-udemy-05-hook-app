import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <div>
            <h1>Counter With Custom Hook: {state} </h1>
            <hr />
            {/* las funciones incremente  y decrement no funciona por que necesita se llamada como funcion
            para poder pasarle el argumento  */}
            {/* <button onClick={increment} className="btn btn-primary">+1</button>
            <button onClick={decrement} className="btn btn-danger">-1</button> */}
            <button onClick={() => increment(2)} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-warning">reset</button>
            <button onClick={() => decrement(2)} className="btn btn-danger">-1</button>
        </div>
    )
}
