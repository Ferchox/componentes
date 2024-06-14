import React from 'react';

function InfoEntrenador({ entrenador, seleccionarEntrenador }) {
  return (
    <div className="info-entrenador">
      <h3>{entrenador.nombre}</h3>
      <p><strong>Horario:</strong> {entrenador.horario}</p>
      <p><strong>Descripción:</strong> {entrenador.descripcion}</p>
      {entrenador.especialidad && (
        <div>
          <p><strong>Especialidades:</strong></p>
          <ul>
            {Object.values(entrenador.especialidad).map((esp, index) => (
              <li key={index}>{esp}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={() => seleccionarEntrenador(entrenador)}>Seleccionar</button>
    </div>
  );
}

export default InfoEntrenador;
