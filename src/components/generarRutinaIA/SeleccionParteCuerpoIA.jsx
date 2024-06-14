import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SeleccionParteCuerpoIA.css";
import Boton from "./BotonIA";
import ContenedorBotones from "./ContenedorBotonesIA";
import EtiquetaTitulo from "../general/EtiquetaTitulo";
import config from "../../data/Configuracion.json";
import { enviarMensaje, iniciarChat } from "../../GestorApi";

const SeleccionParteCuerpoIA = () => {
  const [gruposSeleccionados, setGruposSeleccionados] = useState([]);
  const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]);
  const [rutinas, setRutinas] = useState([]);
  const [ejercicios, setEjercicios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerRutinas = async () => {
      try {
        const response = await fetch(
          "https://6668e270f53957909ff9675e.mockapi.io/rutinas"
        );
        const data = await response.json();
        setRutinas(data);
      } catch (error) {
        console.error("Error al obtener las rutinas:", error);
      }
    };

    const obtenerEjercicios = async () => {
      try {
        const response = await fetch(
          "https://6668e270f53957909ff9675e.mockapi.io/ejercicios"
        );
        const data = await response.json();
        setEjercicios(data);
      } catch (error) {
        console.error("Error al obtener los ejercicios:", error);
      }
    };

    obtenerRutinas();
    obtenerEjercicios();
  }, []);

  const manejarSeleccionGrupo = (grupo) => {
    if (gruposSeleccionados.includes(grupo)) {
      setGruposSeleccionados(gruposSeleccionados.filter((g) => g !== grupo));
    } else {
      setGruposSeleccionados([...gruposSeleccionados, grupo]);
    }
  };

  const generarRutinaConGemini = async () => {
    if (gruposSeleccionados.length === 0) {
      alert("Selecciona al menos un grupo muscular.");
      return;
    }

    let intentos = 0;
    const maxIntentos = 3;
    let rutinaGenerada = false;

    while (intentos < maxIntentos && !rutinaGenerada) {
      try {
        const nuevoChat = await iniciarChat([]);
        const rutinasSeleccionadas = rutinas.filter((rutina) =>
          gruposSeleccionados.includes(rutina.nombre)
        );
        const ejerciciosSeleccionadosParaGemini = ejercicios.filter(
          (ejercicio) => {
            const grupoEjercicio = rutinas.find((grupo) =>
              grupo.idEjercicio.ejercicios
                .map((e) => e.id)
                .includes(ejercicio.id)
            );
            return gruposSeleccionados.includes(grupoEjercicio?.nombre);
          }
        );

        const instruccion = `${config.instruccionGenerarRutina}
          Rutinas: ${JSON.stringify(rutinasSeleccionadas)}
          Ejercicios: ${JSON.stringify(ejerciciosSeleccionadosParaGemini)}
        `;

        console.log("Instrucción completa:", instruccion);

        const respuestaCruda = await enviarMensaje(
          nuevoChat,
          instruccion,
          config.generationConfig
        );

        console.log("Respuesta cruda de Gemini:", respuestaCruda);

        let data;
        try {
          data = JSON.parse(respuestaCruda);
        } catch (error) {
          const jsonValido = respuestaCruda
            .replace(/^```json\n|\n```$/g, "")
            .replace(/'/g, '"');
          data = JSON.parse(jsonValido);
        }

        console.log("JSON válido:", data);

        if (data.rutina && Array.isArray(data.rutina)) {
          const nuevaRutina = data.rutina;

          nuevaRutina.forEach((grupo) => {
            grupo.grupo = grupo.grupo.toLowerCase();
          });
          const ejerciciosFormateados = nuevaRutina.flatMap((grupo) =>
            grupo.ejercicios.map((ejercicioId) => {
              const ejercicio = ejercicios.find((ej) => ej.id === ejercicioId);
              return {
                grupo: grupo.grupo,
                ejercicio: ejercicio
                  ? ejercicio.nombre
                  : "Ejercicio no encontrado",
                descripcion: ejercicio ? ejercicio.descripcion : "",
              };
            })
          );

          setEjerciciosSeleccionados(ejerciciosFormateados);
          rutinaGenerada = true; // La rutina se ha generado correctamente
        } else {
          console.error("Formato de respuesta de Gemini inválido");
        }
      } catch (error) {
        console.error(
          `Error al generar la rutina (intento ${intentos + 1}):`,
          error
        );
        intentos++;

        if (intentos === maxIntentos) {
          alert("Error al generar la rutina. Intente nuevamente.");
        }
      }
    }
  };

  const guardarRutina = () => {
    if (ejerciciosSeleccionados.length === 0) {
      alert("Debe agregar al menos un ejercicio antes de guardar la rutina.");
      return;
    }

    const idCliente = sessionStorage.getItem("usuarioId");
    const nombreRutina = `Rutina de ${new Date().toLocaleDateString()}`;
    const fechaCreacion = Date.now();
    const rutina = {
      idCliente,
      nombreRutina,
      fechaCreacion,
      ejercicios: ejerciciosSeleccionados,
    };

    fetch("https://6668e270f53957909ff9675e.mockapi.io/rutinasCliente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rutina),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/VerRutinas");
      });
  };

  const eliminarEjercicio = (index) => {
    const nuevosEjercicios = [...ejerciciosSeleccionados];
    nuevosEjercicios.splice(index, 1);
    setEjerciciosSeleccionados(nuevosEjercicios);
  };

  return (
    <div className="contenedor-rutina-ia">
      <EtiquetaTitulo titulo="Generar mi rutina con IA" />
      <h4 className="subtitulo-ia">¿Qué vas a trabajar el día de hoy?</h4>
      <div className="aplicacion-ia">
        <div className="contenedor-botones-ia">
          <ContenedorBotones>
            {rutinas.map((grupo) => (
              <Boton
                key={grupo.id}
                onClick={() => manejarSeleccionGrupo(grupo.nombre)}
                className={`boton-grupo ${gruposSeleccionados.includes(grupo.nombre)
                  ? "boton-grupo-seleccionado"
                  : ""
                  }`}
              >
                {grupo.nombre.charAt(0).toUpperCase() + grupo.nombre.slice(1)}
              </Boton>
            ))}
          </ContenedorBotones>
        </div>
        <div className="lista-ejercicios-ia">
          {" "}
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
        <div className="botones-accion-ia">
          <Boton onClick={generarRutinaConGemini}>Generar Rutina con IA</Boton>
          <Boton onClick={guardarRutina}>Guardar Rutina</Boton>{" "}
        </div>
      </div>
    </div>
  );
};

export default SeleccionParteCuerpoIA;
