import React from 'react';
import Perfil from '../../assets/perfil.png';
import './InformacionPerfil.css';

const InformacionPerfil = () => {
    return (
        <div className='contenedor-informacion-perfil'>
            <div className='contenedor-imagen-perfil'>
                <img src={Perfil} alt="Perfil" className="imagen-perfil" />
            </div>
            <div className='contenedor-informacion'>
                <label>Nombre cliente</label>
            </div>
            <div className='contenedor-informacion'>
                <label>Edad</label>
            </div>
            <div className='contenedor-informacion'>
                <label>Sexo</label>
            </div>
        </div>
    );
}

export default InformacionPerfil;
