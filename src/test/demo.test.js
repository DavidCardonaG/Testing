describe('Pruebas demo.test',() =>{
    test('los string deben ser iguales',()=>{
        const mensajeUno = 'Hola Mundo';
        const mensajeDos = 'Hola Clase';

        expect(mensajeUno).toBe(mensajeDos);
    })
})