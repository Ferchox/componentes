import React from 'react';
import './Boton.css';

const Boton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} >
      {children}
    </button>
  );
}

export default Boton;
