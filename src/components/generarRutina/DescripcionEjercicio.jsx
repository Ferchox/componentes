import React from "react";
import "./DescripcionEjercicio.css";
import sentadillasIcon from "../../assets/sentadillas-icon.jpg";
import flexionesIcon from "../../assets/flexiones-icon.jpg";
import abdominalesIcon from "../../assets/abdominales-icon.jpg";

const ExerciseCard = ({ title, description, image }) => {
  return (
    <div className="exercise-card">
      <img src={image} alt={`${title} icon`} className="exercise-icon" />
      <div className="exercise-content">
        <h1 className="exercise-title">{title}</h1>
        <p className="exercise-description">{description}</p>
      </div>
    </div>
  );
};

function DescripcionEjercicio() {
  return (
    <div className="container">
      <ExerciseCard
        title="Sentadillas"
        description="Ponte de pie con los pies al ancho de los hombros, baja flexionando las rodillas y caderas como si te fueras a sentar..."
        image={sentadillasIcon}
      />
      <ExerciseCard
        title="Flexiones"
        description="Coloca las manos en el suelo alineadas con los hombros, extiende las piernas, baja el pecho flexionando los codos, y luego..."
        image={flexionesIcon}
      />
      <ExerciseCard
        title="Abdominales"
        description="Acuéstate boca arriba con las rodillas flexionadas y pies en el suelo, coloca las manos detrás de la cabeza, levanta los hombros..."
        image={abdominalesIcon}
      />
    </div>
  );
}

export default DescripcionEjercicio;
