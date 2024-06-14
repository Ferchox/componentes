import React, { useState, useEffect } from 'react';
import './InformacionPerfil.css';
import ImagenPerfil from './ImagenPerfil';
import EtiquetaInformacion from './EtiquetaInformacion';
import BotonesPerfil from './BotonesPerfil';
import EtiquetaTitulo from '../general/EtiquetaTitulo';
import FormularioEdicionPerfil from './FormularioEdicionPerfil';
import MostrarInformacionPerfil from './MostrarInformacionPerfil';
import axios from 'axios';
import moment from 'moment';

const InformacionPerfil = () => {
    const [perfil, setPerfil] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({});
    const [mensaje, setMensaje] = useState(null);

    useEffect(() => {
        const usuarioGuardado = sessionStorage.getItem('usuario');
        if (usuarioGuardado) {
            const usuario = JSON.parse(usuarioGuardado);
            setPerfil(usuario);
            setFormData({
                ...usuario,
                fechaNacimiento: convertirFecha(usuario.fechaNacimiento)
            });
        }
    }, []);

    const convertirFecha = (fecha) => {
        return moment(fecha).format('YYYY-MM-DD');
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave = async () => {
        try {
            const response = await axios.get('https://6668e270f53957909ff9675e.mockapi.io/cliente');
            const usuarios = response.data;

            const emailEnUso = usuarios.some(user => user.email === formData.email && user.id !== perfil.id);
            if (emailEnUso) {
                setMensaje('El correo electrónico ya está en uso.');
                return;
            }

            await axios.put(`https://6668e270f53957909ff9675e.mockapi.io/cliente/${perfil.id}`, formData);
            setPerfil(formData);
            sessionStorage.setItem('usuario', JSON.stringify(formData));
            setEditMode(false);
            setMensaje(null);
        } catch (error) {
            console.error('Error actualizando el perfil:', error);
        }
    };

    const handleCancel = () => {
        setEditMode(false);
        setFormData(perfil);
        setMensaje(null);
    };

    if (!perfil) {
        return <p>Cargando información del perfil...</p>;
    }

    return (
        <div className='contenedor-informacion-perfil'>
            <EtiquetaTitulo titulo='Mi perfil' />
            <div className='tarjeta-informacion-perfil'>
                <ImagenPerfil src={perfil.foto} />
                {editMode ? (
                    <FormularioEdicionPerfil
                        formData={formData}
                        mensaje={mensaje}
                        handleChange={handleChange}
                        handleSave={handleSave}
                        handleCancel={handleCancel}
                    />
                ) : (
                    <MostrarInformacionPerfil perfil={perfil} convertirFecha={convertirFecha} handleEdit={handleEdit} />
                )}
                <BotonesPerfil />
            </div>
        </div>
    );
};

export default InformacionPerfil;
