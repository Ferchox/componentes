import React, { useState, useEffect } from 'react';
import InformacionArticulo from '../moleculas/InformacionArticulo';
import ImagenPerfil from '../atomos/ImagenPerfil';
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
                <ImagenPerfil src={imagenAleatoria} />
            </div>
            <InformacionArticulo label="Nombre cliente" value={perfil.nombre} />
            <InformacionArticulo label="Edad" value={perfil.edad} />
            <InformacionArticulo label="Sexo" value={perfil.sexo} />
        </div>
    );
}

export default InformacionPerfil;