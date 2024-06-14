import React, { useState, useEffect } from 'react';
import './Entrenadores.css';

function Entrenadores() {
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  useEffect(() => {
    fetch('https://6668e270f53957909ff9675e.mockapi.io/entrenadores')
      .then(response => response.json())
      .then(data => setTrainers(data))
      .catch(error => console.error('Error fetching trainers:', error));
  }, []);

  const showTrainerInfo = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const selectTrainer = (trainer) => {
    alert(`Has seleccionado a ${trainer.nombre}`);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Generar mi propia rutina</h1>
      </div>
      <h2>Selecciona un entrenador</h2>
      <div className="button-container">
        {trainers.map(trainer => (
          <button key={trainer.id} onClick={() => showTrainerInfo(trainer)}>
            {trainer.nombre}
          </button>
        ))}
      </div>
      {selectedTrainer && (
        <div className="trainer-info">
          <h3>{selectedTrainer.nombre}</h3>
          <p><strong>Horario:</strong> {selectedTrainer.horario}</p>
          <p><strong>Descripción:</strong> {selectedTrainer.descripcion}</p>
          <h4>Especialidades:</h4>
          <ul>
            {Object.keys(selectedTrainer.especialidad).length > 0 ? (
              Object.entries(selectedTrainer.especialidad).map(([key, value]) => (
                <li key={key}>{`${key}: ${value}`}</li>
              ))
            ) : (
              <li>No hay especialidades especificadas</li>
            )}
          </ul>
          <button onClick={() => selectTrainer(selectedTrainer)}>Elegir Entrenador</button>
        </div>
      )}
    </div>
  );
}

export default Entrenadores;
