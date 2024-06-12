import React, { useEffect, useState } from "react";
import Tarjeta from "../../general/moleculas/Tarjeta";
import EtiquetaSubTitulo from "../../general/moleculas/EtiquetaSubTitulo";
import "./InformacionPrincipal.css";

const InformacionPrincipal = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch("https://6668e270f53957909ff9675e.mockapi.io/informacionInicial");
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDatos();
  }, []);

  return (
    <div className="pantalla-inicial">
      {datos.map(item => (
        <div key={item.id} className="contenedor-tarjeta">
          <EtiquetaSubTitulo titulo={item.titulo} />
          <Tarjeta imagen={item.imagen} descripcion={item.descripcion} />
        </div>
      ))}
    </div>
  );
};

export default InformacionPrincipal;
