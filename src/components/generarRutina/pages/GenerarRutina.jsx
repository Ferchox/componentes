import React from 'react'
import BarraNavegacion from '../../general/organismos/BarraNavegacion'
import Cabecera from '../../general/organismos/Cabecera'
import SeleccionParteCuerpo from '../../general/organismos/SeleccionParteCuerpo'
import PiePagina from '../../general/organismos/PiePagina'
import EtiquetaPag from '../moleculas/EtiquetaPag'

const GenerarRutina = () => {
  return (
    <>
      <Cabecera />
      <BarraNavegacion />
      <SeleccionParteCuerpo />
      <EtiquetaPag />
      <PiePagina />
    </>
  )
}

export default GenerarRutina