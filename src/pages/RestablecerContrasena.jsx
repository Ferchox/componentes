// src/pages/RestablecerContrasena.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RestablecerContrasena = () => {
    const { token } = useParams();
    const [nuevaContrasena, setNuevaContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://6668e270f53957909ff9675e.mockapi.io/cliente/reset-password/${token}`, { password: nuevaContrasena });
            setMensaje('Contraseña restablecida exitosamente.');
        } catch (error) {
            setMensaje('Hubo un error al restablecer la contraseña. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div>
            <h2>Restablecer Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Introduce tu nueva contraseña"
                    value={nuevaContrasena}
                    onChange={(e) => setNuevaContrasena(e.target.value)}
                    required
                />
                <button type="submit">Restablecer Contraseña</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default RestablecerContrasena;
