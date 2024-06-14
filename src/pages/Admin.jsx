import React from "react";
import "./Admin.css";
import RegistroEntrenador from "../components/admin/RegistroEntrenador.jsx";
import AdministrarEntrenador from "../components/admin/AdministrarEntrenador.jsx";
import Cabecera from "../components/general/Cabecera.jsx";
import PiePagina from "../components/general/PiePagina.jsx";
import BarraNavegacion from "../components/general/BarraNavegacion.jsx";

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
