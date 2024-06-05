import React from 'react'
import InformacionPerfil from '../organismos/InformacionPerfil'
import BarraNavegacion from '../../general/organismos/BarraNavegacion'
import Cabecera from '../../general/organismos/Cabecera'
import PiePagina from '../../general/organismos/PiePagina'

const Perfil = () => {
  return (
    <>
      <Cabecera />
      <BarraNavegacion />
      <InformacionPerfil />
      <PiePagina />
    </>
  )
}

export default Perfil