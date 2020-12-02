import React from "react"; //a mi no me lo pidio
import "@testing-library/jest-dom";
import PrimeraApp from "../../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas a <PrimeraApp />", () => {

  test('Debe mostar <PrimeraApp /> correctaente', () => {
    const saludo = "Hola, soy Lorena";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola soy Lorena";
    const subtitulo = "Soy un subtituo";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    //funciona como document.getQuerySelector()
    //se puede buscar por id o clase, y se puede buscar en vez de txt html() por ej
    const textParrafo = wrapper.find("p").text();
   
    expect(textParrafo).toBe(subtitulo);
  });
  
});
