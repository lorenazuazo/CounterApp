import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import PrimeraApp from "../PrimeraApp";

describe("Test a <CounterApp />", () => {
//declaro esta variable a nivel global y le doy el mismo valor por defect que dentro del forEach
//para no pereder el inteliscence 
//con beforeEach hago que se reinicie con cada prueba
  let wrapper = shallow(<CounterApp />);
  beforeEach( () =>{
    wrapper = shallow(<CounterApp />);
  } );

  test("El componente se debe renderizar correctamente con valores por defecto", () => {
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper).toMatchInlineSnapshot();
  });

  test("debe mostrat el valor por defecto de 100", () => {
    const propDefault = "100";
    const wrapper = shallow(<CounterApp value={100} />);
    //busca el text de h2 y le quita los espacios el trim
    const valor = wrapper.find("h2").text().trim();
    //console.log(valor)
    expect(valor).toBe(propDefault);
  });

  test('el boton +1 debe incrementar el contador', () => {
    //busca el boton 0 en la lista
    const btnAdd = wrapper.find('button').at(0);
    //me devuelve el html de ese boton
    //console.log(btnAdd.html())
    //simula el click
    btnAdd.simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('11');
    
  })
  
  test('el boton -1 debe decrementar el contador ', () => {
    
    const btnSubstract = wrapper.find('button').at(2);
    btnSubstract.simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('9');
  })
  
test('el boton reset debe volver al valor pasado en las prop por default', () => {
  const wrapper = shallow(<CounterApp value={105} />);
  wrapper.find('button').at(0).simulate('click');
  wrapper.find('button').at(0).simulate('click');

  wrapper.find('button').at(1).simulate('click');

  const counterText = wrapper.find('h2').text().trim();

  expect(counterText).toBe('105');
})

});
