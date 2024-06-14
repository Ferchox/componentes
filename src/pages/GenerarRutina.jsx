import React from 'react'
import BarraNavegacion from '../components/general/BarraNavegacion'
import Cabecera from '../components/general/Cabecera'
import SeleccionParteCuerpo from '../components/generarRutina/SeleccionParteCuerpo'
import PiePagina from '../components/general/PiePagina'
import './GenerarRutina.css'

const GenerarRutina = () => {
  return (
    <div className='generar-rutina-container'>
      <Cabecera />
      <BarraNavegacion />
      <SeleccionParteCuerpo />
      <PiePagina />
    </div>
  )
}

export default GenerarRutina