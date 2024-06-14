import React from 'react'
import BarraNavegacion from '../../general/organismos/BarraNavegacion'
import Cabecera from '../../general/organismos/Cabecera'
import Rutinas from '../organismos/Rutinas'
import PiePagina from '../../general/organismos/PiePagina'
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