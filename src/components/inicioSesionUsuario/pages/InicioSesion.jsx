import React from 'react';
import InicioSesionUsuario from '../organismos/InicioSesionUsuario.jsx';
import BarraNavegacion from '../../general/BarraNavegacion.jsx';
import Cabecera from '../../general/Cabecera.jsx';
import PiePagina from '../../general/PiePagina.jsx';
import './InicioSesion.css';

const InicioSesion = () => {
    return (
        <div className='contenedor-inicio-sesion'>
            <Cabecera />
            <BarraNavegacion />
            <InicioSesionUsuario onSubmit={(datos) => console.log(datos)} />
            <PiePagina />
        </div>
    );
};

export default InicioSesion;
