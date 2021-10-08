import '@testing-library/jest-dom'

import {getSaludo} from '../../base/02-template-string'

describe('templete String', () =>{
    const nombre = 'David';
    const saludo = getSaludo(nombre)

    test('verificar nombre', () =>{
        expect(saludo).toBe('Hola' + nombre)
    })
})