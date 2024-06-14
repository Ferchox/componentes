import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
    requestNotificationPermission();
  }, []);

  const requestNotificationPermission = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.error("Notification permission denied.");
        }
      });
    }
  };

  const scheduleNotifications = () => {
    const notificationTimes = ["02:16", "02:17", "02:18"]; // Horas para las notificaciones

    notificationTimes.forEach(time => {
      const [hour, minute] = time.split(":").map(Number);
      let notificationTime = new Date();
      notificationTime.setHours(hour, minute, 0, 0);

      if (notificationTime <= new Date()) {
        notificationTime.setDate(notificationTime.getDate() + 1);
      }

      const timeout = notificationTime.getTime() - new Date().getTime();
      setTimeout(() => {
        showNotification("Notificación programada", "Es hora de revisar las novedades del día.", null);
      }, timeout);
    });
  };

  const showNotification = (title, message, image) => {
    if (Notification.permission === "granted") {
      console.log("Mostrando notificación:", title, message);
      toast.info(
        <div>
          {image && <img src={image} alt="icon" style={{ width: '20px', height: '20px', marginRight: '10px' }} />}
          <div>
            <strong>{title}</strong>
            <p>{message}</p>
          </div>
        </div>,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } else {
      console.error("Permission to show notifications is not granted.");
    }
  };

  useEffect(() => {
    if (notifications.length > 0) {
      scheduleNotifications();
    }
  }, [notifications]);

  return (
    <div className="container">
      <h1>Notificaciones Programadas</h1>
      <ToastContainer />
    </div>
  );
};

export default Notificaciones;
