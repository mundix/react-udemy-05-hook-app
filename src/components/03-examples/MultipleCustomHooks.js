import React from 'react';
import '../02-useEffect/effects.css';
import { useFetch } from '../../hooks/useFetch';


export const MultipleCustomHooks = () => {
    const url = `https://www.breakingbadapi.com/api/quotes/1`;
    const state = useFetch(url);
    console.log(state);
    
    return (
        <div>
            <h1>Custom Hooks</h1>
        </div>
    )
}
