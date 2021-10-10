import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesosPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(false);

   
    //Aqui el valor esta memorizado , solo si el counter incrementa en 1 se ejecuta .
    const memoProcesoPesado = useMemo(()=> procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            {/* <h3>Counter: <small>{procesoPesado(counter)}</small></h3> */}
            <h3>Counter: <small>{memoProcesoPesado}</small></h3>
            <hr />

            <button className="btn btn-primary"
                onClick={() => { increment(1) }}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-2"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
