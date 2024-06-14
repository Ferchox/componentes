import React, { useEffect, useState } from "react";
import "./MetasPendientes.css";
import TablaMetas from "../moleculas/TablaMetas";
import BarraProgreso from "../atomos/BarraProgreso";
import EtiquetaTitulo from "../../general/EtiquetaTitulo";
import CrearMeta from "../moleculas/CrearMetas";
import axios from "axios";

function MetasPendientes() {
  const [metas, setMetas] = useState([]);
  const usuarioId = sessionStorage.getItem("usuarioId");

  useEffect(() => {
    const fetchMetas = async () => {
      try {
        const response = await axios.get("https://6668e270f53957909ff9675e.mockapi.io/metas");
        const userMetas = response.data.filter(meta => meta.idUsuario === usuarioId);
        setMetas(userMetas);
      } catch (error) {
        console.error("Error fetching metas:", error);
      }
    };

    fetchMetas();
  }, [usuarioId]);

  const handleCheck = async (id, realizado) => {
    try {
      await axios.put(`https://6668e270f53957909ff9675e.mockapi.io/metas/${id}`, { realizado });
      setMetas(metas.map(meta => (meta.id === id ? { ...meta, realizado } : meta)));
    } catch (error) {
      console.error("Error updating meta:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://6668e270f53957909ff9675e.mockapi.io/metas/${id}`);
      setMetas(metas.filter(meta => meta.id !== id));
    } catch (error) {
      console.error("Error deleting meta:", error);
    }
  };

  const handleEdit = async (id, newMeta, newFechaLimite) => {
    try {
      await axios.put(`https://6668e270f53957909ff9675e.mockapi.io/metas/${id}`, {
        meta: newMeta,
        fechaLimite: new Date(newFechaLimite).getTime()
      });
      setMetas(metas.map(meta => (meta.id === id ? { ...meta, meta: newMeta, fechaLimite: newFechaLimite } : meta)));
    } catch (error) {
      console.error("Error editing meta:", error);
    }
  };

  const handleCreate = async (meta, fechaLimite) => {
    try {
      const response = await axios.post("https://6668e270f53957909ff9675e.mockapi.io/metas", {
        idUsuario: usuarioId,
        meta,
        fechaInicio: Date.now(),
        fechaLimite: new Date(fechaLimite).getTime(),
        realizado: false
      });
      setMetas([...metas, response.data]);
    } catch (error) {
      console.error("Error creating meta:", error);
    }
  };

  const totalMetas = metas.length;
  const metasRealizadas = metas.filter((meta) => meta.realizado).length;
  const porcentajeCompletado = (metasRealizadas / totalMetas) * 100 || 0;

  return (
    <div className="contenedor-metas-pendientes">
      <EtiquetaTitulo titulo="Metas actuales" />
      <div className="contenedor-meta-pendiente">
        <TablaMetas metas={metas} handleCheck={handleCheck} handleDelete={handleDelete} handleEdit={handleEdit} />
        <BarraProgreso porcentaje={porcentajeCompletado} />
      </div>
      <EtiquetaTitulo titulo="Crear una nueva meta" />
      <CrearMeta onCreate={handleCreate} />
    </div>
  );
}

export default MetasPendientes;
