import React from 'react';
import './SelectorSexo.css';

const SelectorSexo = ({ valor, onChange }) => {
    return (
        <select
            value={valor}
            onChange={onChange}
            className="selector-sexo"
            required
        >
            <option className='opcion' value="" disabled>Selecciona tu género</option>
            <option className='opcion' value="Masculino">Masculino</option>
            <option className='opcion' value="Femenino">Femenino</option>
            <option className='opcion' value="Otro">Otro</option>
        </select>
    );
};

export default SelectorSexo;
