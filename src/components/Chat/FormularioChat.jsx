import React from "react";
import Input from "./atoms/Input";
import Button from "./atoms/Button";

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
      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default FormularioChat;