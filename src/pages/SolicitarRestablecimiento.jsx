// src/pages/SolicitarRestablecimiento.js
import React, { useState } from 'react';
import axios from 'axios';

const SolicitarRestablecimiento = () => {
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://6668e270f53957909ff9675e.mockapi.io/cliente/reset-password-request', { email: correo });
            setMensaje('Si existe una cuenta con ese correo, recibirás un email con instrucciones para restablecer tu contraseña.');
        } catch (error) {
            setMensaje('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div>
            <h2>Restablecer Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Introduce tu correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default SolicitarRestablecimiento;
