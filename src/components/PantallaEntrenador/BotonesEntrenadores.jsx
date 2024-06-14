import React from 'react';

function BotonesEntrenadores({ entrenadores, mostrarInfoEntrenador }) {
  return (
    <div className="botones-entrenadores">
      {entrenadores.map((entrenador) => (
        <button key={entrenador.id} onClick={() => mostrarInfoEntrenador(entrenador)}>
          {entrenador.nombre}
        </button>
      ))}
    </div>
  );
}

export default BotonesEntrenadores;
