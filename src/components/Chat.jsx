import React, { useState, useEffect } from "react";
import { iniciarChat, enviarMensaje } from "../GeminiApi";
import "./Chat.css";
import config from "../data/Configuracion.json";

function Chat() {
    const [mensajes, setMensajes] = useState(config.mensajesIniciales);
    const [input, setInput] = useState("");
    const [estaCargando, setEstaCargando] = useState(false);
    const [error, setError] = useState("");
    const [chat, setChat] = useState(null);
    const [escribiendo, setEscribiendo] = useState(false);

    useEffect(() => {
        const iniciarConversacion = async () => {
            try {
                const nuevoChat = await iniciarChat([]);
                setChat(nuevoChat);
            } catch (error) {
                console.error("Error al iniciar la conversación:", error);
                setError(config.errores.iniciarConversacion);
            }
        };
        iniciarConversacion();
    }, []);

    const manejarGeneracion = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const nuevoMensaje = { role: "user", text: input };
        setMensajes((prevMensajes) => [...prevMensajes, nuevoMensaje]);
        setInput("");
        setEstaCargando(true);
        setEscribiendo(true);

        const historial = mensajes
            .map((mensaje) => `Role: ${mensaje.role}, Text: ${mensaje.text}`)
            .join("\n");
        const instruccion = `
        ${config.instruccionBase}
        Usuario: ${input}
        Historial de conversación:
        ${historial}
        Respuesta:
        `;

        try {
            const textoRespuesta = await enviarMensaje(chat, instruccion, config.generationConfig);
            setMensajes((prevMensajes) => [
                ...prevMensajes,
                { role: "model", text: textoRespuesta },
            ]);
        } catch (error) {
            console.error("Error al generar contenido:", error);
            setError(config.errores.enviarMensaje);
        } finally {
            setEstaCargando(false);
            setEscribiendo(false);
        }
    };

    const procesarMensaje = (texto) => {
        const partes = texto.split(/(\*\*[^*]+\*\*)/);
        return partes.map((parte, index) => {
            if (parte.startsWith("**") && parte.endsWith("**")) {
                return <strong key={index}>{parte.slice(2, -2)}</strong>;
            }
            return <span key={index}>{parte}</span>;
        });
    };

    return (
        <div className="contenedor">
            <div className="chat-header">Asesoramiento</div>
            <div className="chat-mensajes">
                {mensajes.map((msg, index) => (
                    <div key={index} className={`mensaje ${msg.role}`}>
                        {procesarMensaje(msg.text)}
                    </div>
                ))}
                {escribiendo && (
                    <div className="mensaje mensaje-bot">
                        <span>Escribiendo...</span>
                    </div>
                )}
            </div>
            <form className="chat-input" onSubmit={manejarGeneracion}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={config.inputPlaceholder}
                    aria-label="Campo para escribir mensaje"
                />
                <button type="submit">Enviar</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Chat;