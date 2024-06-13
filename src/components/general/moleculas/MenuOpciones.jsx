import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./MenuOpciones.css";
import { NavLink } from 'react-router-dom';

const MenuOpciones = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const [rutinasAbierto, setRutinasAbierto] = useState(false);
  const [infoMaquinasAbierto, setInfoMaquinasAbierto] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const usuarioGuardado = sessionStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setEstaAbierto(false);
        setRutinasAbierto(false);
        setInfoMaquinasAbierto(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setEstaAbierto(!estaAbierto);
  };

  const toggleRutinas = () => {
    setRutinasAbierto(!rutinasAbierto);
  };

  const toggleInfoMaquinas = () => {
    setInfoMaquinasAbierto(!infoMaquinasAbierto);
  };

  if (!usuario) {
    return null;
  }

  return (
    <div className="menu-opciones" ref={menuRef}>
      <button onClick={toggleMenu} className="menu-boton-desplegar">
        <FontAwesomeIcon icon={faBars} />
      </button>
      {estaAbierto && (
        <ul className="menu-lista">
          <NavLink to='/'>
            <li>Inicio</li>
          </NavLink>
          <li onClick={toggleInfoMaquinas}>
            Información de máquinas general{" "}
            <FontAwesomeIcon icon={infoMaquinasAbierto ? faAngleUp : faAngleDown} />
          </li>
          {infoMaquinasAbierto && (
            <>
              <NavLink to='/InfoMaquinasQR'>
                <li className="sub-item">Información de máquinas disponibles</li>
              </NavLink>
              <NavLink to='/InfoMaquinas'>
                <li className="sub-item">Escanear máquina</li>
              </NavLink>
            </>
          )}
          <li onClick={toggleRutinas}>
            Rutinas <FontAwesomeIcon icon={rutinasAbierto ? faAngleUp : faAngleDown} />
          </li>
          {rutinasAbierto && (
            <>
              <NavLink to='/GenerarRutina'>
                <li className="sub-item">Generar mi propia rutina</li>
              </NavLink>
              <NavLink to='/GenerarRutina'>
                <li className="sub-item">Generar rutina con IA</li>
              </NavLink>
              <NavLink to='/Entrenadores'>
                <li className="sub-item">Rutina con instructor</li>
              </NavLink>
              <NavLink to='/Entrenadores'>
                <li className="sub-item">Ver rutina</li>
              </NavLink>
            </>
          )}
          <NavLink to='/EvaluacionUsuario'>
            <li>Ver evolución</li>
          </NavLink>
          <NavLink to='/Chat'>
            <li>Asesoramiento</li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default MenuOpciones;
