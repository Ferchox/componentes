import React from "react";
import "./Admin.css";
import AdministrarUsuario from "../components/adminUsuario/AdministrarUsuario.jsx";
import Cabecera from "../components/general/Cabecera.jsx";
import PiePagina from "../components/general/PiePagina.jsx";
import BarraNavegacion from "../components/general/BarraNavegacion.jsx";

function Admin() {
  return (
    <div className="contenedor-admin">
      <Cabecera />
      <BarraNavegacion />
      <AdministrarUsuario />
      <PiePagina />
    </div>
  );
}

export default Admin;
