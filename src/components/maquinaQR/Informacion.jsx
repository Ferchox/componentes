import React, { useState, useEffect } from "react";
import QrScanner from 'react-qr-scanner';
import "./Informacion.css";
import EtiquetaTitulo from "../general/EtiquetaTitulo";

const Informacion = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [machines, setMachines] = useState([]);
  const [constraints, setConstraints] = useState({
    video: { facingMode: { exact: "environment" } } // Intentar usar la cámara trasera inicialmente
  });

  useEffect(() => {
    fetch('https://6668e270f53957909ff9675e.mockapi.io/maquinas')
      .then(response => response.json())
      .then(data => setMachines(data))
      .catch(error => console.error('Error fetching machines:', error));
  }, []);

  const handleScan = (data) => {
    if (data && data.text) {
      const machineId = data.text;
      setSelectedMachine(machineId);
      setScanning(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
    if (err.name === "OverconstrainedError" && err.constraint === "facingMode") {
      // Si falla el acceso a la cámara trasera, intentar usar la cámara frontal
      setConstraints({ video: { facingMode: "user" } });
    }
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const machineDetails = machines.find(machine => machine.identificador === selectedMachine);

  return (
    <div className="contenedor-escaner-qr">
      <EtiquetaTitulo titulo="Escanear QR de máquina" />
      <div className="pantalla-principal">
        <h3>Información de la Máquina</h3>

        {machineDetails ? (
          <div className="machine-details">
            <h4>{machineDetails.nombre}</h4>
            <img src={machineDetails.imagen} alt={machineDetails.nombre} />
            <p>{machineDetails.descripcion}</p>
            <ul>
              {machineDetails.detalles.split(', ').map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ) : (
          selectedMachine && <p>Máquina no encontrada.</p>
        )}

        <button className="Guardar" onClick={() => setScanning(true)}>Escanear máquina</button>

        {scanning && (
          <div className="qr-scanner">
            <QrScanner
              delay={300}
              style={previewStyle}
              onError={handleError}
              onScan={handleScan}
              constraints={constraints}
            />
            <button onClick={() => setScanning(false)}>Cancelar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Informacion;
