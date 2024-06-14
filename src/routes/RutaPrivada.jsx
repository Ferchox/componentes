import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaPrivada = ({ children }) => {
    const usuario = sessionStorage.getItem('usuario');
    return usuario ? children : <Navigate to="/IniciarSesionUsuario" />;
};

export default RutaPrivada;
