import React from "react";
import "./CampoTextoArea.css";

const CampoTextoArea = ({ placeholder, valor, onChange }) => {
  return (
    <textarea
      className="campo-texto-area"
      placeholder={placeholder}
      value={valor}
      onChange={onChange}
    />
  );
};

export default CampoTextoArea;
