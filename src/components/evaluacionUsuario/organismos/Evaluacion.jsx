import React from 'react';
import './Evaluacion.css';
import DescripcionEvaluacionUsuario from '../atomos/DescripcioEvaluacion';
import GraficoEvaluacionUsuario from '../moleculas/GraficoEvaluacionUsuario';
import EtiquetaTitulo from '../../general/moleculas/EtiquetaTitulo';

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