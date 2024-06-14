import React from "react";
import DropdownPerfil from "./DropdownPerfil";
import MenuOpciones from "./MenuOpciones";
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
