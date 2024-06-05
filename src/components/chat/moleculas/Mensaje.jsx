import React from "react";
import "./Mensaje.css"
const Mensaje = ({ text, role, imagen }) => {
  return (
    <div className={`mensaje-contenedor-${role}`}>
      {imagen && (
        <div className="avatar-container">
          <img src={imagen} alt={`Avatar ${role}`} className="avatar" />
        </div>
      )}
      <div className={`mensaje ${role}`}>
        <div className="mensaje-texto">{text}</div>
      </div>
    </div>
  );
};

export default Mensaje;