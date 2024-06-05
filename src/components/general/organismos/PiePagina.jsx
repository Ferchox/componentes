import React from 'react';
import Copyright from '../moleculas/Copyright';
import Email from '../moleculas/Email';
import RedesSociales from '../moleculas/RedesSociales';
import './PiePagina.css';

const PiePagina = () => {
    return (
        <footer className="contenedor-pie-pagina">
            <Copyright />
            <Email />
            <RedesSociales />
        </footer>
    );
};

export default PiePagina;
