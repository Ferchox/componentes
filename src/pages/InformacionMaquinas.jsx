import React from 'react'
import TarjetaMaquinas from '../components/infoMaquinas/TarjetaMaquinas'
import BarraNavegacion from '../components/general/BarraNavegacion';
import Cabecera from '../components/general/Cabecera';
import PiePagina from '../components/general/PiePagina';
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