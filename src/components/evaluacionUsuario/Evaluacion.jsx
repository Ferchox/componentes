import React from 'react';
import './Evaluacion.css';
import DescripcionEvaluacionUsuario from './DescripcioEvaluacion';
import GraficoEvaluacionUsuario from './GraficoEvaluacionUsuario';
import EtiquetaTitulo from '../general/EtiquetaTitulo';

function Evaluacion() {

  return (
    <div className="contenedor-evaluacion">
      <EtiquetaTitulo titulo='Evolución' />
      <div className='tarjeta-evaluacion'>
        <DescripcionEvaluacionUsuario />
        <GraficoEvaluacionUsuario />
      </div>
    </div>
  );
}

export default Evaluacion;