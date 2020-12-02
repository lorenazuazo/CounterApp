import React from 'react';
import PropTypes from 'prop-types';
//<> y cerrado con </>
const PrimeraApp = ({saludo, subtitulo}) => {

    //const saludo = 'Hola Mundo'
    const obj = {
        nom:'lore',
        ap:'zuazo',
    }
    return (
        <>
            <h1>{saludo}!!!!</h1>
            {/* <pre>{JSON.stringify(obj,null,3)}</pre> */}
            {/* <p>Primera App</p> */}
            <p>{subtitulo}</p>
        </>
    )
}
//esto es para exigir a los props
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
//props por default en ved de parametro
PrimeraApp.defaultProps = {
    subtitulo:'es titulo default'
}
export default PrimeraApp;
