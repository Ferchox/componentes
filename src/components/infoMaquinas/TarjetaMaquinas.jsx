import React, { useEffect, useState } from "react";
import Tarjeta from "../general/Tarjeta";
import EtiquetaSubTitulo from "../general/EtiquetaSubTitulo";
import "./TarjetaMaquinas.css";
import EtiquetaTitulo from "../general/EtiquetaTitulo";

const TarjetaEjercicios = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch("https://6668e270f53957909ff9675e.mockapi.io/maquinas");
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
      <EtiquetaTitulo titulo="Informacion de máquinas" />
      {datos.map(item => (
        <div key={item.id} className="contenedor-tarjeta">
          <EtiquetaSubTitulo titulo={item.nombre} />
          <Tarjeta imagen={item.imagen} descripcion={item.descripcion} />
        </div>
      ))}
    </div>
  );
};

export default TarjetaEjercicios;
