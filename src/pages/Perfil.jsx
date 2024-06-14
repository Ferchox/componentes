import React from 'react';
import InformacionPerfil from '../components/perfilCliente/InformacionPerfil.jsx';
import BarraNavegacion from '../components/general/BarraNavegacion.jsx';
import Cabecera from '../components/general/Cabecera.jsx';
import PiePagina from '../components/general/PiePagina.jsx';
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
