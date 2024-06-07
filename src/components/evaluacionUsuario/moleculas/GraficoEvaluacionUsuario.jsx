import React from "react";
import "./GraficoEvaluacionUsuario.css";

function GraficoEvaluacionUsuario() {
  return (
    <div className="contenedor-grafico">
      <h1 className="titulo">CUADRO DE EVOLUCIÓN</h1>
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
