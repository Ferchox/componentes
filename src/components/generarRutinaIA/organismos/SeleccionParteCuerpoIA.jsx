import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SeleccionParteCuerpoIA.css";
import Boton from "../atomos/BotonIA";
import ContenedorBotones from "../moleculas/ContenedorBotonesIA";
import ContenedorEjercicio from "../moleculas/ContenedorEjercicioIA";
import ContenedorInfoEjercicio from "../moleculas/ContenedorInfoEjercicioIA";
import EtiquetaTitulo from "../../general/moleculas/EtiquetaTitulo";
import config from "../../../data/Configuracion.json";
import { enviarMensaje, iniciarChat } from "../../../GestorApi";

const SeleccionParteCuerpoIA = () => {
  const [grupoSeleccionado, setGrupoSeleccionado] = useState(null);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);
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

  const getEjerciciosByGrupo = (grupo) => {
    const selectedGroup = rutinas.find((g) => g.nombre === grupo);
    if (!selectedGroup) return [];
    return selectedGroup.idEjercicio.ejercicios.map((e) =>
      ejercicios.find((ej) => ej.id === e.id)
    );
  };
  const añadirEjercicio = () => {
    if (ejercicioSeleccionado) {
      setEjerciciosSeleccionados([
        ...ejerciciosSeleccionados,
        {
          grupo: grupoSeleccionado,
          ejercicio: ejercicioSeleccionado.nombre,
          descripcion: ejercicioSeleccionado.descripcion,
        },
      ]);
      setEjercicioSeleccionado(null);
    }
  };

  const eliminarEjercicio = (index) => {
    setEjerciciosSeleccionados(
      ejerciciosSeleccionados.filter((_, i) => i !== index)
    );
  };

  const manejarSeleccionGrupo = (grupo) => {
    setGrupoSeleccionado(grupo);
    setEjercicioSeleccionado(null);
  };

  const manejarSeleccionEjercicio = (ejercicio) => {
    setEjercicioSeleccionado(ejercicio);
  };

  const generarRutinaConGemini = async () => {
    let intentos = 0;
    const maxIntentos = 3;
    let rutinaGenerada = false;

    while (intentos < maxIntentos && !rutinaGenerada) {
      try {
        const nuevoChat = await iniciarChat([]);

        const instruccion = `${config.instruccionGenerarRutina}
      Rutinas: ${JSON.stringify(rutinas)}
      Ejercicios: ${JSON.stringify(ejercicios)}
      `;

        console.log("Instrucción completa:", instruccion);

        const respuestaCruda = await enviarMensaje(
          nuevoChat,
          instruccion,
          config.generationConfig
        );

        console.log("Respuesta cruda de Gemini:", respuestaCruda);

        const jsonValido = respuestaCruda
          .replace(/^```json\n|\n```$/g, "")
          .replace(/'/g, '"');

        console.log("JSON válido:", jsonValido);

        const data = JSON.parse(jsonValido);
        const nuevaRutina = data.rutina;

        data.rutina.forEach((grupo) => {
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

  return (
    <div className="contenedor-rutina">
      <EtiquetaTitulo titulo="Generar mi propia rutina" />
      <h4 className="subtitulo">¿Qué vas a trabajar el día de hoy?</h4>
      <div className="aplicacion">
        <div className="contenedor-botones">
          <ContenedorBotones>
            {rutinas.map((grupo) => (
              <Boton
                key={grupo.id}
                onClick={() => manejarSeleccionGrupo(grupo.nombre)}
              >
                {grupo.nombre.charAt(0).toUpperCase() + grupo.nombre.slice(1)}
              </Boton>
            ))}
          </ContenedorBotones>
        </div>
        <div className="contenido">
          <ContenedorEjercicio>
            {grupoSeleccionado &&
              getEjerciciosByGrupo(grupoSeleccionado).map((ejercicio) => (
                <Boton
                  key={ejercicio.id}
                  onClick={() => manejarSeleccionEjercicio(ejercicio)}
                >
                  {ejercicio.nombre}
                </Boton>
              ))}
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
            <Boton onClick={generarRutinaConGemini}>
              Generar Rutina con IA
            </Boton>
            <Boton onClick={guardarRutina}>Guardar Rutina</Boton>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeleccionParteCuerpoIA;
