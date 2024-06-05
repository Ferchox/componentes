import React from 'react';
import './SeleccionParteCuerpo.css';
import Boton from '../atomos/Boton';
import ContenedorBotones from '../moleculas/ContenedorBotones';
import ContenedorEjercicio from '../moleculas/ContenedorEjercicio';
import ContenedorInfoEjercicio from '../moleculas/ContenedorInfoEjercicio';

const SeleccionParteCuerpo = () => {
  // Lógica del componente...

  return (
    <div className="App">
      <h2>Generar mi propia rutina</h2>
      <div className="tit">
        <h5>¿Qué vas a trabajar el día de hoy?</h5>
      </div>
      <div className="buttons">
        <ContenedorBotones>
          {/* Aquí irían los botones para seleccionar la parte del cuerpo */}
          <Boton>Pierna</Boton>
          <Boton>Brazo</Boton>
          {/* Otros botones... */}
        </ContenedorBotones>
      </div>
      <div className="content">
        <ContenedorEjercicio>
          {/* Aquí irían los ejercicios seleccionados */}
          {/* Por ejemplo: */}
          <Boton>Ejercicio 1</Boton>
          <Boton>Ejercicio 2</Boton>
          {/* Otros ejercicios... */}
        </ContenedorEjercicio>
        <ContenedorInfoEjercicio>
          {/* Aquí iría la información detallada de cada ejercicio */}
          {/* Por ejemplo: */}
          <p>Información sobre el ejercicio seleccionado...</p>
        </ContenedorInfoEjercicio>
      </div>
    </div>
  );
}

export default SeleccionParteCuerpo;
