import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {
    // Hay que pasarle el value si no da un error de props , a parentemetne es obligatorio ene sta 
    // Version de react , en value es loq ue queiro compartir por ejemplo el user 

        const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
