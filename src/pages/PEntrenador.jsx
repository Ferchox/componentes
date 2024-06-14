import React from 'react'
import Entrenadores from '../components/PantallaEntrenador/Entrenadores.jsx';
import BarraNavegacion from '../components/general/BarraNavegacion.jsx';
import Cabecera from '../components/general/Cabecera.jsx';
import PiePagina from '../components/general/PiePagina.jsx';
import './PEntrenador.css'

const PEntrenador = () => {
  return (
    <div className='entrenador-container'>
      <Cabecera />
      <BarraNavegacion />
      <Entrenadores />
      <PiePagina />
    </div>
  )
}

export default PEntrenador