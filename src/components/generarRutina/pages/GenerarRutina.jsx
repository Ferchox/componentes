import React from 'react'
import BarraNavegacion from '../../general/BarraNavegacion'
import Cabecera from '../../general/Cabecera'
import SeleccionParteCuerpo from '../../generarRutina/organismos/SeleccionParteCuerpo'
import PiePagina from '../../general/PiePagina'
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