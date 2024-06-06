import React, { useState, useEffect } from "react";
import { iniciarChat, enviarMensaje } from "../../../GestorApi";
import "./Chat.css";
import config from "../../../data/Configuracion.json";
import FormularioChat from "../organismos/FormularioChat";
import HistorialChat from "../organismos/HistorialChat";
import Cabecera from "../../general/organismos/Cabecera";
import PiePagina from "../../general/organismos/PiePagina";
import DropdownPerfil from "../../general/moleculas/DropdownPerfil";
import MenuOpciones from "../../general/moleculas/MenuOpciones";
import BarraNavegacion from "../../general/organismos/BarraNavegacion";

function Chat() {
  const [mensajes, setMensajes] = useState(config.mensajesIniciales);
  const [input, setInput] = useState("");
  const [estaCargando, setEstaCargando] = useState(false);
  const [error, setError] = useState("");
  const [chat, setChat] = useState(null);
  const [escribiendo, setEscribiendo] = useState(false);
  const [imagenAleatoria, setImagenAleatoria] = useState("");

  useEffect(() => {
    const obtenerImagenAleatoria = async () => {
      try {
        const respuesta = await fetch("https://picsum.photos/200");
        setImagenAleatoria(respuesta.url);
      } catch (error) {
        console.error("Error al obtener imagen aleatoria", error);
      }
    };

    obtenerImagenAleatoria();
  }, []);

  useEffect(() => {
    const iniciarConversacion = async () => {
      try {
        const nuevoChat = await iniciarChat([]);
        setChat(nuevoChat);
      } catch (error) {
        setError(config.errores.iniciarConversacion);
        console.error("Error al iniciar conversación", error);
      }
    };
    iniciarConversacion();
  }, []);

  const obtenerFechaHoraActual = () => {
    const fecha = new Date();
    const diaSemana = fecha.toLocaleDateString("es-ES", { weekday: "long" });
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const año = fecha.getFullYear();
    const hora = String(fecha.getHours()).padStart(2, "0");
    const minutos = String(fecha.getMinutes()).padStart(2, "0");
    return { diaSemana, dia, mes, año, hora, minutos };
  };

  const manejarGeneracion = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    console.clear();

    const { diaSemana, dia, mes, año, hora, minutos } =
      obtenerFechaHoraActual();
    const nuevoMensaje = {
      role: "user",
      text: input,
      diaSemana,
      dia,
      mes,
      año,
      hora,
      minutos,
      imagen: imagenAleatoria,
    };

    setMensajes((prevMensajes) => {
      const nuevosMensajes = [...prevMensajes, nuevoMensaje];
      if (nuevosMensajes.length > 9) {
        nuevosMensajes.shift();
      }
      return nuevosMensajes;
    });

    setInput("");
    setEstaCargando(true);
    setEscribiendo(true);

    const historial = mensajes
      .map((mensaje) => `Role: ${mensaje.role}, Text: ${mensaje.text}`)
      .join("\n");
    const instruccion = `
      ${config.instruccionBase}
      Usuario: ${input}
      Historial de la conversación:
      ${historial}
      Fecha y hora de este mensaje:
      Día de la semana: ${diaSemana}, Día: ${dia}, Mes: ${mes}, Año: ${año}, Hora: ${hora}:${minutos}
      Respuesta:
    `;

    console.log(instruccion);

    let intentos = 0;
    let mensajeEnviado = false;
    setError("");

    while (intentos < 4 && !mensajeEnviado) {
      try {
        const textoRespuesta = await enviarMensaje(
          chat,
          instruccion,
          config.generationConfig
        );

        const mensajeIA = {
          role: "model",
          text: textoRespuesta,
          diaSemana,
          dia,
          mes,
          año,
          hora,
          minutos,
          imagen:
            "https://vilmanunez.com/wp-content/uploads/2017/07/curso-bots-facebook.png",
        };
        setMensajes((prevMensajes) => {
          const nuevosMensajes = [...prevMensajes, mensajeIA];
          if (nuevosMensajes.length > 30) {
            nuevosMensajes.shift();
          }
          return nuevosMensajes;
        });
        mensajeEnviado = true;
      } catch (error) {
        intentos++;
        if (intentos === 4) {
          setMensajes((prevMensajes) =>
            prevMensajes.filter((msg) => msg !== nuevoMensaje)
          );
          const mensajeBot = {
            role: "model",
            text: "Parece que hay un problema con ese tema. ¿Podemos hablar de otra cosa?",
            diaSemana,
            dia,
            mes,
            año,
            hora,
            minutos,
            imagen:
              "https://vilmanunez.com/wp-content/uploads/2017/07/curso-bots-facebook.png",
          };
          setMensajes((prevMensajes) => {
            const nuevosMensajes = [...prevMensajes, mensajeBot];
            if (nuevosMensajes.length > 30) {
              nuevosMensajes.shift();
            }
            return nuevosMensajes;
          });

          setError(config.errores.enviarMensaje);
          console.error("Error al enviar mensaje", error);
        }
      }
    }

    setEstaCargando(false);
    setEscribiendo(false);
  };

  return (
    <>
      <Cabecera />
      <BarraNavegacion/>
      <div className="contenedor-chat">
        <HistorialChat mensajes={mensajes} escribiendo={escribiendo} />
        <FormularioChat
          input={input}
          setInput={setInput}
          manejarGeneracion={manejarGeneracion}
          escribiendo={escribiendo}
          config={config}
        />
        {error && <div className="error">{error}</div>}
      </div>
      <PiePagina />
    </>
  );
}

export default Chat;
