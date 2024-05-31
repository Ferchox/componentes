import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MenuOpciones.css";

const MenuOpciones = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const botonDesplegable = () => {
    setEstaAbierto(!estaAbierto);
  };

  return (
    <div className="menu-opciones">
      <button onClick={botonDesplegable} className="menu-boton-desplegar">
        <FontAwesomeIcon icon={faBars} />
      </button>
      {estaAbierto && (
        <ul className="menu-lista">
          <li>Inicio</li>
          <li>Información máquinas general</li>
          <li>Información de máquinas disponibles</li>
          <li>Escanear máquina</li>
          <li>Rutinas</li>
          <li>Generar mi propia rutina</li>
          <li>Generar rutina con IA</li>
          <li>Rutina con instructor</li>
          <li>Ver rutina</li>
          <li>Ver evolución</li>
          <li>Asesoramiento</li>
        </ul>
      )}
    </div>
  );
};

export default MenuOpciones;
