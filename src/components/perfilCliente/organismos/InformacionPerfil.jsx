import React, { useState, useEffect } from 'react';
import './InformacionPerfil.css';
import ImagenPerfil from '../moleculas/ImagenPerfil';
import EtiquetaInformacion from '../moleculas/EtiquetaInformacion';
import BotonesPerfil from '../moleculas/BotonesPerfil';

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
            <EtiquetaInformacion etiqueta="Nombre cliente" valor={perfil.nombre} />
            <EtiquetaInformacion etiqueta="Edad" valor={perfil.edad} />
            <EtiquetaInformacion etiqueta="Sexo" valor={perfil.sexo} />
            <BotonesPerfil />
        </div>
    );
}

export default InformacionPerfil;
