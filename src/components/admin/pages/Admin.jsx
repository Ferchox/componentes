import React from "react";
import "./Admin.css";
import RegistroEntrenador from "../organismos/RegistroEntrenador.jsx";
import AdministrarEntrenador from "../organismos/AdministrarEntrenador.jsx";
import Cabecera from "../../general/organismos/Cabecera.jsx";
import PiePagina from "../../general/organismos/PiePagina.jsx";
import BarraNavegacion from "../../general/organismos/BarraNavegacion.jsx";

function Admin() {
  return (
    <div className="contenedor-admin">
      <Cabecera />
      <BarraNavegacion />
      <AdministrarEntrenador />
      <RegistroEntrenador />
      <PiePagina />
    </div>
  );
}

export default Admin;
