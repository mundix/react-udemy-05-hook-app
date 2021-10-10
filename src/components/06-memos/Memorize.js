import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/effects.css';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Counter: <small><Small value={counter}/></small></h2>
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
