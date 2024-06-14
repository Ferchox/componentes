import React from 'react'
import BarraNavegacion from '../components/general/BarraNavegacion.jsx';
import Cabecera from '../components/general/Cabecera.jsx';
import PiePagina from '../components/general/PiePagina.jsx';
import RestablecerContrasena from '../components/inicioSesionUsuario/RestablecerContrasena';

const Restablecer = () => {
    return (
        <div className='contenedor-restablecer-contra'>
            <Cabecera />
            <BarraNavegacion />
            <RestablecerContrasena />
            <PiePagina />
        </div>
    )
}

export default Restablecer