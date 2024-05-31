import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCheck,
  faChartBar,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./DropdownPerfil.css";
const DropdownPerfil = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Usuario
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <FontAwesomeIcon icon={faUser} /> Ver mi perfil
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} /> Metas
          </li>
          <li>
            <FontAwesomeIcon icon={faChartBar} /> Ver progreso
          </li>
          <li>
            <FontAwesomeIcon icon={faDoorOpen} /> Cerrar sesión
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownPerfil;
