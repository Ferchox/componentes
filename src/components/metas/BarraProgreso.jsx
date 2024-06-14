import React from "react";
import "./BarraProgreso.css";

function BarraProgreso({ porcentaje }) {
  return (
    <div className="barra-progreso">
      <div className="barra-progreso-lleno" style={{ width: `${porcentaje}%` }}>
        <span className="barra-progreso-texto">{porcentaje.toFixed(1)}%</span> 
      </div>
    </div>
  );
}

export default BarraProgreso;