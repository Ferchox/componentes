import React from 'react'
import BarraNavegacion from '../../general/organismos/BarraNavegacion'
import Cabecera from '../../general/organismos/Cabecera'
import SeleccionParteCuerpoIA from '../../generarRutinaIA/organismos/SeleccionParteCuerpoIA'
import PiePagina from '../../general/organismos/PiePagina'
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