import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Prueba en <LoginScreen/>', () => {

    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de ejecutar el setUser con el argumenteo esperado  ', () => {
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            email: "connorsj@getDefaultNormalizer.com",
            id: 234,
            name: "John Connors",
        })

    });

});
