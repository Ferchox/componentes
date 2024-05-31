import React from "react";
import bienvenidoaTF from "../../assets/bienvenidoa-tf.jpeg";
import telefonoGym from "../../assets/telefono-gym.jpeg";
import "./InformacionPrincipal.css";

const InformacionPrincipal = () => {
  return (
    <div className="pantalla-principal">
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
    </div>
  );
};

export default InformacionPrincipal;
