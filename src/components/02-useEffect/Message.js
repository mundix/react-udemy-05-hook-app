import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const {x, y} = coords;
    

    useEffect(() => {
        // console.log('Componente Montado');
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y};
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            // console.log('Componente DesMontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []); //solo quiero que se ejecurte cuando el componente es mostrado por primera vez

    return (
        <div>
            <h3>Eres Genial</h3>
            <p>
                x: { x} 
                y: { y}
            </p>
        </div>
    )
}
