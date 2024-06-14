import React from 'react'
import InformacionPrincipal from '../components/inicio/InformacionPrincipal';
import BarraNavegacion from '../components/general/BarraNavegacion';
import Cabecera from '../components/general/Cabecera';
import PiePagina from '../components/general/PiePagina';
import './Inicio.css'

const Inicio = () => {
    return (
        <div className='contenedor-inicio'>
            <Cabecera />
            <BarraNavegacion />
            <InformacionPrincipal />
            <PiePagina />
        </div>
    )
}

export default Inicio