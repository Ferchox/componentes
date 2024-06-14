import React from 'react';
import './BotonIA.css';

const Boton = ({ onClick, children }) => {
  return (
    <button className="boton" onClick={onClick} >
      {children}
    </button>
  );
}

export default Boton;
