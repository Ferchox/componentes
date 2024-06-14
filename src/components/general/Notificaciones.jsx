import React, { useState, useEffect } from "react";
import "./Notificaciones.css";

const Notificaciones = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("https://6668e270f53957909ff9675e.mockapi.io/notificacion");
        if (!response.ok) {
          throw new Error("Failed to fetch notifications from API");
        }
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="container">
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          title={notification.titulo}
          body={notification.descripcion}
          image={notification.imagen}
          className={notification.className}
        />
      ))}
    </div>
  );
};

const Notification = ({ title, body, image }) => (
  <div className="notification">
    <h2>{title}</h2>
    <p>{body}</p>
    <img src={image} alt={title} />
  </div>
);

export default Notificaciones;
