import React, { useState } from "react";
import "./Componente9.css";

function Componente9() {
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
      <button>Aceptar</button>
    </div>
  );
}

export default Componente9;
