import React from 'react';

//Function expression
const Footer = ({ fecha }) => {
    return (
        <footer>
            <p>Todos los derechos reservados {fecha} &copy;</p>
        </footer>
    );
}
export default Footer;