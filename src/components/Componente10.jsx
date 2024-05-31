import React, { useState } from 'react';
import './Componente10.css';

function Componente10() {
  const [selectedOptions, setSelectedOptions] = useState([]);

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
  const handleOptionClick = (option) => {
    alert(`Ejercicio seleccionado: ${option}`);
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
          <button key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Componente10;
