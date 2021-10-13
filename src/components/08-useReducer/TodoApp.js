import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './styles.css';


// Funcion init para useReducer ultimo argumento 
const init = () =>{
    // return [
    //     {
    //         id: new Date().getTime(),
    //         desc: 'Aprender React',
    //         done: false
    //     },
    //     {
    //         id: new Date().getTime() + 1,
    //         desc: 'Aprender Git',
    //         done: false
    //     },
    // ];
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // El dispatch es una function y sabe cuales funciones tienes el reducer que envio
    // const [todos, dispatch] = useReducer(todoReducer, initialState);
    // const [todos, dispatch] = useReducer(todoReducer, initialState, init); //me ayyda a comptuar todo el estado incial, function comun y corriente
    const [todos, dispatch] = useReducer(todoReducer, [], init); 

    // const [formValue, handleInputChange] = useForm({
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)); //nose puede guardar objetos.
    }, [todos]);

    console.log(description);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            // desc: 'Aprender React',
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset();

    }

    return (
        <div>
            <h1>Todo App: {todos.length}</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, index) => (
                                <li key={todo.id} className='list-group-item'>
                                    <p className="text-center"> {index + 1}. {todo.desc}</p>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name='description' 
                            placeholder='Aprender...' 
                            autoComplete='off'  
                            className='form-control'
                            value={description}
                            onChange={handleInputChange}
                            />
                        <button className="btn btn-outline-primary btn-block mt-2">
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}
