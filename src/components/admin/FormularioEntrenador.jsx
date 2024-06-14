import React, { useState } from "react";
import "./FormularioEntrenador.css";
import CampoTexto from "./CampoTexto";
import CampoTextoArea from "./CampoTextoArea.jsx";
import SelectorMultiple from "./SelectorMultiple.jsx";

function FormularioEntrenador({ entrenador, guardarCambios }) {
  const [nombre, setNombre] = useState(entrenador?.nombre || "");
  const [horario, setHorario] = useState(entrenador?.horario || "");
  const [descripcion, setDescripcion] = useState(entrenador?.descripcion || "");
  const [especialidad, setEspecialidad] = useState(
    entrenador?.especialidad || []
  );

  const opcionesEspecialidad = [
    "Pantorrillas",
    "Pierna",
    "Biceps",
    "Triceps",
    "Espalda",
    "Pecho",
    "Abdomen",
    "Gluteos",
    "Cardio",
    "Flexibilidad",
    "Fuerza",
    "Ejercicios de bajo impacto",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarCambios({ nombre, horario, descripcion, especialidad });
  };

  return (
    <form className="formulario-entrenador" onSubmit={handleSubmit}>
      <h4>Nombre</h4>
      <CampoTexto
        tipo="text"
        placeholder="Ingresa el nombre del entrenador"
        valor={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <h4>Horario</h4>
      <CampoTexto
        tipo="text"
        placeholder="Ingresa el horario del entrenador"
        valor={horario}
        onChange={(e) => setHorario(e.target.value)}
      />
      <h4>Descripción</h4>
      <CampoTextoArea
        placeholder="Ingresa una breve descripción del entrenador"
        valor={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <h4>Especialidad</h4>
      <SelectorMultiple
        options={opcionesEspecialidad}
        selectedValues={especialidad}
        onChange={(selected) => setEspecialidad(selected)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default FormularioEntrenador;
