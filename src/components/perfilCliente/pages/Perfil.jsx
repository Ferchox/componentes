import React from 'react'
import InformacionPerfil from '../organismos/InformacionPerfil'
import BarraNavegacion from '../../general/organismos/BarraNavegacion'
import Cabecera from '../../general/organismos/Cabecera'
import PiePagina from '../../general/organismos/PiePagina'
import EtiquetaPagina from '../moleculas/EtiquetaPagina'

const Perfil = () => {
  return (
    <>
      <Cabecera />
      <BarraNavegacion />
      <EtiquetaPagina />
      <InformacionPerfil />
      <PiePagina />
    </>
  )
}

export default Perfil
