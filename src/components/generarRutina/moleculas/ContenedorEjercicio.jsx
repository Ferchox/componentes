import React from 'react';
import './ContenedorEjercicio.css';

const ContenedorEjercicio = ({ children }) => {
  return (
    <div className="contenedor-ejercicio">
      {children}
    </div>
  );
}

export default ContenedorEjercicio;
