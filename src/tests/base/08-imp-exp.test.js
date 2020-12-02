import '@testing-library/jest-dom';
import { getHeroeById,getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {

    test('getHeroeById devuelve un heroe por Id que existe pasado por parametro', () => {
        const id= 1;
        const heroe= getHeroeById(id);

        const heroeTest = heroes.find(h => h.id === id)
        //console.log(heroeTest)

        expect(heroe).toEqual(heroeTest)
    })

    test('getHeroeById devuelve undefined,el id del heroe pasado por parametro no existe', () => {
        const id= 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })
    
    test('getHeroesByOwner devuelve los heroes por owner', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeTest = heroes.filter(h=>h.owner === owner);
       
        expect(heroe).toEqual(heroeTest);
        
    })

    test('getHeroesByOwner devuelve heroes de Marvel y deben ser dos', () => {

        const owner = 'Marvel';
        const arrHeroes = heroes.filter(h => h.owner === owner);

        const heroesLength = arrHeroes.length;

        expect(heroesLength).toBe(2);
        
    });
    
    
    
    
});
