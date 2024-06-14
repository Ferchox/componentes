import React from 'react'
import BarraNavegacion from '../components/general/BarraNavegacion'
import Cabecera from '../components/general/Cabecera'
import PiePagina from '../components/general/PiePagina'
import SeleccionParteCuerpoIA from '../components/generarRutinaIA/SeleccionParteCuerpoIA'
import './GenerarRutinaIA.css'

const GenerarRutina = () => {
  return (
    <div className='generar-rutina-ia-container'>
      <Cabecera />
      <BarraNavegacion />
      <SeleccionParteCuerpoIA />
      <PiePagina />
    </div>
  )
}

export default GenerarRutina