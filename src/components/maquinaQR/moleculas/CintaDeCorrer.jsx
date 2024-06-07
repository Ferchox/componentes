import React from "react";
import ExerciseItem from "../atomos/ExerciseItem";
import cintasdecorrer from "../../../assets/cintasdecorrer.jpg";
import "./CintaDeCorrer.css";

const CintaDeCorrer = ({ onClick }) => {
  return (
    <div className="cinta-de-correr">
      <ExerciseItem
        image={cintasdecorrer}
        description="Es una máquina para entrenamiento físico que puede funcionar mediante propulsión eléctrica o manual, y que sirve para correr o andar sin moverse de un mismo sitio."
        onClick={onClick}
      />
    </div>
  );
};

export default CintaDeCorrer;