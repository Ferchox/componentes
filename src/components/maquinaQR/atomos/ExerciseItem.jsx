import React from "react";
import "./ExerciseItem.css";

const ExerciseItem = ({ image, description, onClick }) => {
  return (
    <div className="exercise-item" onClick={onClick}>
      <img src={image} alt="Ejercicio" />
      <p>{description}</p>
    </div>
  );
};

export default ExerciseItem;
