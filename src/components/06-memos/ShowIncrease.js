import React from 'react';

// Para usar el useCallback este component debe estar en React.memo ( ... )
export const ShowIncrease = React.memo(({increment}) => {

    console.log('Me llamaste de nuevo :*(');

    return (
        <>
            <button className="btn btn-primary"
                onClick={() => {increment(5)}}
            >
                +1 Incrementar
            </button>
        </>
    )
});
