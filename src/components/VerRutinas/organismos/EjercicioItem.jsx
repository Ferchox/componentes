import React from 'react';

const EjercicioItem = ({ item, index, eliminarEjercicio }) => {
    return (
        <li key={index}>
            {item.ejercicio} - {item.grupo.charAt(0).toUpperCase() + item.grupo.slice(1)}
            <button onClick={() => eliminarEjercicio(index)}>Eliminar</button>
        </li>
    );
};

export default EjercicioItem;
