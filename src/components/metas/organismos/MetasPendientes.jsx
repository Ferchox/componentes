import React, { useState } from "react";
import "./MetasPendientes.css";
import TablaMetas from "../moleculas/TablaMetas";
import BarraProgreso from "../atomos/BarraProgreso";
import EtiquetaTitulo from "../../general/moleculas/EtiquetaTitulo";

function MetasPendientes() {
  const [metas, setMetas] = useState([
    { objetivo: "Meta 1", fechaLimite: "20/04", realizada: true },
    { objetivo: "Meta 2", fechaLimite: "20/06", realizada: false },
    { objetivo: "Meta 3", fechaLimite: "20/09", realizada: false },
  ]);

  const handleCheck = (index) => {
    const updatedMetas = [...metas];
    updatedMetas[index].realizada = !updatedMetas[index].realizada;
    setMetas(updatedMetas);
  };

  const totalMetas = metas.length;
  const metasRealizadas = metas.filter((meta) => meta.realizada).length;
  const porcentajeCompletado = (metasRealizadas / totalMetas) * 100 || 0;

  return (
    <div className="contenedor-metas-pendientes">
      <EtiquetaTitulo titulo="Metas actuales" />
      <div className="contenedor-meta-pendiente">
        <TablaMetas metas={metas} handleCheck={handleCheck} />
        <BarraProgreso porcentaje={porcentajeCompletado} />
        <button>Aceptar</button>
      </div>
      <EtiquetaTitulo titulo="Crear una nueva meta" />
      <button>Crear meta</button>
    </div>
  );
}

export default MetasPendientes;
