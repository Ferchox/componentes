import React, { useState, useEffect } from "react";
import "./Notificaciones.css";

const Notificaciones = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Colocar aqui la api para las notificaciones
        const response = await fetch("URL_DE_LA_API");
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
          title={notification.title}
          body={notification.descripcion}
          image={notification.image}
        />
      ))}
    </div>
  );
};

export default Notificaciones;
