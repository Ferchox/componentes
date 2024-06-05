import React from "react";
import Mensaje from "./Mensaje";
import ReactMarkdown from "react-markdown";
import "./MensajeIA.css"

const MensajeIA = ({ mensaje }) => {
  return (
    <Mensaje
      text={<ReactMarkdown>{mensaje.text}</ReactMarkdown>}
      role="model"
      imagen={mensaje.imagen}
      className="mensaje-bot"
    />
  );
};

export default MensajeIA;
