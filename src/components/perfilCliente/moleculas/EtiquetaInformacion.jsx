import React from 'react';
import './EtiquetaInformacion.css'

const EtiquetaInformacion = ({ label, value }) => {
    return (
        <div className='contenedor-informacion'>
            <label>{label}: {value}</label>
        </div>
    );
}

export default EtiquetaInformacion;