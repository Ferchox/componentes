import React from "react";
import bienvenidoaTF from "../../../assets/bienvenidoa-tf.jpeg";
import telefonoGym from "../../../assets/telefono-gym.jpeg";
import Tarjeta from "../../general/moleculas/Tarjeta";
import EtiquetaSubTitulo from "../../general/moleculas/EtiquetaSubTitulo";
import "./InformacionPrincipal.css";

const datos = [
  {
    titulo: 'Sobre nosotros',
    imagen: bienvenidoaTF,
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic fugiat a voluptates nobis sequi velit, numquam sunt incidunt, minima sed modi veniam necessitatibus voluptas earum repellendus atque neque consectetur."
  },
  {
    titulo: '¿Qué te ofrece esta web?',
    imagen: telefonoGym,
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi rem, dolore rerum saepe non aspernatur porro possimus magnam beatae explicabo nam, eveniet minus perspiciatis hic enim? Veniam, porro cupiditate!"
  }
];

const InformacionPrincipal = () => {
  return (
    <div className="pantalla-inicial">
      {datos.map((item, index) => (
        <div key={index}>
          <EtiquetaSubTitulo titulo={item.titulo} />
          <Tarjeta imagen={item.imagen} descripcion={item.descripcion} />
        </div>
      ))}
    </div>
  );
};

export default InformacionPrincipal;
