import React from 'react'
import PiePagina from '../../general/PiePagina'
import Funciones from "../../PantallaEntrenador/organismos/Entrenadores"
import Cabecera from '../../general/Cabecera'
import BarraNavegacion from '../../general/BarraNavegacion'
import './PEntrenador.css'

const PEntrenador = () => {
  return (
    <div className='entrenador-container'>
      <Cabecera />
      <BarraNavegacion />
      <Funciones />
      <PiePagina />
    </div>
  )
}

export default PEntrenador