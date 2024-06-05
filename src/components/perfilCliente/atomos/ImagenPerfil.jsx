import React from 'react';

const ImagenPerfil = ({ src }) => {
  return src ? <img src={src} alt="Perfil aleatorio" className="imagen-perfil" /> : <div>Cargando imagen...</div>;
}

export default ImagenPerfil;