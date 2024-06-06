import React from "react";
import './EvaluacionUsuario.css';
import Evaluacion from "../organismos/Evaluacion.jsx";
import Cabecera from "../../general/organismos/Cabecera.jsx";
import PiePagina from "../../general/organismos/PiePagina.jsx";
import BarraNavegacion from "../../general/organismos/BarraNavegacion";
function EvaluacionUsuario() {
  return (
    <div className="contenedor">
      <Cabecera />
      <BarraNavegacion />
      <Evaluacion />
      <PiePagina />
    </div>
  );
}

export default EvaluacionUsuario;
