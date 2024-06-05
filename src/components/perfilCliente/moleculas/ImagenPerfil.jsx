import React from 'react';
import './ImagenPerfil.css'

const ImagenPerfil = ({ src }) => {
    return (
        <div className='contenedor-imagen-perfil'>
            {src ? (
                <img src={src} alt="Perfil aleatorio" className="imagen-perfil" />
            ) : (
                <div>Cargando imagen...</div>
            )}
        </div>
    );
}

export default ImagenPerfil;
