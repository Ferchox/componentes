import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MetasPendientes.css";
import TablaMetas from "../moleculas/TablaMetas";
import BarraProgreso from "../atomos/BarraProgreso";
import EtiquetaTitulo from "../../general/moleculas/EtiquetaTitulo";

function MetasPendientes() {
  const [metas, setMetas] = useState([]);
  const [nuevaMeta, setNuevaMeta] = useState("");
  const [fechaLimite, setFechaLimite] = useState("");
  const usuarioId = sessionStorage.getItem("usuarioId");

  useEffect(() => {
    if (usuarioId) {
      axios
        .get(`https://6668e3ebf53957909ff96a92.mockapi.io/Metas`)
        .then((response) => {
          const metasUsuario = response.data.filter(meta => meta.idUsuario === Number(usuarioId));
          setMetas(metasUsuario);
        })
        .catch((error) => console.error("Error al obtener las metas:", error));
    }
  }, [usuarioId]);

  const handleCheck = async (id, realizado) => {
    try {
      await axios.put(`https://6668e3ebf53957909ff96a92.mockapi.io/Metas/${id}`, { realizado });
      setMetas(metas.map(meta => meta.id === id ? { ...meta, realizado } : meta));
    } catch (error) {
      console.error("Error al actualizar la meta:", error);
    }
  };

  const handleAddMeta = async () => {
    try {
      const response = await axios.post("https://6668e3ebf53957909ff96a92.mockapi.io/Metas", {
        idUsuario: Number(usuarioId),
        meta: nuevaMeta,
        fechaInicio: Date.now(),
        fechaLimite: new Date(fechaLimite).getTime(),
        realizado: false,
      });
      setMetas([...metas, response.data]);
      setNuevaMeta("");
      setFechaLimite("");
    } catch (error) {
      console.error("Error al agregar la meta:", error);
    }
  };

  const handleDeleteMeta = async (id) => {
    try {
      await axios.delete(`https://6668e3ebf53957909ff96a92.mockapi.io/Metas/${id}`);
      setMetas(metas.filter((meta) => meta.id !== id));
    } catch (error) {
      console.error("Error al eliminar la meta:", error);
    }
  };

  const handleEditMeta = async (id, nuevaMeta, nuevaFechaLimite) => {
    try {
      await axios.put(`https://6668e3ebf53957909ff96a92.mockapi.io/Metas/${id}`, {
        meta: nuevaMeta,
        fechaLimite: new Date(nuevaFechaLimite).getTime(),
      });
      setMetas(metas.map((meta) => (meta.id === id ? { ...meta, meta: nuevaMeta, fechaLimite: new Date(nuevaFechaLimite).getTime() } : meta)));
    } catch (error) {
      console.error("Error al editar la meta:", error);
    }
  };

  const totalMetas = metas.length;
  const metasRealizadas = metas.filter((meta) => meta.realizado).length;
  const porcentajeCompletado = (metasRealizadas / totalMetas) * 100 || 0;

  return (
    <div className="contenedor-metas-pendientes">
      <EtiquetaTitulo titulo="Metas actuales" />
      <div className="contenedor-meta-pendiente">
        <TablaMetas metas={metas} handleCheck={handleCheck} handleDelete={handleDeleteMeta} handleEdit={handleEditMeta} />
        <BarraProgreso porcentaje={porcentajeCompletado} />
      </div>
      <EtiquetaTitulo titulo="Crear una nueva meta" />
      <div>
        <input
          type="text"
          placeholder="Nueva Meta"
          value={nuevaMeta}
          onChange={(e) => setNuevaMeta(e.target.value)}
        />
        <input
          type="date"
          value={fechaLimite}
          onChange={(e) => setFechaLimite(e.target.value)}
        />
        <button onClick={handleAddMeta}>Crear meta</button>
      </div>
    </div>
  );
}

export default MetasPendientes;
