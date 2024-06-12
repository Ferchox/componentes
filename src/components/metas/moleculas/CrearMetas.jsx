import React, { useState } from "react";
import "./CrearMeta.css";

function CrearMeta({ onCreate }) {
    const [meta, setMeta] = useState("");
    const [fechaLimite, setFechaLimite] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (meta && fechaLimite) {
            onCreate(meta, fechaLimite);
            setMeta("");
            setFechaLimite("");
        }
    };

    return (
        <div className="crear-meta-container">
            <form onSubmit={handleSubmit} className="crear-meta-form">
                <h4>Meta a cumplir</h4>
                <input
                    type="text"
                    placeholder="Meta"
                    value={meta}
                    onChange={(e) => setMeta(e.target.value)}
                    required
                />
                <h4>Fecha límite para la tarea</h4>
                <input
                    type="date"
                    value={fechaLimite}
                    onChange={(e) => setFechaLimite(e.target.value)}
                    required
                />
                <button type="submit">Crear meta</button>
            </form>
        </div>
    );
}

export default CrearMeta;
