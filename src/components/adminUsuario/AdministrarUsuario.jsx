import React, { useState, useEffect } from "react";
import "./AdministrarUsuario.css";
import EtiquetaTitulo from "../general/EtiquetaTitulo.jsx";
import Dropdown from "./Dropdown.jsx";
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
    if (usuarioSeleccionado.rol === "administrador") {
      setMensaje("No se puede eliminar un usuario con rol de administrador.");
      return;
    }

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioSeleccionado({
      ...usuarioSeleccionado,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUsuarioSeleccionado({
          ...usuarioSeleccionado,
          foto: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGuardarCambios = async () => {
    try {
      await axios.put(
        `https://6668e270f53957909ff9675e.mockapi.io/cliente/${usuarioSeleccionado.id}`,
        usuarioSeleccionado
      );
      setMensaje("Usuario actualizado correctamente.");
      setUsuarios(
        usuarios.map((usuario) =>
          usuario.id === usuarioSeleccionado.id ? usuarioSeleccionado : usuario
        )
      );
    } catch (error) {
      console.error("Error updating usuario:", error);
      setMensaje("Error al actualizar el usuario.");
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
          labelKey="email"
        />
        {usuarioSeleccionado && (
          <div className="acciones-usuario">
            <form className="form-usuario">
              {usuarioSeleccionado.foto && (
                <img
                  src={usuarioSeleccionado.foto}
                  alt="Foto de perfil"
                  className="foto-perfil"
                />
              )}
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={usuarioSeleccionado.nombre}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Fecha de Nacimiento:</label>
                <input
                  type="date"
                  name="fechaNacimiento"
                  value={usuarioSeleccionado.fechaNacimiento}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Dirección:</label>
                <input
                  type="text"
                  name="direccion"
                  value={usuarioSeleccionado.direccion}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Número de Celular:</label>
                <input
                  type="text"
                  name="numeroCelular"
                  value={usuarioSeleccionado.numeroCelular}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={usuarioSeleccionado.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>CI:</label>
                <input
                  type="text"
                  name="ci"
                  value={usuarioSeleccionado.ci}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Sexo:</label>
                <select
                  name="sexo"
                  value={usuarioSeleccionado.sexo}
                  onChange={handleChange}
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label>Foto:</label>
                <input
                  type="file"
                  name="foto"
                  onChange={handleFileChange}
                />
              </div>
              <div className="boton-guardar">
                <button type="button" onClick={handleGuardarCambios}>Guardar Cambios</button>
              </div>
              <div className="boton-eliminar">
                <button type="button" onClick={handleEliminarUsuario}>Eliminar</button>
              </div>
            </form>
            {mensaje && <p className="mensaje">{mensaje}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdministrarUsuario;
