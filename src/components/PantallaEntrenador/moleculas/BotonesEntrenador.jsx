import React from 'react';

function BotonesEntrenador({ entrenadores, mostrarInfoEntrenador }) {
  return (
    <div className="button-container">
      {entrenadores.map(entrenador => (
        <button key={entrenador.nombre} onClick={() => mostrarInfoEntrenador(entrenador)}>
          {entrenador.nombre}
        </button>
      ))}
    </div>
  );
}

export default BotonesEntrenador;
