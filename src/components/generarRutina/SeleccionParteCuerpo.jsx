import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SeleccionParteCuerpo.css";
import ContenedorBotones from "./ContenedorBotones";
import ContenedorEjercicio from "./ContenedorEjercicio";
import ContenedorInfoEjercicio from "./ContenedorInfoEjercicio";
import EtiquetaTitulo from "../general/EtiquetaTitulo";
import EtiquetaSubTitulo from "../general/EtiquetaSubTitulo";

const SeleccionParteCuerpo = () => {
  const [grupos, setGrupos] = useState([]);
  const [ejercicios, setEjercicios] = useState([]);
  const [grupoSeleccionado, setGrupoSeleccionado] = useState(null);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);
  const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://6668e270f53957909ff9675e.mockapi.io/rutinas")
      .then((response) => response.json())
      .then((data) => setGrupos(data));

    fetch("https://6668e270f53957909ff9675e.mockapi.io/ejercicios")
      .then((response) => response.json())
      .then((data) => setEjercicios(data));
  }, []);

  const getEjerciciosByGrupo = (grupo) => {
    const selectedGroup = grupos.find((g) => g.nombre === grupo);
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

  const guardarRutina = () => {
    if (ejerciciosSeleccionados.length === 0) {
      alert("Debe agregar al menos un ejercicio antes de guardar la rutina.");
      return;
    }

    const idCliente = sessionStorage.getItem('usuarioId');
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
      <EtiquetaSubTitulo titulo="¿Qué vas a trabajar el día de hoy?" />
      <div className="aplicacion">
        <div className="contenedor-botones">
          <ContenedorBotones>
            {grupos.map((grupo) => (
              <button key={grupo.id} onClick={() => manejarSeleccionGrupo(grupo.nombre)}>
                {grupo.nombre.charAt(0).toUpperCase() + grupo.nombre.slice(1)}
              </button>
            ))}
          </ContenedorBotones>
        </div>
        <div className="contenido">
          <ContenedorEjercicio>
            {grupoSeleccionado &&
              getEjerciciosByGrupo(grupoSeleccionado).map((ejercicio) => (
                <button
                  key={ejercicio.id}
                  onClick={() => manejarSeleccionEjercicio(ejercicio)}
                >
                  {ejercicio.nombre}
                </button>
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
            <button onClick={añadirEjercicio}>Añadir Ejercicio</button>
            <button onClick={guardarRutina}>Guardar Rutina</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeleccionParteCuerpo;
