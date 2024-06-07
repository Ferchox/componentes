import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import {
  faUser,
  faCheck,
  faChartBar,
  faDoorOpen,
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import "./DropdownPerfil.css";

const DropdownPerfil = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(faAngleDown);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIcon(isOpen ? faAngleDown : faAngleUp);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Usuario <FontAwesomeIcon icon={icon} />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <NavLink to='/PerfilCliente'>
            <li>
              <FontAwesomeIcon icon={faUser} /> Ver mi perfil
            </li>
          </NavLink>
          <NavLink to='/Metas'>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Metas
            </li>
          </NavLink>
          <NavLink to='/EvaluacionUsuario'>
            <li>
              <FontAwesomeIcon icon={faChartBar} /> Ver progreso
            </li>
          </NavLink>
          <NavLink to='/IniciarSesionUsuario'>
            <li>
              <FontAwesomeIcon icon={faDoorOpen} /> Cerrar sesión
            </li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default DropdownPerfil;
