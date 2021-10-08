import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '', 
        email: ''
    })
    const { name, email} = formState;

    const handleInputChange = ({target}) => {
        // console.log(e.target);
        setFormState({
            ...formState,
            // esto genera el nombre del input, en este caso 'name' que apunta a la propeidad name del obj del state
            //el formState = {name, email}, y el valor del [target.name] = 'name 
            [target.name]: target.value
        })
    }

    // El use Effect es un hook que nos permite ejecuter un efecto secundario, cuando algo suceda en el component
    useEffect(() => {
        // Cada ves qeu suceda un cambio en e mismo , no importa que cambie , vuelvete a ejecutar 
        // En el caso del input se ejecuta tantas vecs toque el teclado en input par escribir 
        // console.log('hey. corri una sola vez');
    // });
    }, []); //Esto se dispara una sola ves, al poner el  [] como segundo argumento

    useEffect(() =>{
        // console.log('Form State cambio');
    }, [formState]);

    useEffect(() =>{
        // console.log('El email cambio');
    }, [email]);

    return (
        <>
            <h1>useEffect Simple Form</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="tu nombre" 
                    autoComplete="off"
                    value={name}
                    name="name"
                    onChange={ handleInputChange }
                    />
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="email@gmail.com" 
                    autoComplete="off"
                    value={email}
                    name="email"
                    onChange={ handleInputChange }
                    />
            </div>
            { (name === '123') && <Message/>}
        </>
    )
}
