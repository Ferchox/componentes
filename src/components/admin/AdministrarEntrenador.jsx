import React, { useState, useEffect } from "react";
import axios from 'axios';
import SelectorMultiple from './SelectorMultiple';
import "./AdministrarEntrenador.css";
import EtiquetaTitulo from "../general/EtiquetaTitulo.jsx";
import Dropdown from "./Dropdown.jsx";
import Boton from "./Boton.jsx";
import Modal from "./Modal.jsx";
import FormularioEntrenador from "./FormularioEntrenador.jsx";

function AdministrarEntrenador() {
  const [entrenadores, setEntrenadores] = useState([]);
  const [entrenadorSeleccionado, setEntrenadorSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    const fetchEntrenadores = async () => {
      try {
        const response = await axios.get('https://6668e270f53957909ff9675e.mockapi.io/entrenadores');
        setEntrenadores(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchEntrenadores();
  }, []);

  const handleSeleccionarEntrenador = (entrenador) => {
    setEntrenadorSeleccionado(entrenador);
    setSelectedValues(Object.values(entrenador.especialidad || {}));
  };

  const handleEditarEntrenador = () => {
    setModoEdicion(true);
    setMostrarModal(true);
  };

  const handleEliminarEntrenador = async () => {
    if (window.confirm("¿Está seguro de que desea eliminar este entrenador?")) {
      try {
        await axios.delete(`https://6668e270f53957909ff9675e.mockapi.io/entrenadores/${entrenadorSeleccionado.id}`);
        setEntrenadores(
          entrenadores.filter(
            (entrenador) => entrenador.id !== entrenadorSeleccionado.id
          )
        );
        setEntrenadorSeleccionado(null);
        setMensajeModal("Entrenador eliminado correctamente.");
        setMostrarModal(true);
      } catch (error) {
        console.error('Error deleting trainer:', error);
        setMensajeModal("Error eliminando el entrenador.");
        setMostrarModal(true);
      }
    }
  };

  const handleGuardarCambios = async (datos) => {
    if (modoEdicion) {
      try {
        const response = await axios.put(`https://6668e270f53957909ff9675e.mockapi.io/entrenadores/${entrenadorSeleccionado.id}`, datos);
        setEntrenadores(
          entrenadores.map((entrenador) =>
            entrenador.id === entrenadorSeleccionado.id
              ? { ...entrenador, ...response.data }
              : entrenador
          )
        );
      } catch (error) {
        console.error('Error updating trainer:', error);
        setMensajeModal("Error actualizando el entrenador.");
        setMostrarModal(true);
        return;
      }
    } else {
      try {
        const response = await axios.post('https://6668e270f53957909ff9675e.mockapi.io/entrenadores', datos);
        setEntrenadores([...entrenadores, response.data]);
      } catch (error) {
        console.error('Error creating trainer:', error);
        setMensajeModal("Error creando el entrenador.");
        setMostrarModal(true);
        return;
      }
    }
    setEntrenadorSeleccionado(null);
    setModoEdicion(false);
    setMostrarModal(false); // Cerrar el modal de edición
    setMensajeModal("Cambios guardados correctamente.");
    setMostrarModal(true); // Mostrar mensaje de confirmación
  };

  const handleCerrarModal = () => {
    setMostrarModal(false);
    setModoEdicion(false);
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
          mostrar={mostrarModal && modoEdicion}
          cerrar={handleCerrarModal}
          titulo={modoEdicion ? "Editar Entrenador" : "Nuevo Entrenador"}
        >
          <FormularioEntrenador
            entrenador={modoEdicion ? entrenadorSeleccionado : null}
            guardarCambios={handleGuardarCambios}
          />
          <SelectorMultiple
            options={["Pantorrillas", "Pierna", "Espalda", "Brazo", "Pecho", "Abdomen", "Gluteos", "Cardio", "Flexibilidad"]}
            selectedValues={selectedValues}
            onChange={setSelectedValues}
          />
        </Modal>
        {mensajeModal && (
          <Modal mostrar={mostrarModal && !modoEdicion} cerrar={handleCerrarModal}>
            <p>{mensajeModal}</p>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default AdministrarEntrenador;
