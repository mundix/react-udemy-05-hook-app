import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodo';


describe('Pruebas en <TodoListItem/>', () => {

    const handleDeleteMock = jest.fn();
    const handleToggleMock = jest.fn();

    let wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDeleteMock}
            handleToggle={handleToggleMock}
        />
    );

    test('Debe de mostarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe llamar la funciton handelDelete', () => {
        
        //  jest.fn() 
        handleDeleteMock.mockReturnValue(1);
        wrapper.find('button').simulate('click');
        expect(handleDeleteMock).toHaveBeenCalledWith(demoTodos[0].id);
        // toHaveBeenCalled
        // toHaveBeenCalleWith
    })
    
    test('Debe llamar la funciton handelToggle', () => {
        //  jest.fn() 
        handleToggleMock.mockReturnValue(1);
        wrapper.find('p.btn-toggle-action').simulate('click');
        expect(handleToggleMock).toHaveBeenCalledWith(demoTodos[0].id);
        console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        // toHaveBeenCalleWith

    })
    
    test('Debe de mostrar el texto correctamente', () => {
       //contenido del parrafo 
       expect(wrapper.find('p').text().trim()).toBe(`1. ${demoTodos[0].desc}`);

    });

    test('Debe de tener la calse COMPLETE si el todo esta en TRUE', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                index={0}
                handleDelete={handleDeleteMock}
                handleToggle={handleToggleMock}
            />
        );
        console.log(wrapper.html());
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
    
    


})
