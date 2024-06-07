import React, { useState } from "react";
import CintaDeCorrer from "../moleculas/CintaDeCorrer";
// import "./InformacionPrincipal.css";
import exercises from "../data/exercises";
import exerciseDetails from "../data/exerciseDetails";
import "./Informacion.css"

const Informacion = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);

  const handleImageClick = (machine) => {
    setSelectedMachine(machine);
  };

  return (
    <div className="pantalla-principal">
      <h3>Cintas de correr</h3>
      <CintaDeCorrer onClick={() => handleImageClick('cinta_de_correr')} />

      {selectedMachine && (
        <div className="machine-details">
          <h4>Detalles de la máquina</h4>
      
          <ul>
            {exerciseDetails[selectedMachine].map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      <button className="Guardar">Escanear otra maquinas</button>
    </div>
  );
};

export default Informacion;