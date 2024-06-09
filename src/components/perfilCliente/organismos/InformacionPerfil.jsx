import React, { useState, useEffect } from 'react';
import './InformacionPerfil.css';
import ImagenPerfil from '../moleculas/ImagenPerfil';
import EtiquetaInformacion from '../moleculas/EtiquetaInformacion';
import BotonesPerfil from '../moleculas/BotonesPerfil';
import EtiquetaTitulo from '../../general/moleculas/EtiquetaTitulo';

const InformacionPerfil = () => {
    const [perfil, setPerfil] = useState(null);

    useEffect(() => {
        fetch('https://66633fda62966e20ef0c0e30.mockapi.io/cliente')
            .then(respuesta => respuesta.json())
            .then(data => {
                if (data && data.length > 0) {
                    const indiceAleatorio = Math.floor(Math.random() * data.length);
                    setPerfil(data[indiceAleatorio]);
                }
            })
            .catch(error => {
                console.error('Error al obtener datos del perfil', error);
            });
    }, []);

    return (
        <div className='contenedor-informacion-perfil'>
            <EtiquetaTitulo titulo='Mi perfil' />
            <div className='tarjeta-informacion-perfil'>
                {perfil && (
                    <>
                        <ImagenPerfil src={perfil.foto} />
                        <EtiquetaInformacion etiqueta="Nombre cliente" valor={perfil.nombre} />
                        <EtiquetaInformacion etiqueta="Fecha de nacimiento" valor={perfil.fechaNacimiento} />
                        <EtiquetaInformacion etiqueta="Dirección" valor={perfil.direccion} />
                        <EtiquetaInformacion etiqueta="Número de celular" valor={perfil.numeroCelular} />
                        <EtiquetaInformacion etiqueta="Correo electrónico" valor={perfil.email} />
                        <EtiquetaInformacion etiqueta="CI" valor={perfil.ci} />
                        <EtiquetaInformacion etiqueta="Sexo" valor={perfil.sexo} />
                    </>
                )}
                <BotonesPerfil />
            </div>
        </div>
    );
}

export default InformacionPerfil;
