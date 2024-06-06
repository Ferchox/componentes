import React from 'react'
import BarraNavegacion from '../../general/organismos/BarraNavegacion'
import Cabecera from '../../general/organismos/Cabecera'
import SeleccionParteCuerpo from '../../generarRutina/organismos/SeleccionParteCuerpo'
import PiePagina from '../../general/organismos/PiePagina'
import EtiquetaPag from '../moleculas/EtiquetaPag'

const GenerarRutina = () => {
  return (
    <div className='generarRutina-container'>
      <Cabecera />
      <BarraNavegacion />
      <SeleccionParteCuerpo />
      <EtiquetaPag />
      <PiePagina />
    </div>
  )
}

export default GenerarRutina