import React from 'react';
import RegistroEvaluacionUsuario from './RegistroEvaluacionUsuario.jsx';
import BarraNavegacion from '../general/BarraNavegacion.jsx';
import Cabecera from '../general/Cabecera.jsx';
import PiePagina from '../general/PiePagina.jsx';
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
