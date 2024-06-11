import React, { useState } from "react";
import "./GraficoEvaluacionUsuario.css";

function GraficoEvaluacionUsuario() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(0);
  const opciones = ["Muscular", "Resistencia", "Cardio", "Fuerza"];

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setOpcionSeleccionada((prev) =>
        prev === 0 ? opciones.length - 1 : prev - 1
      );
    } else if (direction === "right") {
      setOpcionSeleccionada((prev) =>
        prev === opciones.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="contenedor-grafico">
      <div className="titulo">
        <span className="arrow-left" onClick={() => handleArrowClick("left")}>
          ←
        </span>
        <h1>{opciones[opcionSeleccionada]}</h1>
        <span className="arrow-right" onClick={() => handleArrowClick("right")}>
          →
        </span>
      </div>
      <div className="contenedor-progreso">
        {[
          { porcentaje: "90%", dia: "Lunes", value: 0.9 },
          { porcentaje: "80%", dia: "Martes", value: 0.8 },
          { porcentaje: "70%", dia: "Miércoles", value: 0.7 },
          { porcentaje: "60%", dia: "Jueves", value: 0.6 },
          { porcentaje: "50%", dia: "Viernes", value: 0.5 },
        ].map((item, index) => (
          <div key={index} className="dia-porcentaje">
            <div className="porcentaje">{item.porcentaje}</div>
            <div className="barra" style={{ "--porcentaje": item.value }}></div>
            <div className="dia">{item.dia}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GraficoEvaluacionUsuario;