import React from 'react';
import './ContenedorBotones.css';

const ContenedorBotones = ({ children }) => {
  return (
    <div className="contenedor-botones">
      {children}
    </div>
  );
}

export default ContenedorBotones;
