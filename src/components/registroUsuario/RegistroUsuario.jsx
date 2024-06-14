// RegistroUsuario.js
import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import CampoTexto from './CampoTexto';
import SelectorSexo from './SelectorSexo';
import Aviso from '../general/Aviso';
import './RegistroUsuario.css';
import axios from 'axios';
import EtiquetaTitulo from '../general/EtiquetaTitulo';

const imgbbApiKey = '5946ec8881e0944cf2ee70ba0b75586b';

const RegistroUsuario = () => {
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [numeroCelular, setNumeroCelular] = useState('');
    const [email, setEmail] = useState('');
    const [ciPasaporte, setCiPasaporte] = useState('');
    const [sexo, setSexo] = useState('');
    const [foto, setFoto] = useState(null);
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState(null);
    const [tipoAviso, setTipoAviso] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !fechaNacimiento || !direccion || !numeroCelular || !email || !ciPasaporte || !sexo || !foto || !contrasena) {
            setMensaje('Todos los campos son obligatorios.');
            setTipoAviso('error');
            return;
        }

        try {
            const response = await axios.get('https://6668e270f53957909ff9675e.mockapi.io/cliente');
            const usuarios = response.data;

            const userExists = usuarios.some(user => user.email === email || user.ci === ciPasaporte);
            if (userExists) {
                setMensaje('Usuario ya existe.');
                setTipoAviso('error');
                return;
            }

            const formData = new FormData();
            formData.append('image', foto);

            const uploadResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (uploadResponse.data && uploadResponse.data.data && uploadResponse.data.data.url) {
                const fotoUrl = uploadResponse.data.data.url;

                const nuevoUsuario = {
                    nombre,
                    fechaNacimiento: fechaNacimiento,
                    direccion,
                    numeroCelular,
                    email,
                    ci: ciPasaporte,
                    sexo,
                    foto: fotoUrl,
                    contrasena,
                    rol: 'cliente',
                };

                await axios.post('https://6668e270f53957909ff9675e.mockapi.io/cliente', nuevoUsuario);

                setMensaje('Registro exitoso.');
                setTipoAviso('exito');
                setTimeout(() => navigate('/IniciarSesionUsuario'), 2000);
            } else {
                throw new Error('Error en la carga de la imagen.');
            }
        } catch (error) {
            console.error('Error registrando usuario:', error);
            setMensaje('Hubo un error en el registro.');
            setTipoAviso('error');
        }
    };

    return (
        <div className='contenedor-registrar-usuario'>
            <EtiquetaTitulo titulo='Registrar Usuario' />
            <form className="registro-usuario" onSubmit={handleSubmit}>
                <h4>Nombre</h4>
                <CampoTexto
                    tipo="text"
                    placeholder="Ingresa tu nombre"
                    valor={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <h4>Fecha de nacimiento</h4>
                <CampoTexto
                    tipo="date"
                    placeholder="Ingresa tu fecha de nacimiento"
                    valor={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                />
                <h4>Dirección</h4>
                <CampoTexto
                    tipo="text"
                    placeholder="Ingresa tu dirección"
                    valor={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />
                <h4>Número de celular</h4>
                <CampoTexto
                    tipo="tel"
                    placeholder="Ingresa tu número de celular"
                    valor={numeroCelular}
                    onChange={(e) => setNumeroCelular(e.target.value)}
                />
                <h4>Correo electrónico</h4>
                <CampoTexto
                    tipo="email"
                    placeholder="Ingresa tu correo electrónico"
                    valor={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <h4>CI</h4>
                <CampoTexto
                    tipo="text"
                    placeholder="CI"
                    valor={ciPasaporte}
                    onChange={(e) => setCiPasaporte(e.target.value)}
                />
                <h4>Contraseña</h4>
                <CampoTexto
                    tipo="password"
                    placeholder="Ingresa tu contraseña"
                    valor={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
                <h4>Género</h4>
                <SelectorSexo
                    valor={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                />
                <h4>Foto de perfil</h4>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFoto(e.target.files[0])}
                />
                <button type="submit">
                    Registrarse
                </button>
                <Aviso mensaje={mensaje} tipo={tipoAviso} />
                <p>¿Ya tienes una cuenta? <NavLink to='/IniciarSesionUsuario'>Haz click aquí</NavLink></p>
            </form>
        </div>
    );
};

export default RegistroUsuario;
