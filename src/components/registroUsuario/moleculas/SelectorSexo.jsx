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
            <option value="" disabled>Sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
        </select>
    );
};

export default SelectorSexo;
