import React from 'react';
import './Boton.css';

const Boton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="boton">
      {children}
    </button>
  );
}

export default Boton;
