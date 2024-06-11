import React from 'react';
import './Aviso.css';

const Aviso = ({ mensaje, tipo }) => {
    if (!mensaje) return null;

    return (
        <div className={`aviso ${tipo}`}>
            {mensaje}
        </div>
    );
};

export default Aviso;
