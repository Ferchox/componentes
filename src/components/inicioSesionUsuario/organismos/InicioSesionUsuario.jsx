import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import EtiquetaTitulo from '../../general/EtiquetaTitulo';
import Aviso from '../../general/Aviso';
import axios from 'axios';
import './InicioSesionUsuario.css';

const InicioSesionUsuario = ({ onSubmit }) => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState(null);
    const [tipoAviso, setTipoAviso] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('https://6668e270f53957909ff9675e.mockapi.io/cliente');
            const usuarios = response.data;

            const usuario = usuarios.find(user => user.email === correo && user.contrasena === contrasena);

            if (usuario) {
                setMensaje('Inicio de sesión exitoso');
                setTipoAviso('exito');
                sessionStorage.setItem('usuario', JSON.stringify(usuario));
                sessionStorage.setItem('usuarioId', usuario.id);
                onSubmit(usuario);
                setTimeout(() => navigate('/'), 2000);
            } else {
                setMensaje('Correo electrónico o contraseña incorrectos');
                setTipoAviso('error');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setMensaje('Hubo un error al intentar iniciar sesión.');
            setTipoAviso('error');
        }
    };

    return (
        <div className='contenedor-inicio-sesion-usuario'>
            <EtiquetaTitulo titulo='Inicio de Sesion' />
            <form className="inicio-sesion-usuario" onSubmit={handleSubmit}>
                <h4>Correo electrónico</h4>
                <input
                    type="email"
                    placeholder="Introduce tu correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <h4>Cotraseña</h4>
                <input
                    type="password"
                    placeholder="Introduce tu contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />
                <button type="submit">
                    Iniciar Sesión
                </button>
                <Aviso mensaje={mensaje} tipo={tipoAviso} />
                <p>¿Aún no tienes cuenta? <NavLink to='/RegistroUsuario'>Haz click aquí</NavLink></p>
            </form>
        </div>
    );
};

export default InicioSesionUsuario;
