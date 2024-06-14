import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaAdmin = ({ children }) => {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    return usuario && usuario.rol === 'administrador' ? children : <Navigate to="/" />;
};

export default RutaAdmin;
