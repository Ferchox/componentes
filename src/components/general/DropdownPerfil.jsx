import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from 'react-router-dom';
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
  const [usuario, setUsuario] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const usuarioGuardado = sessionStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  const toggleDropdown = () => {
    if (!usuario) {
      navigate('/IniciarSesionUsuario');
    } else {
      setIsOpen(!isOpen);
      setIcon(isOpen ? faAngleDown : faAngleUp);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('usuarioId');
    setUsuario(null);
    setIsOpen(false);
    navigate('/IniciarSesionUsuario');
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {usuario ? usuario.nombre : "Iniciar sesión"}
        {usuario && <FontAwesomeIcon icon={icon} />}
      </button>
      {isOpen && usuario && (
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
          <li onClick={handleLogout}>
            <FontAwesomeIcon icon={faDoorOpen} /> Cerrar sesión
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownPerfil;
