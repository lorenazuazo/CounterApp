import { getSaludo } from '../../base/02-template-string';
import '@testing-library/jest-dom';

describe('Pruebas en Templet-string', () => {

    test('getSaludo debe retornar Hola + Nombre', () => {

        const nombre = 'Lore';
        const saludo = getSaludo(nombre);

        //console.log(saludo)

        expect(saludo).toBe('Hola ' + nombre);
        
    });   
    
    test('getSaludo debe retornar Hola Matias si no hay argmento', () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Matias')
        
    });
    
});
