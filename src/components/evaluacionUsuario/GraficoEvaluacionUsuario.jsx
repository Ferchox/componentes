import React from "react";
import "./GraficoEvaluacionUsuario.css";
import Cabecera from "../general/organismos/Cabecera";
import BarraNavegacion from "../general/organismos/BarraNavegacion";
import PiePagina from "../general/organismos/PiePagina";

function GraficoEvaluacionUsuario() {
  return (
    <>
      <Cabecera />
      <BarraNavegacion />
      <div className="container">
        <h1 className="title">CUADRO DE EVOLUCIÓN</h1>
        <div className="progress-container">
          <div className="day-percentage">
            <div className="day">Lunes</div>
            <div className="bar" style={{ "--percentage": "0.9" }}></div>
            <div className="percentage">90%</div>
          </div>
          <div className="day-percentage">
            <div className="day">Martes</div>
            <div className="bar" style={{ "--percentage": "0.8" }}></div>
            <div className="percentage">80%</div>
          </div>
          <div className="day-percentage">
            <div className="day">Miércoles</div>
            <div className="bar" style={{ "--percentage": "0.7" }}></div>
            <div className="percentage">70%</div>
          </div>
          <div className="day-percentage">
            <div className="day">Jueves</div>
            <div className="bar" style={{ "--percentage": "0.6" }}></div>
            <div className="percentage">60%</div>
          </div>
          <div className="day-percentage">
            <div className="day">Viernes</div>
            <div className="bar" style={{ "--percentage": "0.5" }}></div>
            <div className="percentage">50%</div>
          </div>
        </div>
      </div>
      <PiePagina />
    </>
  );
}

export default GraficoEvaluacionUsuario;
