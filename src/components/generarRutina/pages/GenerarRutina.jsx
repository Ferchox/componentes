import React from 'react'
import BarraNavegacion from '../../general/organismos/BarraNavegacion'
import Cabecera from '../../general/organismos/Cabecera'
import SeleccionParteCuerpo from '../../generarRutina/organismos/SeleccionParteCuerpo'
import PiePagina from '../../general/organismos/PiePagina'
import EtiquetaPag from '../moleculas/EtiquetaPag'
import './GenerarRutina.css'

const GenerarRutina = () => {
  return (
    <div className='generar-rutina-container'>
      <Cabecera />
      <BarraNavegacion />
      <EtiquetaPag />
      <SeleccionParteCuerpo />
      <PiePagina />
    </div>
  )
}

export default GenerarRutina