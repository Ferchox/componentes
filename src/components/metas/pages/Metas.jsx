import React, { useState } from "react";
import "./Metas.css";
import MetasPendientes from "../organismos/MetasPendientes.jsx";
import Cabecera from "../../general/organismos/Cabecera.jsx";
import PiePagina from "../../general/organismos/PiePagina.jsx";
import BarraNavegacion from '../../general/organismos/BarraNavegacion';

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
