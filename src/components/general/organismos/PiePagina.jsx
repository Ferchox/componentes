import React from 'react';
import Copyright from '../moleculas/Copyright';
import Email from '../moleculas/Email';
import RedesSociales from '../moleculas/RedesSociales';
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
