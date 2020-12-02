import '@testing-library/jest-dom';
import {getHeroeByIdAsync} from '../../base/09-promesas'
import heroes from '../../data/heroes';


describe('Pruebas con peticiones async', () => {

    test('getHeroeByIdAsync debe devolver un heroe por id async - then', (done) => {
        
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            }
        )
    })

    test('getHeroeByIdAsync debe devolver un error si no existe - catch', (done) => {

        const id = 10;

        getHeroeByIdAsync(id)
        .catch(error => {

            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
        
    })
    
    
    
})
