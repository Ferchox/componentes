import React from 'react';

function InformacionEntrenador({ entrenador, seleccionarEntrenador }) {
  return (
    <div className="trainer-info">
      <h3>{entrenador.nombre}</h3>
      <p><strong>Horario:</strong> {entrenador.horario}</p>
      <p><strong>Descripción:</strong> {entrenador.descripcion}</p>
      <h4>Especialidades:</h4>
      <ul>
        {entrenador.especialidades.map(especialidad => (
          <li key={especialidad}>{especialidad}</li>
        ))}
      </ul>
      <button onClick={() => seleccionarEntrenador(entrenador)}>Elegir Entrenador</button>
    </div>
  );
}

export default InformacionEntrenador;
