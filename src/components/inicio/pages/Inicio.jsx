import React from 'react'
import InformacionPrincipal from '../organismos/InformacionPrincipal'
import BarraNavegacion from '../../general/organismos/BarraNavegacion';
import Cabecera from '../../general/organismos/Cabecera';
import PiePagina from '../../general/organismos/PiePagina';
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