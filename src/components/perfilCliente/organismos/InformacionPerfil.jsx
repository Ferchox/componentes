import React, { useState, useEffect } from 'react';
import './InformacionPerfil.css';
import ImagenPerfil from '../moleculas/ImagenPerfil';
import EtiquetaInformacion from '../moleculas/EtiquetaInformacion';

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
            <ImagenPerfil src={imagenAleatoria} />
            <EtiquetaInformacion label="Nombre cliente" value={perfil.nombre} />
            <EtiquetaInformacion label="Edad" value={perfil.edad} />
            <EtiquetaInformacion label="Sexo" value={perfil.sexo} />
        </div>
    );
}

export default InformacionPerfil;
