import React from 'react'
import BarraNavegacion from '../../general/organismos/BarraNavegacion'
import Cabecera from '../../general/organismos/Cabecera'
import SeleccionParteCuerpo from '../../general/organismos/SeleccionParteCuerpo'
import PiePagina from '../../general/organismos/PiePagina'
import EtiquetaPagina from '../moleculas/EtiquetaPagina'

const GenerarRutina = () => {
  return (
    <>
      <Cabecera />
      <BarraNavegacion />
      <SeleccionParteCuerpo />
      <EtiquetaPagina />
      <PiePagina />
    </>
  )
}

export default GenerarRutina