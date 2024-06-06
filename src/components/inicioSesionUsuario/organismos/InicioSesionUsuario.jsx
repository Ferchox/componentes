import React, { useState } from 'react';
import CampoTexto from '../molecula/CampoTexto';
import BotonInicioSesion from '../molecula/BotonInicioSesion';
import TituloInicioSesion from '../molecula/TituloInicioSesion';
import './InicioSesionUsuario.css';

const InicioSesionUsuario = ({ onSubmit }) => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ correo, contrasena });
    };

    return (
        <form className="inicio-sesion-usuario" onSubmit={handleSubmit}>
            <TituloInicioSesion />
            <CampoTexto
                tipo="email"
                placeholder="Correo electrónico"
                valor={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
            <CampoTexto
                tipo="password"
                placeholder="Contraseña"
                valor={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
            />
            <BotonInicioSesion onClick={handleSubmit} />
        </form>
    );
};

export default InicioSesionUsuario;
