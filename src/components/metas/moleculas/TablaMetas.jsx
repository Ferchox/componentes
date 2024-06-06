import React from "react";
import "./TablaMetas.css";
import Checkbox from "../atomos/Checkbox";

function TablaMetas({ metas, handleCheck }) {
  return (
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
                <Checkbox
                  checked={meta.realizada}
                  onChange={() => handleCheck(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaMetas;