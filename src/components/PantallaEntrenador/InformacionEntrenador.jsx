import React from 'react';

function InfoEntrenador({ entrenador, seleccionarEntrenador }) {
  return (
    <div>
      <div className="button-container3">
        <button disabled>{entrenador.nombre}</button>
      </div>
      <div className="trainer-info">
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
    </div>
    
  );
}

export default InfoEntrenador;
