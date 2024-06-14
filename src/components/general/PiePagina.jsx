import React from 'react';
import Copyright from './Copyright';
import Email from './Email';
import RedesSociales from './RedesSociales';
import './PiePagina.css';

const PiePagina = () => {
    return (
        <footer className="contenedor-pie-pagina">
            <div className='pie-texto'>
                <Copyright />
                <Email />
            </div>
            <div className='redes-sociales'>
                <RedesSociales />
            </div>
        </footer>
    );
};

export default PiePagina;
