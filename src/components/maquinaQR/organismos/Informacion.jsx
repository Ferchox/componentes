import React, { useState } from "react";
import QrScanner from 'react-qr-scanner';
import maquinas from "../../../data/maquinas.json";
import "./Informacion.css";

const Informacion = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [scanning, setScanning] = useState(false);

  const handleScan = (data) => {
    if (data && data.text) {
      const machineId = data.text; // data.text contiene el texto del QR escaneado
      setSelectedMachine(machineId);
      setScanning(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="pantalla-principal">
      <h3>Información de la Máquina</h3>

      {selectedMachine && maquinas[selectedMachine] && (
        <div className="machine-details">
          <h4>{maquinas[selectedMachine].nombre}</h4>
          <img src={maquinas[selectedMachine].imagen} alt={maquinas[selectedMachine].nombre} />
          <p>{maquinas[selectedMachine].descripcion}</p>
          <ul>
            {maquinas[selectedMachine].detalles.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      <button className="Guardar" onClick={() => setScanning(true)}>Escanear máquina</button>

      {scanning && (
        <div className="qr-scanner">
          <QrScanner
            delay={300}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
          />
          <button onClick={() => setScanning(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default Informacion;
