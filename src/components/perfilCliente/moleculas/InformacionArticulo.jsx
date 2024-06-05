import React from 'react';
import Label from './Label';

const InformacionArticulo = ({ label, value }) => {
    return (
        <div className='contenedor-informacion'>
            <Label text={`${label}: ${value}`} />
        </div>
    );
}

export default InformacionArticulo;