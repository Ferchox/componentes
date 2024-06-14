import React, { useState } from "react";
import "./TablaMetas.css";
import Checkbox from "./Checkbox";

function TablaMetas({ metas, handleCheck, handleDelete, handleEdit }) {
  const [modoEdicion, setModoEdicion] = useState(null);
  const [metaEditada, setMetaEditada] = useState("");
  const [fechaLimiteEditada, setFechaLimiteEditada] = useState("");

  const iniciarEdicion = (meta) => {
    setModoEdicion(meta.id);
    setMetaEditada(meta.meta);
    setFechaLimiteEditada(new Date(meta.fechaLimite).toISOString().substring(0, 10));
  };

  const guardarEdicion = (id) => {
    handleEdit(id, metaEditada, fechaLimiteEditada);
    setModoEdicion(null);
  };

  return (
    <div className="contenedor-tabla-metas">
      <div className="tabla-contenedor">
        <div className="cabecera">Metas</div>
        {metas.length > 0 ? (
          <table className="tabla">
            <thead>
              <tr>
                <th>Objetivo</th>
                <th>Fecha límite</th>
                <th>Realizada</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {metas.map((meta) => (
                <tr key={meta.id}>
                  {modoEdicion === meta.id ? (
                    <>
                      <td>
                        <input
                          type="text"
                          value={metaEditada}
                          onChange={(e) => setMetaEditada(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          value={fechaLimiteEditada}
                          onChange={(e) => setFechaLimiteEditada(e.target.value)}
                        />
                      </td>
                      <td>
                        <button onClick={() => guardarEdicion(meta.id)}>Guardar</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{meta.meta}</td>
                      <td>{new Date(meta.fechaLimite).toLocaleDateString()}</td>
                      <td>
                        <Checkbox
                          checked={meta.realizado}
                          onChange={() => handleCheck(meta.id, !meta.realizado)}
                        />
                      </td>
                    </>
                  )}
                  <td>
                    <button onClick={() => handleDelete(meta.id)}>Eliminar</button>
                    <button onClick={() => iniciarEdicion(meta)}>Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-metas">
            No hay metas
          </div>
        )}
      </div>
    </div>
  );
}

export default TablaMetas;
