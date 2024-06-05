import React, { useState, useEffect } from 'react';
import './InformacionPerfil.css';
import gymLogo from "../../assets/gym-logo.jpg";

const InformacionPerfil = () => {
    const [perfil, setPerfil] = useState({
        nombre: "Juan Pérez",
        edad: 30,
        sexo: "Masculino"
    });

    const [imagenAleatoria, setImagenAleatoria] = useState('');

    useEffect(() => {
        fetch('https://picsum.photos/200')
            .then(respuesta => {
                setImagenAleatoria(respuesta.url);
            })
            .catch(error => {
                console.error('Error al buscar la imagen', error);
            });
    }, []);

    return (
        <div className="container">
            <img src={gymLogo} alt="Gym Logo" className="gym-logo" />
            <div className='contenedor-informacion-perfil'>
                <div className='contenedor-imagen-perfil'>
                    {imagenAleatoria ? (
                        <img src={imagenAleatoria} alt="Perfil aleatorio" className="imagen-perfil" />
                    ) : (
                        <div>Cargando imagen...</div>
                    )}
                </div>
                <div className='contenedor-informacion'>
                    <label>Nombre cliente: {perfil.nombre}</label>
                </div>
                <div className='contenedor-informacion'>
                    <label>Edad: {perfil.edad}</label>
                </div>
                <div className='contenedor-informacion'>
                    <label>Sexo: {perfil.sexo}</label>
                </div>
                <div className='contenedor-botones'>
                    <button className="btn-history">Ver historial de evaluaciones</button>
                    <button className="btn-register">Registrar evaluación</button>
                </div>
                <div className='search-bar'>Contactos</div>
                <div className="profile-info">
                    <span>Perfil</span>
                </div>
            </div>
        </div>
    );
}

export default InformacionPerfil;
