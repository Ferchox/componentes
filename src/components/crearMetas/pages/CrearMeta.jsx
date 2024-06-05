import React, { useState } from "react";
import "./CrearMeta.css";
import Cabecera from "../../general/organismos/Cabecera.jsx";
import PiePagina from "../../general/organismos/PiePagina.jsx";
import FormularioMeta from "../organismos/FormularioMeta.jsx";

function CrearMeta() {
  const [value, setValue] = useState("");

  return (
    <>
      <Cabecera />
      <FormularioMeta />
      <PiePagina />
    </>
  );
}

export default CrearMeta;
