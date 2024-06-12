import React, { useState } from "react";
import "./TablaMetas.css";
import Checkbox from "../atomos/Checkbox";

function TablaMetas({ metas, handleCheck, handleDelete, handleEdit }) {
  const [editMode, setEditMode] = useState(null);
  const [editedMeta, setEditedMeta] = useState("");
  const [editedFechaLimite, setEditedFechaLimite] = useState("");

  const startEdit = (meta) => {
    setEditMode(meta.id);
    setEditedMeta(meta.meta);
    setEditedFechaLimite(new Date(meta.fechaLimite).toISOString().substring(0, 10));
  };

  const saveEdit = (id) => {
    handleEdit(id, editedMeta, editedFechaLimite);
    setEditMode(null);
  };

  return (
    <div className="contenedor-tabla-metas">
      <div className="tabla-container">
        <div className="header">Metas</div>
        {metas.length > 0 ? (
          <table className="table">
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
                  {editMode === meta.id ? (
                    <>
                      <td>
                        <input
                          type="text"
                          value={editedMeta}
                          onChange={(e) => setEditedMeta(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          value={editedFechaLimite}
                          onChange={(e) => setEditedFechaLimite(e.target.value)}
                        />
                      </td>
                      <td>
                        <button onClick={() => saveEdit(meta.id)}>Guardar</button>
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
                    <button onClick={() => startEdit(meta)}>Editar</button>
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
    </div >
  );
}

export default TablaMetas;
