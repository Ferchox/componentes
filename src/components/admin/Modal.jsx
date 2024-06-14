import React from "react";
import "./Modal.css";

const Modal = ({ mostrar, cerrar, titulo, children }) => {
  if (!mostrar) {
    return null;
  }

  return (
    <>
      <div className="modal-header">
        <h3>{titulo}</h3>
      </div>
      <button className="modal-close" onClick={cerrar}>
        Cancelar
      </button>
      <div className="modal-body">{children}</div>
    </>
  );
};

export default Modal;
