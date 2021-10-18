import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen/>', () => {
    // const wrapper = shallow(<HomeScreen/>);
    const user = {
        name: 'Edmundo',
        email: 'ce.pichardo@gmail.com'
    }
    // Para renderizar el componente hijo , necesita le  mount instead the shallow 
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <HomeScreen/>
        </UserContext.Provider>
        );
    // Como hago para establecer un contexto 
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    

})
