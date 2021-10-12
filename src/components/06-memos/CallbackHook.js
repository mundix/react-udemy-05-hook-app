import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrease } from './ShowIncrease';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const  increment = () => {
    //     setCounter( counter + 1);
    // }

    const increment = useCallback(( num) => {
        // setCounter(counter + 1);
        setCounter( c => c + num); //elimina la dependencia 
    }, [setCounter]);

    return (
        <div>
            <h1>Callback Hook: {counter}</h1>
            <hr />
            <ShowIncrease increment={increment} />
        </div>
    )
}
