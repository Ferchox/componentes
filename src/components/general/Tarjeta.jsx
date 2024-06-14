import React from "react";
import PropTypes from "prop-types";
import "./Tarjeta.css";

const Tarjeta = ({ imagen, descripcion }) => {
    return (
        <div className="tarjeta">
            <img src={imagen} alt="Imagen de tarjeta" className="imagen-tarjeta" />
            <div className="contenido-tarjeta">
                <p className="descripcion-tarjeta">{descripcion}</p>
            </div>
        </div>
    );
};

Tarjeta.propTypes = {
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};

export default Tarjeta;
