import React, { useState, useEffect } from "react";
import { iniciarChat, enviarMensaje } from "../../GestorApi";
import axios from 'axios';
import "./ChatApi.css";
import config from "../../data/Configuracion.json";
import FormularioChat from './FormularioChat';
import HistorialChat from './HistorialChat';

function Chat() {
  const [mensajes, setMensajes] = useState(config.mensajesIniciales);
  const [input, setInput] = useState("");
  const [estaCargando, setEstaCargando] = useState(false);
  const [error, setError] = useState("");
  const [chat, setChat] = useState(null);
  const [escribiendo, setEscribiendo] = useState(false);
  const [perfil, setPerfil] = useState(null);
  const [ultimaEvaluacion, setUltimaEvaluacion] = useState(null);

  useEffect(() => {
    const usuarioGuardado = sessionStorage.getItem('usuario');
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      setPerfil(usuario);
    }
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

  useEffect(() => {
    const obtenerUltimaEvaluacion = async () => {
      const usuarioId = sessionStorage.getItem('usuarioId');
      if (usuarioId) {
        try {
          const response = await axios.get('https://6668e270f53957909ff9675e.mockapi.io/evolucion');
          const data = response.data;
          const userData = data.find(item => item.idCliente === parseInt(usuarioId));
          if (userData) {
            const fechas = Object.values(userData.fecha);
            const ultimaFecha = Math.max(...fechas);
            const ultimaFechaKey = Object.keys(userData.fecha).find(key => userData.fecha[key] === ultimaFecha);

            const ultimaEvaluacion = {
              fecha: new Date(ultimaFecha * 1000).toLocaleDateString(),
              pecho: userData.pecho[`pecho${ultimaFechaKey.slice(-1)}`],
              grasaPorcentaje: userData.grasaPorcentaje[`grasa${ultimaFechaKey.slice(-1)}`],
              abdomen: userData.abdomen[`abdomen${ultimaFechaKey.slice(-1)}`],
              pierna: userData.pierna[`pierna${ultimaFechaKey.slice(-1)}`],
              pesoKg: userData.pesoKg[`peso${ultimaFechaKey.slice(-1)}`],
              grasaVisceral: userData.grasaVisceral[`grasaVisceral${ultimaFechaKey.slice(-1)}`],
              imc: userData.imc[`imc${ultimaFechaKey.slice(-1)}`]
            };
            setUltimaEvaluacion(ultimaEvaluacion);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    obtenerUltimaEvaluacion();
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

    const { diaSemana, dia, mes, año, hora, minutos } = obtenerFechaHoraActual();
    const nuevoMensaje = {
      role: "user",
      text: input,
      diaSemana,
      dia,
      mes,
      año,
      hora,
      minutos,
      imagen: perfil ? perfil.foto : "",
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

    const ultimaEvaluacionTexto = ultimaEvaluacion ? `
      Última evaluación del usuario:
      Fecha: ${ultimaEvaluacion.fecha}
      Pecho: ${ultimaEvaluacion.pecho ?? 'N/A'} cm
      Grasa Porcentaje: ${ultimaEvaluacion.grasaPorcentaje ?? 'N/A'} %
      Abdomen: ${ultimaEvaluacion.abdomen ?? 'N/A'} cm
      Pierna: ${ultimaEvaluacion.pierna ?? 'N/A'} cm
      Peso: ${ultimaEvaluacion.pesoKg ?? 'N/A'} kg
      Grasa Visceral: ${ultimaEvaluacion.grasaVisceral ?? 'N/A'} %
      IMC: ${ultimaEvaluacion.imc ?? 'N/A'} kg/m²
    ` : '';

    const instruccion = `
      ${config.instruccionBase}
      Usuario: mi nombre es => ${perfil ? perfil.nombre : 'Usuario'}
      ${ultimaEvaluacionTexto}
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
    <div className="contenedor-chat">
      <HistorialChat mensajes={mensajes} escribiendo={escribiendo} className="historial-chat" />
      <FormularioChat input={input} setInput={setInput} manejarGeneracion={manejarGeneracion} escribiendo={escribiendo} config={config} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Chat;
