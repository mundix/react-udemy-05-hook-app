import { getDefaultNormalizer } from '@testing-library/react';
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    // 1. Obtejer referencia al userContext
    const {setUser} = useContext(UserContext);
    // 2. setUSer
    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-primary"
                onClick={() => {
                    setUser({
                        id: 234,
                        name: 'John Connors',
                        email: 'connorsj@getDefaultNormalizer.com'
                    })
                }}
            >
                Login
            </button>
        </div>
    )
}
