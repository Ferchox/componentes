import React from "react";
import "./Boton.css";

const Boton = ({ children, onClick, disabled = false }) => {
  return (
    <button className="boton" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Boton;
