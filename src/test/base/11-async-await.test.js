import {getImagen} from '../../base/11-async-await'

describe('Validar Imagen', () => {
    test('Return URL', async() => {

        const url = await getImagen()
        console.log(url)

        expect(url.includes('http://')).toBe(true)

    })
})
