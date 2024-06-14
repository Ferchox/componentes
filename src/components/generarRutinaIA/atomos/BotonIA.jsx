import React from "react";
import "./BotonIA.css";

const Boton = ({ onClick, children, className }) => {
  return (
    <button className={`boton ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Boton;
