import React from 'react'
import TarjetaMaquinas from '../organismos/TarjetaMaquinas'
import BarraNavegacion from '../../general/BarraNavegacion';
import Cabecera from '../../general/Cabecera';
import PiePagina from '../../general/PiePagina';
import './InformacionMaquinas.css'

const Inicio = () => {
    return (
        <div className='contenedor-ejercicios'>
            <Cabecera />
            <BarraNavegacion />
            <TarjetaMaquinas />
            <PiePagina />
        </div>
    )
}

export default Inicio