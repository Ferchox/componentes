import React from 'react'
import BarraNavegacion from '../components/general/BarraNavegacion.jsx';
import Cabecera from '../components/general/Cabecera.jsx';
import PiePagina from '../components/general/PiePagina.jsx';
import VerificarCodigo from '../components/inicioSesionUsuario/VerificarCodigo.jsx';

const VerificarCodigoRestablecer = () => {
    return (
        <div className='contenedor-verif'>
            <Cabecera />
            <BarraNavegacion />
            <VerificarCodigo />
            <PiePagina />
        </div>
    )
}

export default VerificarCodigoRestablecer