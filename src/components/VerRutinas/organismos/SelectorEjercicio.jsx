import React from 'react';

const SelectorEjercicio = ({ grupoSeleccionado, getEjerciciosByGrupo, manejarSeleccionEjercicio }) => {
    const ejercicios = getEjerciciosByGrupo(grupoSeleccionado);
    return (
        <div>
            {ejercicios.map((ejercicio) => (
                <button key={ejercicio.id} onClick={() => manejarSeleccionEjercicio(ejercicio)}>
                    {ejercicio.nombre}
                </button>
            ))}
        </div>
    );
};

export default SelectorEjercicio;
