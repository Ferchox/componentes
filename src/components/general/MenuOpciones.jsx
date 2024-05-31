import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MenuOpciones.css";

const MenuOpciones = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const [rutinasAbierto, setRutinasAbierto] = useState(false);
  const [infoMaquinasAbierto, setInfoMaquinasAbierto] = useState(false);

  const botonDesplegable = () => {
    setEstaAbierto(!estaAbierto);
  };

  const alternarRutinas = () => {
    setRutinasAbierto(!rutinasAbierto);
  };

  const alternarInfoMaquinas = () => {
    setInfoMaquinasAbierto(!infoMaquinasAbierto);
  };

  return (
    <div className="menu-opciones">
      <button onClick={botonDesplegable} className="menu-boton-desplegar">
        <FontAwesomeIcon icon={faBars} />
      </button>
      {estaAbierto && (
        <ul className="menu-lista">
          <li>Inicio</li>
          <li onClick={alternarInfoMaquinas}>Información de máquinas general</li>
          {infoMaquinasAbierto && (
            <>
              <li className="sub-item">Información de máquinas disponibles</li>
              <li className="sub-item">Escanear máquina</li>
            </>
          )}
          <li onClick={alternarRutinas}>Rutinas</li>
          {rutinasAbierto && (
            <>
              <li className="sub-item">Generar mi propia rutina</li>
              <li className="sub-item">Generar rutina con IA</li>
              <li className="sub-item">Rutina con instructor</li>
              <li className="sub-item">Ver rutina</li>
            </>
          )}
          <li>Ver evolución</li>
          <li>Asesoramiento</li>
        </ul>
      )}
    </div>
  );
};

export default MenuOpciones;
