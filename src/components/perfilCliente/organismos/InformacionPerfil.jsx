import React, { useState, useEffect } from 'react';
import './InformacionPerfil.css';
import ImagenPerfil from '../moleculas/ImagenPerfil';
import EtiquetaInformacion from '../moleculas/EtiquetaInformacion';
import BotonesPerfil from '../moleculas/BotonesPerfil';
import EtiquetaTitulo from '../../general/moleculas/EtiquetaTitulo';
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
            console.error('Error updating profile:', error);
        }
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
                    <>
                        {mensaje && <p className="mensaje-error">{mensaje}</p>}
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="fechaNacimiento"
                            placeholder="Fecha de nacimiento"
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="direccion"
                            placeholder="Dirección"
                            value={formData.direccion}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="numeroCelular"
                            placeholder="Número de celular"
                            value={formData.numeroCelular}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="ci"
                            placeholder="CI"
                            value={formData.ci}
                            onChange={handleChange}
                        />
                        <select
                            name="sexo"
                            value={formData.sexo}
                            onChange={handleChange}
                            placeholder="Sexo"
                        >
                            <option value="" disabled hidden>Selecciona una opción</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFormData({ ...formData, foto: e.target.files[0] })}
                        />
                        <button onClick={handleSave}>Guardar</button>
                    </>
                ) : (
                    <>
                        <EtiquetaInformacion etiqueta="Nombre cliente" valor={perfil.nombre} />
                        <EtiquetaInformacion etiqueta="Fecha de nacimiento" valor={convertirFecha(perfil.fechaNacimiento)} />
                        <EtiquetaInformacion etiqueta="Dirección" valor={perfil.direccion} />
                        <EtiquetaInformacion etiqueta="Número de celular" valor={perfil.numeroCelular} />
                        <EtiquetaInformacion etiqueta="Correo electrónico" valor={perfil.email} />
                        <EtiquetaInformacion etiqueta="CI" valor={perfil.ci} />
                        <EtiquetaInformacion etiqueta="Sexo" valor={perfil.sexo} />
                        <button onClick={handleEdit}>Editar</button>
                    </>
                )}
                <BotonesPerfil />
            </div>
        </div>
    );
};

export default InformacionPerfil;
