import React from 'react';
import Etiqueta from '../atomos/Etiqueta';
import './InformacionArticulo.css'

const InformacionArticulo = ({ label, value }) => {
    return (
        <div className='contenedor-informacion'>
            <Etiqueta text={`${label}: ${value}`} />
        </div>
    );
}

export default InformacionArticulo;