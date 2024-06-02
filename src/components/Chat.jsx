import React, { useState, useEffect } from 'react';
import { iniciarChat, enviarMensaje } from '../geminiApi';
import './Chat.css';

const Chat = () => {
    const [mensajes, setMensajes] = useState([
        {
            role: 'model',
            text: '¡Hola! Soy tu asistente de ejercicios y postura. ¿En qué puedo ayudarte hoy?',
        },
    ]);
    const [input, setInput] = useState('');
    const [chat, setChat] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const iniciarConversacion = async () => {
            try {
                const nuevoChat = await iniciarChat([]);
                setChat(nuevoChat);
            } catch (error) {
                console.error('Error al iniciar la conversación:', error);
                setError('Hubo un problema al iniciar la conversación. Intenta nuevamente.');
            }
        };
        iniciarConversacion();
    }, []);

    const manejarEnvio = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const nuevoMensaje = { role: 'user', text: input };
        setMensajes((prevMensajes) => [...prevMensajes, nuevoMensaje]);
        setInput('');

        const generationConfig = {
            stopSequences: ["\n", "."],
            maxOutputTokens: 500,
            temperature: 0.7,
            topP: 0.9,
            topK: 40,
        };

        const instruccion = `
        Eres un entrenador personal especializado en ejercicios de fuerza y acondicionamiento que esta en un gymm llamado 'Territorio F4:13'. Responde a la siguiente pregunta del usuario:
        Usuario: ${input}
        Respuesta:
        `;

        try {
            const respuesta = await enviarMensaje(chat, instruccion, generationConfig);
            await respuesta;
            setMensajes((prevMensajes) => [...prevMensajes, { role: 'model', text: respuesta }]);
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            setError('Hubo un problema al enviar el mensaje. Intenta nuevamente.');
        }
    };

    const procesarMensaje = (texto) => {
        const partes = texto.split(/(\*\*[^*]+\*\*)/);
        return partes.map((parte, index) => {
            if (parte.startsWith('**') && parte.endsWith('**')) {
                return <strong key={index}>{parte.slice(2, -2)}</strong>;
            }
            return <span key={index}>{parte}</span>;
        });
    };

    return (
        <div className="chat-container">
            <div className="mensajes">
                {mensajes.map((msg, index) => (
                    <div key={index} className={`mensaje ${msg.role}`}>
                        {procesarMensaje(msg.text)}
                    </div>
                ))}
            </div>
            <form onSubmit={manejarEnvio}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    aria-label="Campo para escribir mensaje"
                />
                <button type="submit">Enviar</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default Chat;
