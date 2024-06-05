import React, { useState } from "react";
import "./FormularioMeta.css";
import InputFecha from "../moleculas/InputFecha.jsx";

function FormularioMeta() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="crear-meta">
        <span>Crear nueva meta</span>
      </div>
      <h1>Título de meta</h1>
      <input type="text" />
      <h1>Seleccionar fecha límite:</h1>
      <InputFecha />
      <button className="button">Aceptar</button>
    </div>
  );
}

export default FormularioMeta;
