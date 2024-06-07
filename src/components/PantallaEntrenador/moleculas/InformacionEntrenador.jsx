import React from 'react';

function InfoEntrenador({ entrenador, seleccionarEntrenador }) {
  return (
    <div className="trainer-info">
      <h3>{entrenador.nombre}</h3>
      <p>{entrenador.horario}</p>
      <p>{entrenador.descripcion}</p>
      <h4>Especialidades:</h4>
      <ul>
        {entrenador.especialidades.map((especialidad, index) => (
          <li key={index}>{especialidad}</li>
        ))}
      </ul>
      <button onClick={() => seleccionarEntrenador(entrenador)}>Seleccionar</button>
    </div>
  );
}

export default InfoEntrenador;
