import '@testing-library/jest-dom'
import {getHeroeById,getHeroesByOwner} from '../../base/08-imp-exp'
import {heroes} from '../../data/heros'
import {Marvel,Dc} from '../../data/heros'

describe('Pruebas Fución Heroes', () => {
    test('Retornar ID', () =>{
        const id= 2;
        const personaje = getHeroeById(id);

        const heroesDt= heroes.find((he)=>he.id === id);
        expect(heroesDt).toEqual(personaje)
    })

    test('Retornar undefined Si No Existe', () => {
        const id=10
        const personaje = getHeroeById(id)
        expect(personaje).toEqual(undefined)

    })

    test('Filter OWNER', () => {
        const owner = [Marvel,Dc];
        const ow = getHeroesByOwner(owner)

        const ownerDt = heroes.filter( (h) => h.owner === owner )
        expect(ownerDt).toEqual(ow)

    })
})

