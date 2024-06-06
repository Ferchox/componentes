import React from 'react';
import InicioSesionUsuario from '../organismos/InicioSesionUsuario.jsx';
import BarraNavegacion from '../../general/organismos/BarraNavegacion';
import Cabecera from '../../general/organismos/Cabecera';
import PiePagina from '../../general/organismos/PiePagina';
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
