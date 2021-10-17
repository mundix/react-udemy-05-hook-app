import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-usRef/RealExampleRef';

describe('Pruebas en <RealExampleRef/>', () => {
    let wrapper = shallow(<RealExampleRef/>);

    beforeEach(() => {
        let wrapper = shallow(<RealExampleRef/>);
    });
    
    test('Debe mostrar el <RealExampleRef/>', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('RealExampleRef').exists()).toBe(false);

    })

    test('Debe mostrar el componente <MultipleCustomHooks/>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper).toMatchSnapshot();
        console.log(wrapper.html());
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);    
        
    })
    
});
