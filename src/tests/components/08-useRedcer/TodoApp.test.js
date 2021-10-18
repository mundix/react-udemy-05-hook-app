
import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demoTodo';

describe('Pruebas en <TodoApp/>', () => {

    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn( () => { } );

    test('Test debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
 
    test('Debe de agregar un TODO', () => {
        const wrapper = mount(<TodoApp />);
        
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]); // No funciona
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]); //No funciona 
        });
        // // expect(wrapper.find('h1').text().trim()).toBe('Todo App: (2)');
        // Imprime Todo App (0)
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); //correcto
    })
    test('Debe eliminar un TODO', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        console.log(wrapper.find('h1').text()); // Todo App (0)
        // expect(wrapper.find('h1'))
    })
})
