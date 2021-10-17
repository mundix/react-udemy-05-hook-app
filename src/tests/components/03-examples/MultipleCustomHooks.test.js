import React from 'react';
import { shallow } from 'enzyme';
// Compoennts 
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
// Custo hooks
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en MultipleCustomHooks', () => {
    // El useCounter fuera de los test, para usarlo en cualquier lado. 
    // Regresa el objeto pero solo usaremor counter y el increment
    // {
    //      counter,
    //      increment,
    //      decrement,
    //      reset
    // }
    useCounter.mockReturnValue({
        counter: 10,
        increment: ()=>{}
    })

    test('Muestra Correctmente MultipleCustomHooks', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar la informacion', () => {
        // mockReturnValue se usa para pasar argumentos de pruebas (o sea Falsos),
        // pero este valor es el que usa  el useState dentro useFetch ? 
        // Si el argumento de useFetch es el url 
        useFetch.mockReturnValue({
            data: [{
                author: 'Edmundo',
                quote: 'Hola Mundo',
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false); //No debe existir si tiene informacion
        // wrapper.find('el').text().trim()  -> limpia el texto de esos elementos.
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo'); //Verifica si teine l texto Hola mundo el quote
        expect(wrapper.find('footer').text().trim()).toBe('Edmundo'); // Verifica el nombre del author 
        // console.log(wrapper.html());
    })


})
