import React from 'react';
import InformacionPerfil from '../organismos/InformacionPerfil';
import BarraNavegacion from '../../general/BarraNavegacion';
import Cabecera from '../../general/Cabecera';
import PiePagina from '../../general/PiePagina';
import './Perfil.css';

const Perfil = () => {
  return (
    <>
      <div className="perfil-container">
        <Cabecera />
        <BarraNavegacion />
        <InformacionPerfil />
        <PiePagina />
      </div>
    </>
  );
}

export default Perfil;
