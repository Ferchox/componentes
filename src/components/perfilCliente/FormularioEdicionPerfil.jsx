import React from 'react';
import './FormularioEdicionPerfil.css';

const FormularioEdicionPerfil = ({ formData, mensaje, handleChange, handleSave, handleCancel }) => {
    return (
        <>
            {mensaje && <p className="mensaje-error">{mensaje}</p>}
            <h4>Foto de perfil</h4>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => handleChange({ target: { name: 'foto', value: e.target.files[0] } })}
            />
            <h4>Nombre</h4>
            <input
                type="text"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={formData.nombre}
                onChange={handleChange}
            />
            <h4>Fecha de nacimiento</h4>
            <input
                type="date"
                name="fechaNacimiento"
                placeholder="Ingresa tu fecha de nacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
            />
            <h4>Dirección</h4>
            <input
                type="text"
                name="direccion"
                placeholder="Ingresa tu dirección"
                value={formData.direccion}
                onChange={handleChange}
            />
            <h4>Número de celular</h4>
            <input
                type="tel"
                name="numeroCelular"
                placeholder="Ingresa tu número de celular"
                value={formData.numeroCelular}
                onChange={handleChange}
            />
            <h4>Email</h4>
            <input
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
            />
            <h4>CI</h4>
            <input
                type="text"
                name="ci"
                placeholder="Ingresa tu CI"
                value={formData.ci}
                onChange={handleChange}
            />
            <h4>Género</h4>
            <select
                name="sexo"
                value={formData.sexo}
                onChange={handleChange}
                placeholder="Ingresa tu género"
            >
                <option value="" disabled hidden>Selecciona una opción</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
            </select>
            <button onClick={handleSave}>Guardar</button>
            <button onClick={handleCancel}>Cancelar</button>
        </>
    );
};

export default FormularioEdicionPerfil;
