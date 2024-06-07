import React from "react";
import Informacion from "../organismos/Informacion.jsx";
import Cabecera from "../../general/organismos/Cabecera.jsx";
import PiePagina from "../../general/organismos/PiePagina.jsx";
import BarraNavegacion from "../../general/organismos/BarraNavegacion";
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