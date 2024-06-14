import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotonesEntrenadores from './BotonesEntrenadores';
import InfoEntrenador from './InfoEntrenador';
import './Entrenadores.css';

function Entrenadores() {
  const [entrenadores, setEntrenadores] = useState([]);
  const [entrenadorSeleccionado, setEntrenadorSeleccionado] = useState(null);

  useEffect(() => {
    const fetchEntrenadores = async () => {
      try {
        const response = await axios.get('https://6668e270f53957909ff9675e.mockapi.io/entrenadores');
        setEntrenadores(response.data);
      } catch (error) {
        console.error('Error fetching the trainers:', error);
      }
    };

    fetchEntrenadores();
  }, []);

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
