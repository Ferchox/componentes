import React, { useState } from 'react';
import CampoTexto from '../moleculas/CampoTexto';
import SelectorSexo from '../moleculas/SelectorSexo';
import BotonRegistroUsuario from '../moleculas/BotonRegistroUsuario';
import TituloRegistroUsuario from '../moleculas/TituloRegistroUsuario';
import './RegistroUsuario.css';
import { NavLink } from 'react-router-dom';

const RegistroUsuario = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [numeroCelular, setNumeroCelular] = useState('');
    const [email, setEmail] = useState('');
    const [ciPasaporte, setCiPasaporte] = useState('');
    const [sexo, setSexo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, fechaNacimiento, direccion, numeroCelular, email, ciPasaporte, sexo });
    };

    return (
        <form className="registro-usuario" onSubmit={handleSubmit}>
            <TituloRegistroUsuario />
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
            <SelectorSexo
                valor={sexo}
                onChange={(e) => setSexo(e.target.value)}
            />
            <BotonRegistroUsuario onClick={handleSubmit} />
            ¿Ya tienes una cuenta?,
            <NavLink to='/IniciarSesionUsuario'>
                haz click aquí
            </NavLink>
        </form>
    );
};

export default RegistroUsuario;
