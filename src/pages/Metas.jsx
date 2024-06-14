import React, { useState } from "react";
import "./Metas.css";
import MetasPendientes from "../components/metas/MetasPendientes.jsx";
import BarraNavegacion from '../components/general/BarraNavegacion.jsx';
import Cabecera from '../components/general/Cabecera.jsx';
import PiePagina from '../components/general/PiePagina.jsx';

function Metas() {
  return (
    <div className="contenedor-metas">
      <Cabecera />
      <BarraNavegacion />
      <MetasPendientes />
      <PiePagina />
    </div>
  );
}

export default Metas;
