import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaPrivada = ({ hijo }) => {
    const usuario = sessionStorage.getItem('usuario');
    return usuario ? hijo : <Navigate to="/IniciarSesionUsuario" />;
};

export default RutaPrivada;
