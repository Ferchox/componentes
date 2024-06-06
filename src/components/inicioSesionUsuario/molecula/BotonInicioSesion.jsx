import React from 'react';
import './BotonInicioSesion.css';

const BotonInicioSesion = ({ onClick }) => {
    return (
        <button className="boton-inicio-sesion" onClick={onClick}>
            Iniciar Sesión
        </button>
    );
};

export default BotonInicioSesion;
