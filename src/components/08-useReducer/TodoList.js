import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle}) => {

    
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, index) => (
                    // TodoListITem , todo={todo} key=index, handleDelete=fn, handleToggle=fn
                    // Indice nunca como key , si no el id 
                    <TodoListItem index={todo.id} key={index} todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />
                ))
            }
        </ul>
    )
}
