import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./Rutinas.css";

const VerRutinas = () => {
    const [rutinas, setRutinas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const idCliente = sessionStorage.getItem('usuarioId');
        fetch(`https://6668e270f53957909ff9675e.mockapi.io/rutinasCliente?idCliente=${idCliente}`)
            .then((response) => response.json())
            .then((data) => setRutinas(data));
    }, []);

    const generarPDF = (rutina) => {
        const doc = new jsPDF();
        const today = new Date(rutina.fechaCreacion);
        const formattedDate =
            today.getDate() +
            "/" +
            (today.getMonth() + 1) +
            "/" +
            today.getFullYear();

        const title = rutina.nombreRutina;
        const header = `${title} ${formattedDate}`;

        doc.setFontSize(20);
        doc.text(header, 10, 10);

        let y = 20;
        doc.setFontSize(12);
        doc.text("Ejercicios:", 10, y);
        y += 10;

        autoTable(doc, {
            head: [["#", "Grupo", "Ejercicio", "Descripción"]],
            body: rutina.ejercicios.map((item, index) => [
                index + 1,
                item.grupo.charAt(0).toUpperCase() + item.grupo.slice(1),
                item.ejercicio,
                item.descripcion,
            ]),
            startY: y,
        });

        doc.save(`${title}.pdf`);
    };

    const eliminarRutina = (id) => {
        fetch(`https://6668e270f53957909ff9675e.mockapi.io/rutinasCliente/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setRutinas(rutinas.filter((rutina) => rutina.id !== id));
            });
    };

    return (
        <div className="contenedor-rutinas">
            <h2 className="rutinas-subtitulo">Mis Rutinas</h2>
            <div className="rutinas-aplicacion">
                {rutinas.length > 0 ? (
                    rutinas.map((rutina) => (
                        <div key={rutina.id} className="rutinas-contenedor-ejercicio">
                            <h3>{rutina.nombreRutina}</h3>
                            <p>Fecha de Creación: {new Date(rutina.fechaCreacion).toLocaleDateString()}</p>
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
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No tienes rutinas guardadas.</p>
                )}
            </div>
        </div>
    );
};

export default VerRutinas;
