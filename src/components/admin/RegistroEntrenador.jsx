import React, { useState } from "react";
import "./RegistroEntrenador.css";
import EtiquetaTitulo from "../general/EtiquetaTitulo.jsx";
import FormularioEntrenador from "./FormularioEntrenador.jsx";

function RegistroEntrenador() {
  const [mensajeModal, setMensajeModal] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleGuardarEntrenador = (datos) => {
    setMensajeModal("Entrenador registrado correctamente.");
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <div className="contenedor-registro-entrenador">
      <EtiquetaTitulo titulo="Registrar Entrenador" />
      <FormularioEntrenador guardarCambios={handleGuardarEntrenador} />
      {mensajeModal && (
        <Modal mostrar={mostrarModal} cerrar={handleCerrarModal}>
          <p>{mensajeModal}</p>
        </Modal>
      )}
    </div>
  );
}

export default RegistroEntrenador;
