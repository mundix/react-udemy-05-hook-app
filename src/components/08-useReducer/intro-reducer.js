
//Puede llamarse como querramos, pero simepre sera un stado incial
//Siempre debe ser un array de objetos
const initialState = [{ 
    id: 1,
    todo: 'Comprar Algo',
    done: false
}];

// una function corriente 
const todoReducer = (state = initialState, action) => {
    
    if(action?.type === 'agregar') {
        return [ ...state, action.payload];
    }
    //siempre debe regresar un state 
    return state;
}
// Nunca usar el array.push(), por que el push modifica o muta el objeto.
let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}

// const action = {
// puedo ponerle cualquier nomrbe
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo //este argumento sera el payload se le puede cambair el nombre, pero el mas usado es payload
}

todos = todoReducer( todos, agregarTodoAction);
console.log({todos});