import React from 'react'
import BarraNavegacion from '../../general/BarraNavegacion'
import Cabecera from '../../general/Cabecera'
import SeleccionParteCuerpoIA from '../../generarRutinaIA/organismos/SeleccionParteCuerpoIA'
import PiePagina from '../../general/PiePagina'
import './GenerarRutinaIA.css'

const GenerarRutina = () => {
  return (
    <div className='generar-rutina-container'>
      <Cabecera />
      <BarraNavegacion />
      <SeleccionParteCuerpoIA />
      <PiePagina />
    </div>
  )
}

export default GenerarRutina