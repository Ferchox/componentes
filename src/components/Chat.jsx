import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

import "./Chat.css";

function App() {
  const [messages, setMessages] = useState([
    {
      text: 'Este es un chatbot de asesoramiento... ¡Úsala con responsabilidad!',
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    const inputText = document.getElementById('inputText').value;
    setMessages([...messages, { text: inputText, isUser: true }]);
    document.getElementById('inputText').value = '';
    setIsLoading(true);

    const API_KEY = 'AIzaSyC5wwZ2NCDXuMuArJWpXYaf43tEeEogQ5w'; 
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-latest' });

    try {
      const result = await model.generateContent(inputText);
      const responseText = await result.response.text();

      const htmlResponse = responseText
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/\*_(.*?)_*./g, '<em>$1</em>')
        .replaceAll(/^\s*\*\s*(.*?)\s*$/gm, '<li>$1</li>')
        .replace(/^(.*?)\n\s*$/gm, '<p>$1</p>');

      setMessages([
        ...messages,
        { text: inputText, isUser: true },
        { text: htmlResponse, isUser: false },
      ]);
    } catch (error) {
      console.error('Error al generar contenido:', error);
      setMessages([
        ...messages,
        { text: 'Error al procesar la solicitud', isUser: false },
      ]);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="container">
      <div className="chat-header">Asesoramiento</div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.isUser ? "user-message" : "bot-message"
            }`}
          >
            <div dangerouslySetInnerHTML={{ __html: message.text }} />
          </div>
        ))}
        {isLoading && ( 
          <div className="message bot-message">
            <div className="loading-icon" />
          </div>
        )}
      </div>
      <div className="chat-input">
        <input type="text" id="inputText" placeholder="Escribe en que puedo ayudarte" />
        <button id="generateButton" onClick={handleGenerate}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default App;
