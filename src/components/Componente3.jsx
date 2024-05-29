import React from "react";
import "./Componente3.css";
import gymLogo from "../assets/gym-logo.jpg"; 
import waterIcon from "../assets/water-icon.jpg"; 
import exerciseIcon from "../assets/exercise-icon.jpg"; 

const Notification = ({ title, body, image, className }) => {
  return (
    <div className={`notification-container ${className}`}>
      {image && className !== "territorio-notification" && (
        <img src={image} alt="Icon" className="notification-icon" />
      )}
      <div className="notification-content">
        {className === "territorio-notification" && (
          <img src={image} alt="Gym Logo" className="territorio-logo" />
        )}
        <h1 className="notification-title">{title}</h1>
        <p className="notification-body">{body}</p>
      </div>
    </div>
  );
};

function Componente3() {
  return (
    <div className="container">
      <Notification
        title=""
        body="ESTUVISTE ENTRENANDO MUY BIEN ESTOS DIAS. SIGUE ASÍ, NO TE OLVIDES ENTRENAR HOY"
        image={gymLogo}
        className="territorio-notification"
      />
      <Notification
        title=""
        body="Es hora de tomar agua"
        image={waterIcon}
        className="water-notification"
      />
      <Notification
        title=""
        body="Es momento de moverte"
        image={exerciseIcon}
        className="exercise-notification"
      />
    </div>
  );
}

export default Componente3;
