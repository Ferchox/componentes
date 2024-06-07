import React from 'react';

function BotonesEntrenadores({ entrenadores, mostrarInfoEntrenador }) {
  return (
    <div className="button-container">
      {entrenadores.map((entrenador, index) => (
        <button key={index} onClick={() => mostrarInfoEntrenador(entrenador)}>
          {entrenador.nombre}
        </button>
      ))}
    </div>
  );
}

export default BotonesEntrenadores;
