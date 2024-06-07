import React from 'react'
import PiePagina from '../../general/organismos/PiePagina'
import Funciones from "../../PantallaEntrenador/organismos/Entrenadores"
import Cabecera from '../../general/organismos/Cabecera'
import BarraNavegacion from '../../general/organismos/BarraNavegacion'
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