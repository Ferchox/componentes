import React, { useState } from "react";
import "./MetasPendientes.css";
import gymLogo from "../../assets/gym-logo.jpg"; 

function MetasPendientes() {
  const [metas, setMetas] = useState([
    { objetivo: "Meta 1", fechaLimite: "20/04", realizada: true },
    { objetivo: "Meta 2", fechaLimite: "20/06", realizada: false },
  ]);

  const handleCheck = (index) => {
    const updatedMetas = [...metas];
    updatedMetas[index].realizada = !updatedMetas[index].realizada;
    setMetas(updatedMetas);
  };

  return (
    <div className="container">
      <img src={gymLogo} alt="Gym Logo" className="gym-logo" /> 
      <div className="metas-info">
        <span>Metas actuales</span>
      </div>
      <div className="tabla-container">
        <div className="header">Metas</div>
        <table className="table">
          <thead>
            <tr>
              <th>Objetivo</th>
              <th>Fecha límite</th>
              <th>Realizada</th>
            </tr>
          </thead>
          <tbody>
            {metas.map((meta, index) => (
              <tr key={index}>
                <td>{meta.objetivo}</td>
                <td>{meta.fechaLimite}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={meta.realizada}
                    onChange={() => handleCheck(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="button">Aceptar</button>
      <div className="nueva-meta">
        <span>Crear nueva meta</span>
      </div>
      <button className="crear-meta-button">Crear meta</button>
      <div className="search-bar">Contactos</div>
    </div>
  );
}

export default MetasPendientes;

