import React from 'react';
import './ContenedorEjercicioIA.css';

const ContenedorEjercicio = ({ children }) => {
  return (
    <div className="contenedor-ejercicio">
      {children}
    </div>
  );
}

export default ContenedorEjercicio;
