import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

// Funcion init para useReducer ultimo argumento 
const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // El dispatch es una function y sabe cuales funciones tienes el reducer que envio
    // const [todos, dispatch] = useReducer(todoReducer, initialState);
    // const [todos, dispatch] = useReducer(todoReducer, initialState, init); //me ayyda a comptuar todo el estado incial, function comun y corriente
    const [todos, dispatch] = useReducer(todoReducer, [], init); 

    // const [formValue, handleInputChange] = useForm({
    //ose movio para TodoAdd.js 

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)); //nose puede guardar objetos.
    }, [todos]);

    const handleDelete = (todoId) => {
        // crear la action
        const action = {
            type: 'delete',
            payload: todoId
        };
        //dispatch
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type:'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            action: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>Todo App: ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">

                    {/* TodoList todos={todos} */}
                   <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle}
                        />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>

        </div>
    )
}
