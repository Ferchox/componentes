import React, { useState } from "react";
import "./Metas.css";
import MetasPendientes from "../organismos/MetasPendientes.jsx";
import Cabecera from "../../general/organismos/Cabecera.jsx";
import PiePagina from "../../general/organismos/PiePagina.jsx";

function Metas() {
  return (
    <>
      <Cabecera />
      <MetasPendientes />
      <PiePagina />
    </>
  );
}

export default Metas;
