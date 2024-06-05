import React, { useState } from 'react';
import './Entrenadores.css';

const trainers = [
  { 
    name: 'Juan Perez', 
    schedule: 'Lunes a Viernes - 6am a 8am', 
    description: 'Especialista en cuádriceps y glúteos.',
    specialties: ['Pierna', 'Glúteos'] 
  },
  { 
    name: 'Ana Gómez', 
    schedule: 'Lunes a Viernes - 5pm a 7pm', 
    description: 'Experta en fortalecimiento de pantorrillas.',
    specialties: ['Pantorrillas', 'Pierna'] 
  },
  { 
    name: 'Carlos López', 
    schedule: 'Lunes a Viernes - 7am a 9am', 
    description: 'Se enfoca en pectorales y deltoides.',
    specialties: ['Pecho', 'Hombro'] 
  },
  { 
    name: 'María Fernández', 
    schedule: 'Lunes a Viernes - 6pm a 8pm', 
    description: 'Entrenadora de pectorales superiores e inferiores.',
    specialties: ['Pecho', 'Espalda'] 
  }
  // Añadir más entrenadores si es necesario
];

function Entrenadores() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const showTrainerInfo = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const selectTrainer = (trainer) => {
    alert(`Has seleccionado a ${trainer.name}`);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Generar mi propia rutina</h1>
      </div>
      <h2>Selecciona un entrenador</h2>
      <div className="button-container">
        {trainers.map(trainer => (
          <button key={trainer.name} onClick={() => showTrainerInfo(trainer)}>
            {trainer.name}
          </button>
        ))}
      </div>
      {selectedTrainer && (
        <div className="trainer-info">
          <h3>{selectedTrainer.name}</h3>
          <p><strong>Horario:</strong> {selectedTrainer.schedule}</p>
          <p><strong>Descripción:</strong> {selectedTrainer.description}</p>
          <h4>Especialidades:</h4>
          <ul>
            {selectedTrainer.specialties.map(specialty => (
              <li key={specialty}>{specialty}</li>
            ))}
          </ul>
          <button onClick={() => selectTrainer(selectedTrainer)}>Elegir Entrenador</button>
        </div>
      )}
    </div>
  );
}

export default Entrenadores;
