import '@testing-library/jest-dom'
import {getHeroeByIdAsync} from '../../base/09-promesas'
import {heroes} from '../../data/heros'

describe('TEST PROMESAS' , () => {

    test('Prueba Heroe Async', (done) => {
        const id= 2
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBe(heroes[0])
                done()
        })

    })

    test('Validar Heroe No Exist', (done) => {
        const id=10
        getHeroeByIdAsync(id)
        .catch(err => {
            expect(err).toBe('Error Heroe No Exist')
            done()
        })

    })

})