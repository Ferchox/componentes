import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const RutinaItem = ({ rutina, generarPDF, eliminarRutina, manejarEdicionRutina }) => {
    const formattedDate = new Date(rutina.fechaCreacion).toLocaleDateString();

    return (
        <div className="rutinas-contenedor-ejercicio">
            <h3>{rutina.nombreRutina}</h3>
            <p>Fecha de Creación: {formattedDate}</p>
            <table className="rutinas-tabla">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Grupo</th>
                        <th>Ejercicio</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {rutina.ejercicios.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.grupo.charAt(0).toUpperCase() + item.grupo.slice(1)}</td>
                            <td>{item.ejercicio}</td>
                            <td>{item.descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="rutinas-botones-accion">
                <button className="rutinas-boton" onClick={() => generarPDF(rutina)}>Descargar PDF</button>
                <button className="rutinas-boton" onClick={() => eliminarRutina(rutina.id)}>Eliminar Rutina</button>
                <button className="rutinas-boton" onClick={() => manejarEdicionRutina(rutina)}>Editar Rutina</button>
            </div>
        </div>
    );
};

export default RutinaItem;
