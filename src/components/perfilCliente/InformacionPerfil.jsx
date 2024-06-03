import React, { useState, useEffect } from 'react';
import './InformacionPerfil.css';

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
        </div>
    );
}

export default InformacionPerfil;
