import React from 'react';
import RegistroUsuario from '../organismos/RegistroUsuario';
import BarraNavegacion from '../../general/organismos/BarraNavegacion';
import Cabecera from '../../general/organismos/Cabecera';
import PiePagina from '../../general/organismos/PiePagina';
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
