import React from 'react'
import InformacionPrincipal from '../organismos/InformacionPrincipal'
import BarraNavegacion from '../../general/BarraNavegacion';
import Cabecera from '../../general/Cabecera';
import PiePagina from '../../general/PiePagina';
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