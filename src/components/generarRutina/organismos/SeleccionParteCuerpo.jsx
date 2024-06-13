import React, { useState } from "react";
import "./SeleccionParteCuerpo.css";
import Boton from "../atomos/Boton";
import ContenedorBotones from "../moleculas/ContenedorBotones";
import ContenedorEjercicio from "../moleculas/ContenedorEjercicio";
import ContenedorInfoEjercicio from "../moleculas/ContenedorInfoEjercicio";
import EtiquetaTitulo from "../../general/moleculas/EtiquetaTitulo";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ejercicios = {
  pierna: ["Sentadillas", "Prensa", "Extensiones de Pierna"],
  brazo: ["Curl de Bíceps", "Tríceps en Polea", "Curl de Martillo", "Fondos"],
  pecho: [
    "Press de Banca",
    "Aperturas",
    "Fondos en Paralelas",
    "Press Inclinado",
  ],
  espalda: ["Dominadas", "Remo con Barra", "Remo en Máquina", "Peso Muerto"],
  hombro: [
    "Press Militar",
    "Elevaciones Laterales",
    "Elevaciones Frontales",
    "Encogimientos",
  ],
  abdomen: ["Crunch", "Plancha", "Elevación de Piernas", "Bicicleta"],
  cardio: ["Correr", "Ciclismo", "Elíptica", "Remo"],
  funcional: [
    "Burpees",
    "Kettlebell Swings",
    "Cuerdas de Batalla",
    "Saltos en Caja",
  ],
  estiramiento: [
    "Estiramiento de Isquiotibiales",
    "Estiramiento de Cuádriceps",
    "Estiramiento de Espalda",
    "Estiramiento de Hombros",
  ],
  yoga: [
    "Saludo al Sol",
    "Postura del Guerrero",
    "Postura del Árbol",
    "Postura del Niño",
  ],
};

const detallesEjercicio = {
  Sentadillas:
    "Ejercicio para trabajar los músculos de las piernas, especialmente los cuádriceps y glúteos.",
  Prensa:
    "Ejercicio en máquina para trabajar los músculos de las piernas, principalmente cuádriceps y glúteos.",
  "Extensiones de Pierna":
    "Ejercicio en máquina para trabajar los cuádriceps de forma aislada.",
  "Curl de Bíceps": "Ejercicio para trabajar los músculos del bíceps braquial.",
  "Tríceps en Polea":
    "Ejercicio para trabajar los músculos del tríceps braquial.",
  "Curl de Martillo":
    "Ejercicio para trabajar los músculos del bíceps braquial y los músculos del antebrazo.",
  Fondos: "Ejercicio compuesto que trabaja pecho, tríceps y hombros.",
  "Press de Banca":
    "Ejercicio para el pecho que también trabaja los tríceps y los hombros.",
  Aperturas: "Ejercicio para el pecho que trabaja el pectoral mayor.",
  "Fondos en Paralelas":
    "Ejercicio compuesto que trabaja los tríceps y el pecho.",
  "Press Inclinado":
    "Variante del press de banca que pone más énfasis en el músculo pectoral superior.",
  Dominadas: "Ejercicio para la espalda que también trabaja los bíceps.",
  "Remo con Barra":
    "Ejercicio para la espalda que trabaja los músculos dorsales.",
  "Remo en Máquina":
    "Ejercicio para la espalda que trabaja los músculos dorsales y los músculos de la parte baja de la espalda.",
  "Peso Muerto":
    "Ejercicio compuesto que trabaja la espalda baja, glúteos y piernas.",
  "Press Militar":
    "Ejercicio para los hombros, especialmente el deltoides anterior.",
  "Elevaciones Laterales":
    "Ejercicio para los hombros, específicamente el deltoides lateral.",
  "Elevaciones Frontales":
    "Ejercicio para los hombros, trabajando el deltoides anterior.",
  Encogimientos: "Ejercicio para los hombros y trapecios.",
  Crunch: "Ejercicio básico para trabajar los abdominales.",
  Plancha: "Ejercicio isométrico para fortalecer el core.",
  "Elevación de Piernas": "Ejercicio para trabajar los abdominales inferiores.",
  Bicicleta: "Ejercicio para los abdominales oblicuos.",
  Correr: "Ejercicio cardiovascular que trabaja todo el cuerpo.",
  Ciclismo: "Ejercicio cardiovascular que trabaja principalmente las piernas.",
  Elíptica:
    "Ejercicio cardiovascular de bajo impacto que trabaja todo el cuerpo.",
  Remo: "Ejercicio cardiovascular que trabaja principalmente la espalda y los brazos.",
  Burpees: "Ejercicio funcional que combina flexiones, sentadillas y saltos.",
  "Kettlebell Swings":
    "Ejercicio funcional que trabaja los glúteos, los isquiotibiales y los hombros.",
  "Cuerdas de Batalla":
    "Ejercicio funcional que trabaja los brazos, los hombros y el core.",
  "Saltos en Caja": "Ejercicio funcional que trabaja las piernas y el core.",
  "Estiramiento de Isquiotibiales":
    "Estiramiento para los músculos isquiotibiales de la parte posterior de los muslos.",
  "Estiramiento de Cuádriceps":
    "Estiramiento para los músculos cuádriceps de la parte frontal de los muslos.",
  "Estiramiento de Espalda": "Estiramiento para los músculos de la espalda.",
  "Estiramiento de Hombros": "Estiramiento para los músculos de los hombros.",
  "Saludo al Sol": "Secuencia de yoga que calienta y estira todo el cuerpo.",
  "Postura del Guerrero":
    "Postura de yoga que trabaja las piernas, los brazos y el core.",
  "Postura del Árbol":
    "Postura de yoga que trabaja el equilibrio y fortalece las piernas.",
  "Postura del Niño": "Postura de yoga que relaja la espalda y los hombros.",
};

const SeleccionParteCuerpo = () => {
  const [grupoSeleccionado, setGrupoSeleccionado] = useState(null);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);
  const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]);

  const añadirEjercicio = () => {
    if (ejercicioSeleccionado) {
      setEjerciciosSeleccionados([
        ...ejerciciosSeleccionados,
        {
          grupo: grupoSeleccionado,
          ejercicio: ejercicioSeleccionado,
          descripcion: detallesEjercicio[ejercicioSeleccionado],
        },
      ]);
      setEjercicioSeleccionado(null);
    }
  };

  const generarPDF = () => {
    const doc = new jsPDF();
    const title = "Mi Rutina de Entrenamiento";
    const header = `## ${title}`;

    doc.setFontSize(20);
    doc.text(header, 10, 10);

    let y = 20;
    doc.setFontSize(12);
    doc.text("Ejercicios:", 10, y);
    y += 10;

    autoTable(doc, {
      head: [["#", "Grupo", "Ejercicio", "Descripción"]],
      body: ejerciciosSeleccionados.map((item, index) => [
        index + 1,
        item.grupo.toUpperCase(),
        item.ejercicio,
        item.descripcion,
      ]),
      startY: y,
    });

    doc.save(`${title}.pdf`);
  };

  const manejarSeleccionGrupo = (grupo) => {
    setGrupoSeleccionado(grupo);
    setEjercicioSeleccionado(null);
  };

  const manejarSeleccionEjercicio = (ejercicio) => {
    setEjercicioSeleccionado(ejercicio);
  };

  return (
    <div className="contenedor-rutina">
      <EtiquetaTitulo titulo="Generar mi propia rutina" />
      <h4 className="subtitulo"> ¿Qué vas a trabajar el día de hoy?</h4>
      <div className="aplicacion">
        <div className="contenedor-botones">
          <ContenedorBotones>
            {Object.keys(ejercicios).map((grupo) => (
              <Boton key={grupo} onClick={() => manejarSeleccionGrupo(grupo)}>
                {grupo.charAt(0).toUpperCase() + grupo.slice(1)}
              </Boton>
            ))}
          </ContenedorBotones>
        </div>
        <div className="contenido">
          <ContenedorEjercicio>
            {grupoSeleccionado &&
              ejercicios[grupoSeleccionado].map((ejercicio) => (
                <Boton
                  key={ejercicio}
                  onClick={() => manejarSeleccionEjercicio(ejercicio)}
                >
                  {ejercicio}
                </Boton>
              ))}
          </ContenedorEjercicio>
          <ContenedorInfoEjercicio>
            {ejercicioSeleccionado && (
              <>
                <h3>{ejercicioSeleccionado}</h3>
                <p>{detallesEjercicio[ejercicioSeleccionado]}</p>
              </>
            )}
          </ContenedorInfoEjercicio>
          <div className="botones-accion">
            <Boton onClick={añadirEjercicio}>Añadir Ejercicio</Boton>
            <Boton onClick={generarPDF}>Generar PDF</Boton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeleccionParteCuerpo;
