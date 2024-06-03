import React, { useState } from 'react';
import "./DescripcionEjerciciosDesplegable";

const exercises = {
  pierna: ['Sentadillas', 'Prensa', 'Extensiones de Pierna'],
  pecho: ['Press de Banca', 'Aperturas', 'Fondos'],
  hombro: ['Press Militar', 'Elevaciones Laterales', 'Pájaros'],
  bicep: ['Curl con Barra', 'Curl Alterno', 'Curl Concentrado'],
  tricep: ['Press Francés', 'Extensiones de Tricep', 'Fondos en Paralelas'],
  espalda: ['Dominadas', 'Remo con Barra', 'Peso Muerto'],
  abdomen: ['Crunch', 'Plancha', 'Elevación de Piernas'],
  gluteos: ['Puente de Glúteo', 'Sentadilla Sumó', 'Patada de Glúteo'],
  pantorrillas: ['Elevación de Talones', 'Sentadillas con Talón Elevado', 'Prensa de Pantorrillas'],
  antebrazos: ['Curl de Muñeca', 'Extensión de Muñeca', 'Curl Inverso']
};

const exerciseDetails = {
  'Sentadillas': 'Ejercicio para trabajar los músculos de las piernas, especialmente los cuádriceps y glúteos.',
  'Prensa': 'Ejercicio en máquina para trabajar los músculos de las piernas, principalmente cuádriceps y glúteos.',
  'Extensiones de Pierna': 'Ejercicio en máquina para trabajar los cuádriceps de forma aislada.',
  'Press de Banca': 'Ejercicio para el pecho que también trabaja los tríceps y los hombros.',
  'Aperturas': 'Ejercicio para el pecho que trabaja el pectoral mayor.',
  'Fondos': 'Ejercicio compuesto que trabaja pecho, tríceps y hombros.',
  'Press Militar': 'Ejercicio para los hombros, especialmente el deltoides anterior.',
  'Elevaciones Laterales': 'Ejercicio para los hombros, específicamente el deltoides lateral.',
  'Pájaros': 'Ejercicio para los hombros, trabajando el deltoides posterior.',
  'Curl con Barra': 'Ejercicio para los bíceps que permite manejar mucho peso.',
  'Curl Alterno': 'Ejercicio para los bíceps realizado con mancuernas alternando los brazos.',
  'Curl Concentrado': 'Ejercicio para los bíceps que aísla el músculo y permite una contracción máxima.',
  'Press Francés': 'Ejercicio para los tríceps realizado con barra.',
  'Extensiones de Tricep': 'Ejercicio en máquina o con cable para trabajar los tríceps.',
  'Fondos en Paralelas': 'Ejercicio compuesto que trabaja los tríceps y el pecho.',
  'Dominadas': 'Ejercicio para la espalda que también trabaja los bíceps.',
  'Remo con Barra': 'Ejercicio para la espalda que trabaja los músculos dorsales.',
  'Peso Muerto': 'Ejercicio compuesto que trabaja la espalda baja, glúteos y piernas.',
  'Crunch': 'Ejercicio básico para trabajar los abdominales.',
  'Plancha': 'Ejercicio isométrico para fortalecer el core.',
  'Elevación de Piernas': 'Ejercicio para trabajar los abdominales inferiores.',
  'Puente de Glúteo': 'Ejercicio para trabajar los glúteos.',
  'Sentadilla Sumó': 'Variante de la sentadilla para trabajar los glúteos y aductores.',
  'Patada de Glúteo': 'Ejercicio específico para los glúteos.',
  'Elevación de Talones': 'Ejercicio para trabajar las pantorrillas.',
  'Sentadillas con Talón Elevado': 'Variante de la sentadilla que enfatiza las pantorrillas.',
  'Prensa de Pantorrillas': 'Ejercicio en máquina para trabajar las pantorrillas.',
  'Curl de Muñeca': 'Ejercicio para los antebrazos, específicamente los flexores.',
  'Extensión de Muñeca': 'Ejercicio para los antebrazos, trabajando los extensores.',
  'Curl Inverso': 'Ejercicio para los antebrazos y los músculos braquiorradiales.'
};

function componente1() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const showExercises = (group) => {
    setSelectedGroup(group);
    setSelectedExercise(null);
  };

  const showExerciseInfo = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Generar mi propia rutina</h1>
      </div>
      <h2>¿Qué vas a trabajar el día de hoy?</h2>
      <div className="button-container">
        {Object.keys(exercises).map(group => (
          <button key={group} onClick={() => showExercises(group)}>
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </button>
        ))}
      </div>
      {selectedGroup && (
        <div className="exercise-container">
          {exercises[selectedGroup].map(exercise => (
            <button key={exercise} onClick={() => showExerciseInfo(exercise)}>
              {exercise}
            </button>
          ))}
        </div>
      )}
      {selectedExercise && (
        <div className="exercise-info">
          <h3>{selectedExercise}</h3>
          <p>{exerciseDetails[selectedExercise]}</p>
        </div>
      )}
    </div>
  );
}

export default componente1;
