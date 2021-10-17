import React from 'react';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodo';
import { TodoList } from '../../../components/08-useReducer/TodoList';

describe('Probando en <TodoList/>', () => {
    const handleDeleteMock = jest.fn();
    const handleToggleMock = jest.fn();


    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            index={0}
            handleDelete={handleDeleteMock}
            handleToggle={handleToggleMock}
        />
    );

    test('debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de tener dos <TodoListItem/>', () => {
        // console.log(wrapper.html());
        // console.log(wrapper.find('TodoListItem').length);
        expect(wrapper.find('TodoListItem').length).toBe(2);
        // console.log(wrapper.find('TodoListItem').at(1).props())
        // console.log(wrapper.find('TodoListItem').at(1).prop('handleDelete'))
        expect(wrapper.find('TodoListItem').at(1).prop('handleDelete')).toEqual( expect.any(Function));
    })
    
    
})
