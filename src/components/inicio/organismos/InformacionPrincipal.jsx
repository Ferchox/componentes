import React from "react";
import bienvenidoaTF from "../../../assets/bienvenidoa-tf.jpeg";
import telefonoGym from "../../../assets/telefono-gym.jpeg";
import "./InformacionPrincipal.css";

const data = [
  {
    title: "Sobre nosotros",
    image: bienvenidoaTF,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic fugiat a voluptates nobis sequi velit, numquam sunt incidunt, minima sed modi veniam necessitatibus voluptas earum repellendus atque neque consectetur."
  },
  {
    title: "¿Qué te ofrece esta web?",
    image: telefonoGym,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi rem, dolore rerum saepe non aspernatur porro possimus magnam beatae explicabo nam, eveniet minus perspiciatis hic enim? Veniam, porro cupiditate!"
  }
];

const InformacionPrincipal = () => {
  return (
    <div className="pantalla-principal">
      <div className="seccion">
        {data.map((item, index) => (
          <div key={index} className="seccion-item">
            <h3>{item.title}</h3>
            <div className="contenido">
              <img src={item.image} alt={item.title} />
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="search-bar">Contactos</div>
    </div>
  );
};

export default InformacionPrincipal;
