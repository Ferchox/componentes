import React from 'react';
import RegistroUsuario from '../organismos/RegistroUsuario';
import BarraNavegacion from '../../general/BarraNavegacion';
import Cabecera from '../../general/Cabecera';
import PiePagina from '../../general/PiePagina';
import './Registro.css';

const Registro = () => {
    return (
        <div className="pagina-registro">
            <Cabecera />
            <BarraNavegacion />
            <RegistroUsuario onSubmit={(datos) => console.log(datos)} />
            <PiePagina />
        </div>
    );
};

export default Registro;
