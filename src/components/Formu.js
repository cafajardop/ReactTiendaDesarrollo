import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

//Function Declaration
function Formu() {

    const edad = 18;

    let mensaje;
    if (edad >= 18) {
        mensaje = 'Eres mayor de Edad'
    } else {
        mensaje = 'Eres menor de Edad'
    }

    return (
        <h1>Desde el Formu probando {edad} {mensaje} </h1>
    )
}

export default Formu;