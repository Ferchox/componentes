import React from "react";
import bienvenidoaTF from "../../assets/bienvenidoa-tf.jpeg";
import telefonoGym from "../../assets/telefono-gym.jpeg";
import "./InformacionPrincipal.css";
import gymLogo from "../../assets/gym-logo.jpg";

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
      {data.map((item, index) => (
        <div key={index} className="seccion">
          <h3>{item.title}</h3>
          <div className="contenido">
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <img src={logoGimnasio} alt="Logo del gimnasio" className="logo-gimnasio" />
      <h3>Sobre nosotros</h3>
      <div className="sobre-nosotros">
        <img src={bienvenidoaTF} alt="Bienvenido a TF" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic
          fugiat a voluptates nobis sequi velit, numquam sunt incidunt, minima
          sed modi veniam necessitatibus voluptas earum repellendus atque neque
          consectetur.
        </p>
      </div>
      <h3>¿Qué te ofrece esta web?</h3>
      <div className="sobre-nosotros">
        <img src={telefonoGym} alt="Telefono en gimnasio" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          animi rem, dolore rerum saepe non aspernatur porro possimus magnam
          beatae explicabo nam, eveniet minus perspiciatis hic enim? Veniam,
          porro cupiditate!
        </p>
      </div>
      <div className="search-bar">Contactos</div>
    </div>
  );
};

export default InformacionPrincipal;
