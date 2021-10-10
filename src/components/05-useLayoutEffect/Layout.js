import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {  data } = useFetch(url);

    const { quote } = !!data && data[0]; //el !!data si llega la data asigna el data en la posicion 0

    const pTag = useRef();

    useLayoutEffect(() => {
        setTimeout(() => {
            console.log({pTag});    //pTag.current => undefined 
        }, 1000);
        
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p className="mb-0">{quote}</p>
            </blockquote>

            <button className="btn btn-primary"
                onClick={() => increment(1)}
            >
                Siguiente Quote
            </button>
        </div>
    )
}
