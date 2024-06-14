import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import EtiquetaTitulo from '../general/EtiquetaTitulo';
import "./VerificarCodigo.css"

const VerificarCodigo = () => {
    const [codigo, setCodigo] = useState('');
    const [nuevaContrasena, setNuevaContrasena] = useState('');
    const [mensaje, setMensaje] = useState(null);
    const [tipoAviso, setTipoAviso] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { correo, codigoEnviado } = location.state || {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (codigo === codigoEnviado) {
            try {
                const response = await axios.get('https://6668e270f53957909ff9675e.mockapi.io/cliente');
                const usuarios = response.data;
                const usuario = usuarios.find(user => user.email === correo);

                if (usuario) {
                    usuario.contrasena = nuevaContrasena;
                    await axios.put(`https://6668e270f53957909ff9675e.mockapi.io/cliente/${usuario.id}`, usuario);
                    setMensaje('Contraseña restablecida exitosamente');
                    setTipoAviso('exito');
                    setTimeout(() => navigate('/'), 3000);
                }
            } catch (error) {
                console.error('Error al restablecer la contraseña:', error);
                setMensaje('Hubo un error al intentar restablecer la contraseña.');
                setTipoAviso('error');
            }
        } else {
            setMensaje('El código ingresado es incorrecto');
            setTipoAviso('error');
        }
    };

    return (
        <div className='contenedor-verificar-codigo'>
            <EtiquetaTitulo titulo='Verificar Código y Restablecer Contraseña' />
            <form className='verificar-codigo' onSubmit={handleSubmit}>
                <h4>Código de Restablecimiento</h4>
                <input
                    type="text"
                    placeholder="Introduce el código de restablecimiento"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    required
                />
                <h4>Nueva Contraseña</h4>
                <input
                    type="password"
                    placeholder="Introduce tu nueva contraseña"
                    value={nuevaContrasena}
                    onChange={(e) => setNuevaContrasena(e.target.value)}
                    required
                />
                <button type="submit">Restablecer Contraseña</button>
                {mensaje && <p className={`mensaje ${tipoAviso}`}>{mensaje}</p>}
            </form>
        </div>
    );
};

export default VerificarCodigo;
