import React, { useState } from "react";
import "./CrearMeta.css";
import BarraNavegacion from "../../general/organismos/BarraNavegacion";
import Cabecera from "../../general/organismos/Cabecera";
import PiePagina from "../../general/organismos/PiePagina";

import FormularioMeta from "../organismos/FormularioMeta.jsx";

function CrearMeta() {
  const [value, setValue] = useState("");

  return (
    <div className="contenedor-crear-meta">
      <Cabecera />
      <BarraNavegacion />
      <FormularioMeta />
      <PiePagina />
    </div>
  );
}

export default CrearMeta;
