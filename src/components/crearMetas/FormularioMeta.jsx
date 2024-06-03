import React, { useState } from "react";
import "./FormularioMeta";

function FormularioMeta() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
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
      <button>Aceptar</button>
    </div>
  );
}

export default FormularioMeta;
