import React from 'react';
import './Evaluacion.css';
import DescripcionEvaluacionUsuario from '../atomos/DescripcioEvaluacion';
import GraficoEvaluacionUsuario from '../moleculas/GraficoEvaluacionUsuario';

function Evaluacion() {

  return (
    <div className="contenedor-evaluacion">
      < DescripcionEvaluacionUsuario />
      <GraficoEvaluacionUsuario />
    </div>
  );
}

export default Evaluacion;