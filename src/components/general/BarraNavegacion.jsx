import React from "react";
import DropdownPerfil from "./DropdownPerfil";
import MenuOpciones from "./MenuOpciones";
import "./BarraNavegacion.css";
import NotificacionesIcon from "./notificacionesIcon";

const BarraNavegacion = () => {
    return (
        <nav className="barra-navegacion">
            <MenuOpciones />
            <NotificacionesIcon/>
            <DropdownPerfil />
        </nav>
    );
};

export default BarraNavegacion;
