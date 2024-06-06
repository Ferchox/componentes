import React from 'react';
import './BotonRegistroUsuario.css';

const BotonRegistroUsuario = ({ onClick }) => {
    return (
        <button className="boton-registro-usuario" onClick={onClick}>
            Registrarse
        </button>
    );
};

export default BotonRegistroUsuario;
