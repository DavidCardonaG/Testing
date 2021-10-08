import '@testing-library/jest-dom'

import {retornaArreglo} from '../../base/07-deses-arr'

describe('Validar Letras y Números', () =>{
    test('letras y numeros', () =>{
        expect(retornaArreglo()).toEqual({
            letras:'ABC',
            number:123
        })
    })
})