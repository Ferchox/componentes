import React from "react";
import Informacion from "../organismos/Informacion.jsx";
import Cabecera from "../../general/Cabecera.jsx";
import PiePagina from "../../general/PiePagina.jsx";
import BarraNavegacion from "../../general/BarraNavegacion.jsx";
import './InfoMaquinas.css'

const InfoMaquinas = () => {
  return (
    <div className="contenedor-info-maquinas">
      <Cabecera />
      <BarraNavegacion />
      <Informacion />
      <PiePagina />

    </div>
  );
};
export default InfoMaquinas;