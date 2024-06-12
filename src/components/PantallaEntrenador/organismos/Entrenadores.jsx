import React, { useState } from 'react';
import BotonesEntrenadores from '../moleculas/BotonesEntrenador';
import InfoEntrenador from '../moleculas/InformacionEntrenador';
import './Entrenadores.css';

const entrenadores = [
  {
    nombre: 'Juan',
    horario: 'Lunes a Viernes - 6am a 8am',
    descripcion: 'Especialista en cuádriceps y glúteos.',
    especialidades: ['Pierna', 'Glúteos']
  },
  {
    nombre: 'Ana',
    horario: 'Lunes a Viernes - 5pm a 7pm',
    descripcion: 'Experta en fortalecimiento de pantorrillas.',
    especialidades: ['Pantorrillas', 'Pierna']
  },
  {
    nombre: 'Carlos',
    horario: 'Lunes a Viernes - 7am a 9am',
    descripcion: 'Se enfoca en pectorales y deltoides.',
    especialidades: ['Pecho', 'Hombro']
  },
  {
    nombre: 'María',
    horario: 'Lunes a Viernes - 6pm a 8pm',
    descripcion: 'Entrenadora de pectorales superiores e inferiores.',
    especialidades: ['Pecho', 'Espalda']
  }
  
];

function Entrenadores() {
  const [entrenadorSeleccionado, setEntrenadorSeleccionado] = useState(null);

  const mostrarInfoEntrenador = (entrenador) => {
    setEntrenadorSeleccionado(entrenador);
  };

  const seleccionarEntrenador = (entrenador) => {
    alert(`Has seleccionado a ${entrenador.nombre}`);
  };

  return (
    <div className="contenedor-entrenadores">
      <div className="header">
        <h1>Generar mi propia rutina</h1>
      </div>
      <h2>Selecciona un entrenador</h2>
      <BotonesEntrenadores entrenadores={entrenadores} mostrarInfoEntrenador={mostrarInfoEntrenador} />
      {entrenadorSeleccionado && (
        <InfoEntrenador entrenador={entrenadorSeleccionado} seleccionarEntrenador={seleccionarEntrenador} />
      )}
    </div>
  );
}

export default Entrenadores;
