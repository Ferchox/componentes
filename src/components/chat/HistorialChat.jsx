import React from "react";
import MensajeUsuario from "./MensajeUsuario";
import MensajeIA from "./MensajeIA";
import "./HistorialChat.css"

const HistorialChat = ({ mensajes, escribiendo }) => {
  return (
    <div className="chat-mensajes">
      {mensajes.map((msg, index) => (
        <div key={index} className={`mensaje-contenedor ${msg.role}`}>
          {msg.role === "model" ? (
            
            <MensajeIA mensaje={msg} />
          ) : (
            <MensajeUsuario mensaje={msg} />
          )}
        </div>
      ))}
      {escribiendo && (
        <div className="mensaje mensaje-bot escribiendo">
          <span>Escribiendo.</span>
        </div>
      )}
    </div>
  );
};

export default HistorialChat;
