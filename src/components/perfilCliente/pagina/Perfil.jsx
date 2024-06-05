import React from 'react'
import InformacionPerfil from '../organismos/InformacionPerfil'
import Cabecera from '../../general/organismos/Cabecera'
import PiePagina from '../../general/organismos/PiePagina'

const Perfil = () => {
  return (
    <>
      <Cabecera />
      <InformacionPerfil />
      <PiePagina />
    </>
  )
}

export default Perfil