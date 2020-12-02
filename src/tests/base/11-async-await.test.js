import '@testing-library/jest-dom';
import {getImagen} from '../../base/11-async-await'

describe('Pruebas con asyn y await', () => {

    test('Debe devolver una url de la image', async() => {
        
        const url = await getImagen();
        //console.log(url)

        expect(typeof url).toBe('string')
        
    });
    
    
})
