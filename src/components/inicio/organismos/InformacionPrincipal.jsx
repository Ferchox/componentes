import React from "react";
import bienvenidoaTF from "../../../assets/bienvenidoa-tf.jpeg";
import telefonoGym from "../../../assets/telefono-gym.jpeg";
import "./InformacionPrincipal.css";

const datos = [
  {
    titulo: "Sobre nosotros",
    imagen: bienvenidoaTF,
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic fugiat a voluptates nobis sequi velit, numquam sunt incidunt, minima sed modi veniam necessitatibus voluptas earum repellendus atque neque consectetur."
  },
  {
    titulo: "¿Qué te ofrece esta web?",
    imagen: telefonoGym,
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi rem, dolore rerum saepe non aspernatur porro possimus magnam beatae explicabo nam, eveniet minus perspiciatis hic enim? Veniam, porro cupiditate!"
  }
];

const InformacionPrincipal = () => {
  return (
    <div className="pantalla-principal">
      {datos.map((item, index) => (
        <div key={index} className="tarjeta">
          <h3>{item.titulo}</h3>
          <div className="contenido-tarjeta">
            <img src={item.imagen} alt={item.titulo} className="imagen-tarjeta" />
            <p>{item.descripcion}</p>
          </div>
        </div>
      ))}
      <div className="seccion-contacto">Contactos</div>
    </div>
  );
};

export default InformacionPrincipal;
