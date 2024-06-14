import React, { useState, useEffect } from "react";
import "./AdministrarEntrenador.css";
import EtiquetaTitulo from "../../general/moleculas/EtiquetaTitulo";
import Dropdown from "../moleculas/Dropdown.jsx";
import Boton from "../moleculas/Boton.jsx";
import Modal from "../moleculas/Modal.jsx";
import FormularioEntrenador from "../moleculas/FormularioEntrenador";

function AdministrarEntrenador() {
  const [entrenadores, setEntrenadores] = useState([
    {
      id: 1,
      nombre: "Ana Gómez",
      horario: "Lunes a Viernes - 5pm a 7pm",
      descripcion: "Experta en fortalecimiento de pantorrillas.",
      especialidad: ["Pantorrillas", "Pierna"],
    },
    {
      id: 2,
      nombre: "Juan Pérez",
      horario: "Martes y Jueves - 9am a 11am",
      descripcion: "Especialista en entrenamiento funcional.",
      especialidad: ["Fuerza", "Flexibilidad", "Cardio"],
    },
  ]);
  const [entrenadorSeleccionado, setEntrenadorSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  const handleSeleccionarEntrenador = (entrenador) => {
    setEntrenadorSeleccionado(entrenador);
  };

  const handleEditarEntrenador = () => {
    setModoEdicion(true);
    setMostrarModal(true);
  };

  const handleEliminarEntrenador = () => {
    if (window.confirm("¿Está seguro de que desea eliminar este entrenador?")) {
      setEntrenadores(
        entrenadores.filter(
          (entrenador) => entrenador.id !== entrenadorSeleccionado.id
        )
      );
      setEntrenadorSeleccionado(null);
      setMensajeModal("Entrenador eliminado correctamente.");
      setMostrarModal(true);
    }
  };

  const handleGuardarCambios = (datos) => {
    if (modoEdicion) {
      setEntrenadores(
        entrenadores.map((entrenador) =>
          entrenador.id === entrenadorSeleccionado.id
            ? { ...entrenador, ...datos }
            : entrenador
        )
      );
    } else {
      const nuevoId = Math.max(...entrenadores.map((e) => e.id)) + 1;
      setEntrenadores([...entrenadores, { ...datos, id: nuevoId }]);
    }
    setEntrenadorSeleccionado(null);
    setModoEdicion(false);
    setMostrarModal(false);
    setMensajeModal("Cambios guardados correctamente.");
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <div className="contenedor-administrar">
      <EtiquetaTitulo titulo="Administrar Entrenador" />
      <div className="contenedor-administrar-entrenador">
        <Dropdown
          options={entrenadores}
          onChange={handleSeleccionarEntrenador}
          placeholder="Selecciona un entrenador"
          labelKey="nombre"
        />
        {entrenadorSeleccionado && (
          <div className="acciones-entrenador">
            <Boton onClick={handleEditarEntrenador}>Editar</Boton>
            <Boton onClick={handleEliminarEntrenador}>Eliminar</Boton>
          </div>
        )}
        <Modal
          mostrar={mostrarModal}
          cerrar={handleCerrarModal}
          titulo={modoEdicion ? "Editar Entrenador" : "Nuevo Entrenador"}
        >
          <FormularioEntrenador
            entrenador={modoEdicion ? entrenadorSeleccionado : null}
            guardarCambios={handleGuardarCambios}
          />
        </Modal>
        {mensajeModal && (
          <Modal mostrar={mostrarModal} cerrar={handleCerrarModal}>
            <p>{mensajeModal}</p>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default AdministrarEntrenador;
