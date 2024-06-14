import React from 'react'
import BarraNavegacion from '../../general/BarraNavegacion'
import Cabecera from '../../general/Cabecera'
import Rutinas from '../organismos/Rutinas'
import PiePagina from '../../general/PiePagina'
import './VerRutinas.css'

const VerRutinas = () => {
    return (
        <div className='contenedor-ver-rutinas'>
            <Cabecera />
            <BarraNavegacion />
            <Rutinas />
            <PiePagina />
        </div>
    )
}

export default VerRutinas