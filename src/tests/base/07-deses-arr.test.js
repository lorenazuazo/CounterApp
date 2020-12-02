import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en archivo 07-destructuring', () => {

    test('retornaArreglo debe retornar un string y un numero', () => {

        const arr =  retornaArreglo(); //['ABC', 123]
        
        expect(arr).toEqual(['ABC', 123]);
    })

    test('retornaArreglo debe retornar typeOf string y number ', () => {

        const [letras, numeros] = retornaArreglo();

        expect(typeof letras).toBe('string');
        expect(letras).toBe('ABC');

        expect(typeof numeros).toBe('number');
        expect(numeros).toBe(123);

        
    })
    
    
    
});
