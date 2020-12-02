describe('Pruebas dentro de demo.test.js', () => {
    test('Deben ser iguales los srtring ', () => {
        //1.inicializacion
        const mensaje ='Hola Lore';
    
        //2.Estimulo
        const mensaje2="Hola Lore";
    
        //3.observar comportamiento
        expect(mensaje).toBe(mensaje2);
    })
});






