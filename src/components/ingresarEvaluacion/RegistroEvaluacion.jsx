import React from 'react';
import RegistroEvaluacionUsuario from './RegistroEvaluacionUsuario.jsx';
import BarraNavegacion from '../general/organismos/BarraNavegacion';
import Cabecera from '../general/organismos/Cabecera';
import PiePagina from '../general/organismos/PiePagina';
import './RegistroEvaluacion.css';

const Registro = () => {
    return (
        <div className="pagina-registro-evaluacion">
            <Cabecera />
            <BarraNavegacion />
            <RegistroEvaluacionUsuario onSubmit={(datos) => console.log(datos)} />
            <PiePagina />
        </div>
    );
};

export default Registro;
