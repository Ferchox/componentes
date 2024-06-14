import React from 'react';
import RegistroUsuario from '../components/registroUsuario/RegistroUsuario.jsx';
import BarraNavegacion from '../components/general/BarraNavegacion.jsx';
import Cabecera from '../components/general/Cabecera.jsx';
import PiePagina from '../components/general/PiePagina.jsx';
import './Registro.css';

const Registro = () => {
    return (
        <div className="pagina-registro">
            <Cabecera />
            <BarraNavegacion />
            <RegistroUsuario onSubmit={(datos) => ""} />
            <PiePagina />
        </div>
    );
};

export default Registro;
