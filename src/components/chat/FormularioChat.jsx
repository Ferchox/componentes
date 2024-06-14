import React from "react";

const FormularioChat = ({ input, setInput, manejarGeneracion, escribiendo, config }) => {
  return (
    <form className="chat-input" onSubmit={manejarGeneracion}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={config.inputPlaceholder} aria-label="Campo para escribir mensaje" disabled={escribiendo} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioChat;