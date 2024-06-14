import React from 'react';
import './CampoTexto.css';

const CampoTexto = ({ tipo, placeholder, valor, onChange }) => {
    return (
        <input
            type={tipo}
            placeholder={placeholder}
            value={valor}
            onChange={onChange}
            className="campo-texto"
            required
        />
    );
};

export default CampoTexto;
