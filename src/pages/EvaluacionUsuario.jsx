import React from "react";
import './EvaluacionUsuario.css';
import Evaluacion from "../components/evaluacionUsuario/Evaluacion.jsx";
import PiePagina from "../components/general/organismos/PiePagina.jsx";
import BarraNavegacion from "../components/general/organismos/BarraNavegacion.jsx";
import Cabecera from "../components/general/organismos/Cabecera.jsx";
function EvaluacionUsuario() {
  return (
    <div className="contenedor-evaualcion-usuario">
      <Cabecera />
      <BarraNavegacion />
      <Evaluacion />
      <PiePagina />
    </div>
  );
}

export default EvaluacionUsuario;
