import '@testing-library/jest-dom';
import { getUser,getUsuarioActivo } from '../../base/05-funciones';

describe('Test a 05-funciones', () => {

    test('getUser debe devolver un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)
        
    })

    test('getUserActivo debe devolver el objeto, recibe comoparametro un nombre', () => {

        const nombre = 'Lorena';

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
        
    })
    
});
