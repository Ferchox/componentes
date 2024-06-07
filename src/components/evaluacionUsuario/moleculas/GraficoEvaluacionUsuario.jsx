import React from "react";
import "./GraficoEvaluacionUsuario.css";

function GraficoEvaluacionUsuario() {
  const opciones = ["Muscular", "Resistencia", "Cardio", "Fuerza"];

  const handleKeyPress = (event) => {
    if (event.key === "ArrowLeft") {
      setOpcionSeleccionada((prev) => (prev === 0 ? opciones.length - 1 : prev - 1));
    } else if (event.key === "ArrowRight") {
      setOpcionSeleccionada((prev) => (prev === opciones.length - 1 ? 0 : prev + 1));
    }
  };
  return (
    <div className="contenedor-grafico">
      <div className="titulo" tabIndex="0" onKeyDown={handleKeyPress}>
      <h1> ← {opciones[opcionSeleccionada]} →</h1>
    </div>
      <div className="contenedor-progreso">
        <div className="dia-porcentaje">
          <div className="porcentaje">90%</div>
          <div className="barra" style={{ "--porcentaje": "0.9" }}></div>
          <div className="dia">Lunes</div>
        </div>
        <div className="dia-porcentaje">
          <div className="porcentaje">80%</div>
          <div className="barra" style={{ "--porcentaje": "0.8" }}></div>
          <div className="dia">Martes</div>
        </div>
        <div className="dia-porcentaje">
          <div className="porcentaje">70%</div>
          <div className="barra" style={{ "--porcentaje": "0.7" }}></div>
          <div className="dia">Miércoles</div>
        </div>
        <div className="dia-porcentaje">
          <div className="porcentaje">60%</div>
          <div className="barra" style={{ "--porcentaje": "0.6" }}></div>
          <div className="dia">Jueves</div>
        </div>
        <div className="dia-porcentaje">
          <div className="porcentaje">50%</div>
          <div className="barra" style={{ "--porcentaje": "0.5" }}></div>
          <div className="dia">Viernes</div>
        </div>
      </div>
    </div>
  );
}

export default GraficoEvaluacionUsuario;
