import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./MenuOpciones.css";

const MenuOpciones = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const [rutinasAbierto, setRutinasAbierto] = useState(false);
  const [infoMaquinasAbierto, setInfoMaquinasAbierto] = useState(false);

  const toggleMenu = () => {
    setEstaAbierto(!estaAbierto);
  };

  const toggleRutinas = () => {
    setRutinasAbierto(!rutinasAbierto);
  };

  const toggleInfoMaquinas = () => {
    setInfoMaquinasAbierto(!infoMaquinasAbierto);
  };

  return (
    <div className="menu-opciones">
      <button onClick={toggleMenu} className="menu-boton-desplegar">
        <FontAwesomeIcon icon={faBars} />
      </button>
      {estaAbierto && (
        <ul className="menu-lista">
          <li>Inicio</li>
          <li onClick={toggleInfoMaquinas}>
            Información de máquinas general{" "}
            <FontAwesomeIcon icon={infoMaquinasAbierto ? faAngleUp : faAngleDown} />
          </li>
          {infoMaquinasAbierto && (
            <>
              <li className="sub-item">Información de máquinas disponibles</li>
              <li className="sub-item">Escanear máquina</li>
            </>
          )}
          <li onClick={toggleRutinas}>
            Rutinas <FontAwesomeIcon icon={rutinasAbierto ? faAngleUp : faAngleDown} />
          </li>
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
