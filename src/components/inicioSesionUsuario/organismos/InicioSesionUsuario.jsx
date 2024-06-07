import React, { useState } from 'react';
import CampoTexto from '../molecula/CampoTexto';
import BotonInicioSesion from '../molecula/BotonInicioSesion';
import TituloInicioSesion from '../molecula/TituloInicioSesion';
import './InicioSesionUsuario.css';
import { NavLink } from 'react-router-dom';

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
            <NavLink to='/'>
                <BotonInicioSesion/>
            </NavLink>
            ¿Aún no tienes cuenta?,
            <NavLink to='/RegistroUsuario'>
                haz click aquí
            </NavLink>
        </form >
    );
};

export default InicioSesionUsuario;
