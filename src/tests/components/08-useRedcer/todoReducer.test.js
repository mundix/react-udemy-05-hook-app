import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodo";


describe('Pruebas en todoReducer', () => {

    test('Debe de retornar el estado por defecto', () => {
        // El primer agumanto son los [] de {}'s, y el segun es el action que es un {}
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Node ',
            done: false
        }
        const action = {
            type: 'add',
            payload: newTodo,
        }
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]); //verificando que se agrego el ultimo TODO
    });

    test('Probando el DELETE un TODO', () => {
        
        const action = {
            type: 'delete',
            payload: 1,
        }
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);


    });

    test('Probando el TOGGLE', () => {
        const action = {
            type: 'toggle',
            payload: 1,
        }
        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true);
        expect(state[1].done).toBe(false);
        expect(state[1]).toEqual(demoTodos[1]); //Comparando el objeto completo 
    })




});
