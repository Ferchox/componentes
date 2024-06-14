import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
// import './NotificacionesIcon.css';

const NotificacionesIcon = () => {
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);

  const toggleNotificaciones = () => {
    setMostrarNotificaciones(!mostrarNotificaciones);
  };

  const handleCloseNotificaciones = () => {
    setMostrarNotificaciones(false);
  };

  return (
    <div className="notificaciones-icon">
      <button onClick={toggleNotificaciones} className="icon-button">
        <FontAwesomeIcon icon={faBell} />
      </button>
      {mostrarNotificaciones && (
        <div className="notificaciones-container">
          <h2>Notificaciones</h2>
          <button onClick={handleCloseNotificaciones} className="cerrar-button">
            Cerrar
          </button>
          <ul>
            <li>Nueva notificación 1</li>
            <li>Nueva notificación 2</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificacionesIcon;
