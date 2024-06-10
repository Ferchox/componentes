import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import CampoTexto from '../moleculas/CampoTexto';
import SelectorSexo from '../moleculas/SelectorSexo';
import Aviso from '../../general/moleculas/Aviso';
import './RegistroUsuario.css';
import axios from 'axios';
import EtiquetaTitulo from '../../general/moleculas/EtiquetaTitulo';

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

        try {
            const response = await axios.get('https://66633fda62966e20ef0c0e30.mockapi.io/cliente');
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

            const fotoUrl = uploadResponse.data.data.url;

            const nuevoUsuario = {
                nombre,
                fechaNacimiento: new Date(fechaNacimiento).getTime() / 1000,
                direccion,
                numeroCelular,
                email,
                ci: ciPasaporte,
                sexo,
                foto: fotoUrl,
                contrasena,
            };

            await axios.post('https://66633fda62966e20ef0c0e30.mockapi.io/cliente', nuevoUsuario);

            setMensaje('Registro exitoso.');
            setTipoAviso('exito');
            setTimeout(() => navigate('/IniciarSesionUsuario'), 2000);
        } catch (error) {
            console.error('Error registrando usuario:', error);
            setMensaje('Hubo un error en el registro.');
            setTipoAviso('error');
        }
    };

    return (
        <div className='contenedor-registrar-usuario'>
            <EtiquetaTitulo titulo='Registar Usuario' />
            <form className="registro-usuario" onSubmit={handleSubmit}>
                <CampoTexto
                    tipo="text"
                    placeholder="Nombre"
                    valor={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <div className='contenedor-fecha-nacimiento'>
                    <h4>Fecha de nacimiento</h4>
                </div>
                <CampoTexto
                    tipo="date"
                    placeholder="Fecha de nacimiento"
                    valor={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                />
                <CampoTexto
                    tipo="text"
                    placeholder="Dirección"
                    valor={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />
                <CampoTexto
                    tipo="tel"
                    placeholder="Número de celular"
                    valor={numeroCelular}
                    onChange={(e) => setNumeroCelular(e.target.value)}
                />
                <CampoTexto
                    tipo="email"
                    placeholder="Correo electrónico"
                    valor={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CampoTexto
                    tipo="text"
                    placeholder="CI/Pasaporte"
                    valor={ciPasaporte}
                    onChange={(e) => setCiPasaporte(e.target.value)}
                />
                <CampoTexto
                    tipo="password"
                    placeholder="Contraseña"
                    valor={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
                <SelectorSexo
                    valor={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                />
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
