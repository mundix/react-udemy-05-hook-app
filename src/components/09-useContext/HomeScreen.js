import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    // Asi es como puedo acceder al user obj mediente UserContext 
    // Me devuelve todo lo que envie en el value del UserContext.Provider
    // const userContext = useContext(UserContext);
    const {user} = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h1>Home Screen</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
