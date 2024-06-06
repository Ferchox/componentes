import React, { useState } from "react";
import "./FormularioMeta.css";
import InputFecha from "../moleculas/InputFecha.jsx";

function FormularioMeta() {
  const [value, setValue] = useState("");

  return (
    <div className="registro-formulario-metas">
      <div>
        <span>Crear nueva meta</span>
      </div>
      <h1 className="crear-meta">Título de meta</h1>
      <input type="text" />
      <h1 className="crear-meta">Seleccionar fecha límite:</h1>
      <InputFecha />
      <button className="button">Aceptar</button>
    </div>
  );
}

export default FormularioMeta;
