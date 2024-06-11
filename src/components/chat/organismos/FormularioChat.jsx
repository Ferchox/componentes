import React from "react";
import Input from "../atomos/Input";
import Boton from "../atomos/Button";
import "./FormularioChat.css"

const FormularioChat = ({ input, setInput, manejarGeneracion, escribiendo, config }) => {
  return (
    <form className="chat-input" onSubmit={manejarGeneracion}>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={config.inputPlaceholder}
        aria-label="Campo para escribir mensaje"
        disabled={escribiendo}
      />
      <Boton type="submit">Enviar</Boton>
    </form>
  );
};

export default FormularioChat;