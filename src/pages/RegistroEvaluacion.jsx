import React from 'react';
import RegistroEvaluacionUsuario from '../components/ingresarEvaluacion/RegistroEvaluacionUsuario.jsx';
import BarraNavegacion from '../components/general/BarraNavegacion.jsx';
import Cabecera from '../components/general/Cabecera.jsx';
import PiePagina from '../components/general/PiePagina.jsx';
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
