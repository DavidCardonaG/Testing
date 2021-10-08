import '@testing-library/jest-dom'

import {getUser, getUsuarioActivo} from '../../base/05-funciones'

describe('Funciones', () =>{
    test('Valores Iguales', () =>{
        expect(getUser()).toEqual({
            uid:'ABC123',
            username:'David'
        })
    })
})