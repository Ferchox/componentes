import React from 'react';
import './EtiquetaInformacion.css'

const EtiquetaInformacion = ({ etiqueta, valor }) => {
    return (
        <div className='contenedor-informacion'>
            <label>{etiqueta}: {valor}</label>
        </div>
    );
}

export default EtiquetaInformacion;
