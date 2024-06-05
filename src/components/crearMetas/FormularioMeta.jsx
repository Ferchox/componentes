import React, { useState } from "react";
import "./FormularioMeta.css";
import gymLogo from "../../assets/gym-logo.jpg";

function FormularioMeta() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <img src={gymLogo} alt="Gym Logo" className="gym-logo" /> 
      <div className="crear-meta">
        <span>Crear nueva meta</span>
      </div>
      <h1>Título de meta</h1>
      <input type="text" />
      <h1>Seleccionar fecha límite:</h1>
      <input
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
        max={
          new Date(new Date().setFullYear(new Date().getFullYear() + 1))
            .toISOString()
            .split("T")[0]
        }
      />
      <button className="button">Aceptar</button>
      <div className="search-bar">Contactos</div>
    </div>
  );
}

export default FormularioMeta;
