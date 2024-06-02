import React from 'react';

const Notificaciones = ({ notificaciones }) => {
  return (
    <div className="notificaciones-container">
      {notificaciones.map((notificacion, index) => (
        <div key={index} className="notificacion">
          <h2>{notificacion.title}</h2>
          <p>{notificacion.body}</p>
          {notificacion.image && <img src={notificacion.image} alt="Icon" />}
          {/* Agrega aquí cualquier otra información que desees mostrar */}
        </div>
      ))}
    </div>
  );
};

export default Notificaciones;
