import React from 'react'
import TarjetaMaquinas from '../organismos/TarjetaMaquinas'
import BarraNavegacion from '../../general/organismos/BarraNavegacion';
import Cabecera from '../../general/organismos/Cabecera';
import PiePagina from '../../general/organismos/PiePagina';
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