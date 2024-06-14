import React from 'react'
import Rutinas from '../components/VerRutinas/Rutinas.jsx';
import BarraNavegacion from '../components/general/BarraNavegacion.jsx';
import Cabecera from '../components/general/Cabecera.jsx';
import PiePagina from '../components/general/PiePagina.jsx';
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