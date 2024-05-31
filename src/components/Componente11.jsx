import sentadillasIcon from "../assets/sentadillas-icon.jpg";


import React, { useState } from 'react';
import './Componente11.css';
import TimePicker from 'react-time-picker';

const ExerciseCard = ({ title, description, image }) => {
    return (
      <div className="exercise-card">
        <img src={image} alt={`${title} icon`} className="exercise-icon" />
        <div className="exercise-content">
          <h1 className="exercise-title">{title}</h1>
          <p className="exercise-description">{description}</p>
        </div>
      </div>
    );
  };

function Componente11() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [description, setDescription] = useState('');
  

  const options = {
    pierna: ["Sentadillas", "Peso Muerto", "Extensiones", "Prensa de Pierna"],
    brazo: ["Curl de Bíceps", "Tríceps en Polea", "Curl de Martillo", "Fondos"],
    pecho: ["Press de Banca", "Aperturas", "Fondos en Paralelas", "Press Inclinado"],
    espalda: ["Dominadas", "Remo con Barra", "Remo en Máquina", "Peso Muerto"],
    hombro: ["Press Militar", "Elevaciones Laterales", "Elevaciones Frontales", "Encogimientos"],
    abdomen: ["Crunch", "Plancha", "Elevación de Piernas", "Bicicleta"],
    cardio: ["Correr", "Ciclismo", "Elíptica", "Remo"],
    funcional: ["Burpees", "Kettlebell Swings", "Cuerdas de Batalla", "Saltos en Caja"],
    estiramiento: ["Estiramiento de Isquiotibiales", "Estiramiento de Cuádriceps", "Estiramiento de Espalda", "Estiramiento de Hombros"],
    yoga: ["Saludo al Sol", "Postura del Guerrero", "Postura del Árbol", "Postura del Niño"]
  };

  const handleButtonClick = (type) => {
    setSelectedOptions(options[type] || []);
  };

  const handleOptionClick = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar la información, como enviarla a una base de datos.
    setShowModal(false);
    alert(`Ejercicio seleccionado: ${selectedOptions[selectedOptions.length - 1]}\nHora seleccionada: ${selectedTime}\nDescripción: ${description}`);
  };

  return (
    <div className="App">
      <h2>Generar mi propia rutina</h2>
      <div className="tit">
      <h5>¿Que vas a trabajar el dia de hoy?</h5>
      </div>
      <div className="buttons">
        {Object.keys(options).map((type) => (
          <button key={type} onClick={() => handleButtonClick(type)}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <div className="content">
        {selectedOptions.map((option, index) => (
          <button key={index} onClick={handleOptionClick}>
            {option}
          </button>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Seleccionar Hora</h3>
            <TimePicker
              onChange={setSelectedTime}
              value={selectedTime}
              className="react-time-picker"
            />
              <ExerciseCard
              title="Sentadillas"
              description="Ponte de pie con los pies al ancho de los hombros, baja flexionando las rodillas y caderas como si te fueras a sentar..."
              image={sentadillasIcon}
              />
            <button onClick={handleSave}>Guardar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Componente11;
