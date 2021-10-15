import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'edmundo',
        email: 'ce.pichardo@gmail.com'
    }

    test('Debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [values] = result.current;
        expect(values).toEqual(initialForm);
        // const [values, handleInputChange, reset] = ({});
        // console.log({values});
    })

    test('Debe cambiar el valor del formulario, (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Jose'
                }
            })
        })

        const [values] = result.current;
        expect(values.name).toBe('Jose');
        // Aqui solo verifciado si cambio una propiedad
        expect(values).toEqual({ ...values, name: 'Jose' });

    });

    test('Debe de restablecer el formulartio con RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Jose'
                }
            });
            reset();
        })

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });




});
