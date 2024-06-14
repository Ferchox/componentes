import React, { useState, useEffect } from "react";
import "./AdministrarUsuario.css";
import EtiquetaTitulo from "../general/EtiquetaTitulo.jsx";
import Dropdown from "./Dropdown.jsx";
import Boton from "./Boton.jsx";
import axios from "axios";

function AdministrarUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(
          "https://6668e270f53957909ff9675e.mockapi.io/cliente"
        );
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error fetching usuarios:", error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleSeleccionarUsuario = (usuario) => {
    setUsuarioSeleccionado(usuario);
  };

  const handleEliminarUsuario = async () => {
    if (window.confirm("¿Está seguro de que desea eliminar este usuario?")) {
      try {
        await axios.delete(
          `https://6668e270f53957909ff9675e.mockapi.io/cliente/${usuarioSeleccionado.id}`
        );
        setUsuarios(
          usuarios.filter((usuario) => usuario.id !== usuarioSeleccionado.id)
        );
        setUsuarioSeleccionado(null);
        setMensaje("Usuario eliminado correctamente.");
      } catch (error) {
        console.error("Error deleting usuario:", error);
        setMensaje("Error al eliminar el usuario.");
      }
    }
  };

  return (
    <div className="contenedor-administrar">
      <EtiquetaTitulo titulo="Administrar Usuario" />
      <div className="contenedor-administrar-usuario">
        <Dropdown
          options={usuarios}
          onChange={handleSeleccionarUsuario}
          placeholder="Selecciona un usuario"
          labelKey="nombre"
        />
        {usuarioSeleccionado && (
          <div className="acciones-usuario">
            <Boton onClick={handleEliminarUsuario}>Eliminar</Boton>
          </div>
        )}
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>
    </div>
  );
}

export default AdministrarUsuario;
