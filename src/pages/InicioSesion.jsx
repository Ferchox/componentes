import React from 'react';
import InicioSesionUsuario from '../components/inicioSesionUsuario/InicioSesionUsuario.jsx';
import BarraNavegacion from '../components/general/BarraNavegacion.jsx';
import Cabecera from '../components/general/Cabecera.jsx';
import PiePagina from '../components/general/PiePagina.jsx';
import './InicioSesion.css';

const InicioSesion = () => {
    return (
        <div className='contenedor-inicio-sesion'>
            <Cabecera />
            <BarraNavegacion />
            <InicioSesionUsuario onSubmit={(datos) => ""} />
            <PiePagina />
        </div>
    );
};

export default InicioSesion;
