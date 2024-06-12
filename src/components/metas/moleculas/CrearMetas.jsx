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
                <input
                    type="text"
                    placeholder="Meta"
                    value={meta}
                    onChange={(e) => setMeta(e.target.value)}
                    required
                />
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
