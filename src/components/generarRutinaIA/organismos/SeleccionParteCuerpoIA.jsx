import React, { useState, useEffect } from "react";
import "./SeleccionParteCuerpoIA.css";
import Boton from "../atomos/BotonIA";
import ContenedorBotones from "../moleculas/ContenedorBotonesIA";
import ContenedorEjercicio from "../moleculas/ContenedorEjercicioIA";
import ContenedorInfoEjercicio from "../moleculas/ContenedorInfoEjercicioIA";
import EtiquetaTitulo from "../../general/moleculas/EtiquetaTitulo";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import config from "../../../data/Configuracion.json";
import { enviarMensaje, iniciarChat } from "../../../GestorApi";

const RUTINAS_API = "https://6668e270f53957909ff9675e.mockapi.io/rutinas";
const EJERCICIOS_API = "https://6668e270f53957909ff9675e.mockapi.io/ejercicios";

const SeleccionParteCuerpoIA = () => {
  const [grupoSeleccionado, setGrupoSeleccionado] = useState(null);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);
  const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]);
  const [rutinas, setRutinas] = useState([]);
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    const obtenerRutinas = async () => {
      try {
        const response = await fetch(RUTINAS_API);
        const data = await response.json();
        setRutinas(data);
      } catch (error) {
        console.error("Error al obtener las rutinas:", error);
      }
    };

    const obtenerEjercicios = async () => {
      try {
        const response = await fetch(EJERCICIOS_API);
        const data = await response.json();
        setEjercicios(data);
      } catch (error) {
        console.error("Error al obtener los ejercicios:", error);
      }
    };

    obtenerRutinas();
    obtenerEjercicios();
  }, []);

  const añadirEjercicio = () => {
    if (ejercicioSeleccionado) {
      const ejercicioEncontrado = ejercicios.find(
        (ej) => ej.id === ejercicioSeleccionado.id
      );

      if (ejercicioEncontrado) {
        setEjerciciosSeleccionados([
          ...ejerciciosSeleccionados,
          {
            grupo: grupoSeleccionado.nombre,
            ejercicio: ejercicioEncontrado.nombre,
            descripcion: ejercicioEncontrado.descripcion,
          },
        ]);
        setEjercicioSeleccionado(null);
      }
    }
  };

  const eliminarEjercicio = (index) => {
    setEjerciciosSeleccionados(
      ejerciciosSeleccionados.filter((_, i) => i !== index)
    );
  };

  const generarPDF = () => {
    const doc = new jsPDF();
    const today = new Date();
    const formattedDate =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();

    const title = "Mi Rutina de Entrenamiento";
    const header = `${title} ${formattedDate}`;

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
        item.grupo.charAt(0).toUpperCase() + item.grupo.slice(1),
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

  const generarRutinaConGemini = async () => {
    try {
      const nuevoChat = await iniciarChat([]);

      const instruccion = `${config.instruccionGenerarRutina}
      Rutinas: ${JSON.stringify(rutinas)}
      Ejercicios: ${JSON.stringify(ejercicios)}
      `;

      const respuestaCruda = await enviarMensaje(
        nuevoChat,
        instruccion,
        config.generationConfig
      );

      const data = JSON.parse(respuestaCruda); // Parsear la respuesta JSON
      const nuevaRutina = data.rutina;

      const ejerciciosFormateados = nuevaRutina.flatMap((grupo) =>
        grupo.ejercicios.map((ejercicioId) => {
          const ejercicio = ejercicios.find((ej) => ej.id === ejercicioId);
          return {
            grupo: grupo.grupo,
            ejercicio: ejercicio ? ejercicio.nombre : "Ejercicio no encontrado",
            descripcion: ejercicio ? ejercicio.descripcion : "",
          };
        })
      );

      setEjerciciosSeleccionados(ejerciciosFormateados);
    } catch (error) {
      console.error("Error al generar la rutina:", error);
      // Manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
  };  


  return (
    <div className="contenedor-rutina">
      <EtiquetaTitulo titulo="Generar mi propia rutina" />
      <h4 className="subtitulo">¿Qué vas a trabajar el día de hoy?</h4>
      <div className="aplicacion">
        <div className="contenedor-botones">
          <ContenedorBotones>
            {rutinas.map((grupo) => (
              <Boton key={grupo.id} onClick={() => manejarSeleccionGrupo(grupo)}>
                {grupo.nombre.charAt(0).toUpperCase() + grupo.nombre.slice(1)}
              </Boton>
            ))}
          </ContenedorBotones>
        </div>
        <div className="contenido">
          <ContenedorEjercicio>
            {grupoSeleccionado &&
              grupoSeleccionado.idEjercicio.ejercicios.map((ejercicioId) => {
                const ejercicio = ejercicios.find(
                  (ej) => ej.id === ejercicioId.id
                );
                return (
                  ejercicio && (
                    <Boton
                      key={ejercicio.id}
                      onClick={() => manejarSeleccionEjercicio(ejercicio)}
                    >
                      {ejercicio.nombre}
                    </Boton>
                  )
                );
              })}
          </ContenedorEjercicio>
          <ContenedorInfoEjercicio>
            {ejercicioSeleccionado && (
              <>
                <h3>{ejercicioSeleccionado.nombre}</h3>
                <p>{ejercicioSeleccionado.descripcion}</p>
              </>
            )}
          </ContenedorInfoEjercicio>
          <div className="lista-ejercicios">
            {ejerciciosSeleccionados.length > 0 && (
              <h4>Ejercicios Seleccionados:</h4>
            )}
            <ul>
              {ejerciciosSeleccionados.map((item, index) => (
                <li key={index}>
                  {item.ejercicio} -{" "}
                  {item.grupo.charAt(0).toUpperCase() + item.grupo.slice(1)}
                  <button onClick={() => eliminarEjercicio(index)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="botones-accion">
            <Boton onClick={añadirEjercicio}>Añadir Ejercicio</Boton>
            <Boton onClick={generarPDF}>Generar PDF</Boton>
            <Boton onClick={generarRutinaConGemini}>
              Generar Rutina con IA
            </Boton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeleccionParteCuerpoIA;