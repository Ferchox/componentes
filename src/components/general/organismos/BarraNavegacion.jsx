import React from "react";
import DropdownPerfil from "../moleculas/DropdownPerfil";
import MenuOpciones from "../moleculas/MenuOpciones";
import "./BarraNavegacion.css";

const BarraNavegacion = () => {
    return (
        <nav className="barra-navegacion">
            <MenuOpciones />
            <DropdownPerfil />
        </nav>
    );
};

export default BarraNavegacion;
