import React from "react";
import Mensaje from "./Mensaje";
import "./MensajeUsuario.css"

const MensajeUsuario = ({ mensaje, nombre }) => {
    return (
        <Mensaje
            text={mensaje.text}
            role="user"
            imagen={mensaje.imagen}
            className="mensaje-persona"
        >
            <span className="nombre-persona">jUAN</span>
        </Mensaje>
    );
};

export default MensajeUsuario;