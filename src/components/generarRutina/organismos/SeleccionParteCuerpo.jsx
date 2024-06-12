import React, { useState } from 'react';
import './SeleccionParteCuerpo.css';
import Boton from '../atomos/Boton';
import ContenedorBotones from '../moleculas/ContenedorBotones';
import ContenedorEjercicio from '../moleculas/ContenedorEjercicio';
import ContenedorInfoEjercicio from '../moleculas/ContenedorInfoEjercicio';
import EtiquetaTitulo from '../../general/moleculas/EtiquetaTitulo';

const exercises = {
  pierna: ['Sentadillas', 'Prensa', 'Extensiones de Pierna'],
  brazo: ['Curl de Bíceps', 'Tríceps en Polea', 'Curl de Martillo', 'Fondos'],
  pecho: ['Press de Banca', 'Aperturas', 'Fondos en Paralelas', 'Press Inclinado'],
  espalda: ['Dominadas', 'Remo con Barra', 'Remo en Máquina', 'Peso Muerto'],
  hombro: ['Press Militar', 'Elevaciones Laterales', 'Elevaciones Frontales', 'Encogimientos'],
  abdomen: ['Crunch', 'Plancha', 'Elevación de Piernas', 'Bicicleta'],
  cardio: ['Correr', 'Ciclismo', 'Elíptica', 'Remo'],
  funcional: ['Burpees', 'Kettlebell Swings', 'Cuerdas de Batalla', 'Saltos en Caja'],
  estiramiento: ['Estiramiento de Isquiotibiales', 'Estiramiento de Cuádriceps', 'Estiramiento de Espalda', 'Estiramiento de Hombros'],
  yoga: ['Saludo al Sol', 'Postura del Guerrero', 'Postura del Árbol', 'Postura del Niño']
};

const exerciseDetails = {
  'Sentadillas': 'Ejercicio para trabajar los músculos de las piernas, especialmente los cuádriceps y glúteos.',
  'Prensa': 'Ejercicio en máquina para trabajar los músculos de las piernas, principalmente cuádriceps y glúteos.',
  'Extensiones de Pierna': 'Ejercicio en máquina para trabajar los cuádriceps de forma aislada.',
  'Curl de Bíceps': 'Ejercicio para trabajar los músculos del bíceps braquial.',
  'Tríceps en Polea': 'Ejercicio para trabajar los músculos del tríceps braquial.',
  'Curl de Martillo': 'Ejercicio para trabajar los músculos del bíceps braquial y los músculos del antebrazo.',
  'Fondos': 'Ejercicio compuesto que trabaja pecho, tríceps y hombros.',
  'Press de Banca': 'Ejercicio para el pecho que también trabaja los tríceps y los hombros.',
  'Aperturas': 'Ejercicio para el pecho que trabaja el pectoral mayor.',
  'Fondos en Paralelas': 'Ejercicio compuesto que trabaja los tríceps y el pecho.',
  'Press Inclinado': 'Variante del press de banca que pone más énfasis en el músculo pectoral superior.',
  'Dominadas': 'Ejercicio para la espalda que también trabaja los bíceps.',
  'Remo con Barra': 'Ejercicio para la espalda que trabaja los músculos dorsales.',
  'Remo en Máquina': 'Ejercicio para la espalda que trabaja los músculos dorsales y los músculos de la parte baja de la espalda.',
  'Peso Muerto': 'Ejercicio compuesto que trabaja la espalda baja, glúteos y piernas.',
  'Press Militar': 'Ejercicio para los hombros, especialmente el deltoides anterior.',
  'Elevaciones Laterales': 'Ejercicio para los hombros, específicamente el deltoides lateral.',
  'Elevaciones Frontales': 'Ejercicio para los hombros, trabajando el deltoides anterior.',
  'Encogimientos': 'Ejercicio para los hombros y trapecios.',
  'Crunch': 'Ejercicio básico para trabajar los abdominales.',
  'Plancha': 'Ejercicio isométrico para fortalecer el core.',
  'Elevación de Piernas': 'Ejercicio para trabajar los abdominales inferiores.',
  'Bicicleta': 'Ejercicio para los abdominales oblicuos.',
  'Correr': 'Ejercicio cardiovascular que trabaja todo el cuerpo.',
  'Ciclismo': 'Ejercicio cardiovascular que trabaja principalmente las piernas.',
  'Elíptica': 'Ejercicio cardiovascular de bajo impacto que trabaja todo el cuerpo.',
  'Remo': 'Ejercicio cardiovascular que trabaja principalmente la espalda y los brazos.',
  'Burpees': 'Ejercicio funcional que combina flexiones, sentadillas y saltos.',
  'Kettlebell Swings': 'Ejercicio funcional que trabaja los glúteos, los isquiotibiales y los hombros.',
  'Cuerdas de Batalla': 'Ejercicio funcional que trabaja los brazos, los hombros y el core.',
  'Saltos en Caja': 'Ejercicio funcional que trabaja las piernas y el core.',
  'Estiramiento de Isquiotibiales': 'Estiramiento para los músculos isquiotibiales de la parte posterior de los muslos.',
  'Estiramiento de Cuádriceps': 'Estiramiento para los músculos cuádriceps de la parte frontal de los muslos.',
  'Estiramiento de Espalda': 'Estiramiento para los músculos de la espalda.',
  'Estiramiento de Hombros': 'Estiramiento para los músculos de los hombros.',
  'Saludo al Sol': 'Secuencia de yoga que calienta y estira todo el cuerpo.',
  'Postura del Guerrero': 'Postura de yoga que trabaja las piernas, los brazos y el core.',
  'Postura del Árbol': 'Postura de yoga que trabaja el equilibrio y fortalece las piernas.',
  'Postura del Niño': 'Postura de yoga que relaja la espalda y los hombros.'
};

const SeleccionParteCuerpo = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleGroupSelection = (group) => {
    setSelectedGroup(group);
    setSelectedExercise(null);
  };

  const handleExerciseSelection = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <div className='contenedor-generar-rutina'>
      <EtiquetaTitulo titulo='Generar mi propia rutina' />
      <h4 className="sub"> ¿Que vas a trabajar el dia de hoy?</h4>
      <div className="App">
        <div className="buttons">
          <ContenedorBotones>
            {Object.keys(exercises).map((group) => (
              <Boton key={group} onClick={() => handleGroupSelection(group)}>
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </Boton>
            ))}
          </ContenedorBotones>
        </div>
        <div className="content">
          <ContenedorEjercicio>
            {selectedGroup &&
              exercises[selectedGroup].map((exercise) => (
                <Boton
                  key={exercise}
                  onClick={() => handleExerciseSelection(exercise)}
                >
                  {exercise}
                </Boton>
              ))}
          </ContenedorEjercicio>
          <ContenedorInfoEjercicio>
            {selectedExercise && (
              <>
                <h3>{selectedExercise}</h3>
                <p>{exerciseDetails[selectedExercise]}</p>
              </>
            )}
          </ContenedorInfoEjercicio>
        </div>
      </div>
    </div>
  );
};

export default SeleccionParteCuerpo;

