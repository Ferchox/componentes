import React from "react";
import Informacion from "../components/maquinaQR/Informacion";
import BarraNavegacion from '../components/general/BarraNavegacion'
import Cabecera from '../components/general/Cabecera'
import PiePagina from '../components/general/PiePagina'
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