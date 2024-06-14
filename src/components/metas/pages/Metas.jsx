import React, { useState } from "react";
import "./Metas.css";
import MetasPendientes from "../organismos/MetasPendientes.jsx";
import Cabecera from "../../general/Cabecera.jsx";
import PiePagina from "../../general/PiePagina.jsx";
import BarraNavegacion from '../../general/BarraNavegacion.jsx';

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
