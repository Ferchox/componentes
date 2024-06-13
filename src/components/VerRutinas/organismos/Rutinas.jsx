import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./Rutinas.css";

const Rutinas = () => {
    const [rutinas, setRutinas] = useState([]);
    const [rutinaEditando, setRutinaEditando] = useState(null);
    const [grupos, setGrupos] = useState([]);
    const [ejercicios, setEjercicios] = useState([]);
    const [grupoSeleccionado, setGrupoSeleccionado] = useState(null);
    const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);
    const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const idCliente = sessionStorage.getItem('usuarioId');

        const fetchData = async () => {
            try {
                const [rutinasResponse, gruposResponse, ejerciciosResponse] = await Promise.all([
                    fetch(`https://6668e270f53957909ff9675e.mockapi.io/rutinasCliente?idCliente=${idCliente}`),
                    fetch("https://6668e270f53957909ff9675e.mockapi.io/rutinas"),
                    fetch("https://6668e270f53957909ff9675e.mockapi.io/ejercicios")
                ]);

                const [rutinasData, gruposData, ejerciciosData] = await Promise.all([
                    rutinasResponse.json(),
                    gruposResponse.json(),
                    ejerciciosResponse.json()
                ]);

                setRutinas(rutinasData);
                setGrupos(gruposData);
                setEjercicios(ejerciciosData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getEjerciciosByGrupo = (grupo) => {
        const selectedGroup = grupos.find((g) => g.nombre === grupo);
        if (!selectedGroup) return [];
        return selectedGroup.idEjercicio.ejercicios.map((e) =>
            ejercicios.find((ej) => ej.id === e.id)
        );
    };

    const generarPDF = (rutina) => {
        const doc = new jsPDF();
        const today = new Date(rutina.fechaCreacion);
        const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        const title = rutina.nombreRutina;
        const header = `${title} ${formattedDate}`;

        doc.setFontSize(20);
        doc.text(header, 10, 10);

        autoTable(doc, {
            head: [["#", "Grupo", "Ejercicio", "Descripción"]],
            body: rutina.ejercicios.map((item, index) => [
                index + 1,
                item.grupo.charAt(0).toUpperCase() + item.grupo.slice(1),
                item.ejercicio,
                item.descripcion,
            ]),
            startY: 20,
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

    const manejarEdicionRutina = (rutina) => {
        setRutinaEditando(rutina);
        setEjerciciosSeleccionados(rutina.ejercicios);
    };

    const añadirEjercicio = () => {
        if (ejercicioSeleccionado) {
            setEjerciciosSeleccionados([
                ...ejerciciosSeleccionados,
                {
                    grupo: grupoSeleccionado,
                    ejercicio: ejercicioSeleccionado.nombre,
                    descripcion: ejercicioSeleccionado.descripcion,
                },
            ]);
            setEjercicioSeleccionado(null);
        }
    };

    const eliminarEjercicio = (index) => {
        setEjerciciosSeleccionados(
            ejerciciosSeleccionados.filter((_, i) => i !== index)
        );
    };

    const guardarRutina = () => {
        if (ejerciciosSeleccionados.length === 0) {
            alert("Debe agregar al menos un ejercicio antes de guardar la rutina.");
            return;
        }

        const rutinaActualizada = {
            ...rutinaEditando,
            ejercicios: ejerciciosSeleccionados,
        };

        fetch(`https://6668e270f53957909ff9675e.mockapi.io/rutinasCliente/${rutinaActualizada.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rutinaActualizada),
        })
            .then((response) => response.json())
            .then(() => {
                setRutinaEditando(null);
                setEjerciciosSeleccionados([]);
                fetch(`https://6668e270f53957909ff9675e.mockapi.io/rutinasCliente?idCliente=${sessionStorage.getItem('usuarioId')}`)
                    .then((response) => response.json())
                    .then((data) => setRutinas(data));
            });
    };

    const cancelarEdicion = () => {
        setRutinaEditando(null);
        setEjerciciosSeleccionados([]);
    };

    const manejarSeleccionGrupo = (grupo) => {
        setGrupoSeleccionado(grupo);
        setEjercicioSeleccionado(null);
    };

    const manejarSeleccionEjercicio = (ejercicio) => {
        setEjercicioSeleccionado(ejercicio);
    };

    return (
        <div className="contenedor-rutinas">
            {rutinaEditando ? (
                <div className="contenedor-editar-rutina">
                    <h2>Editar mi rutina</h2>
                    <h4>¿Qué vas a trabajar el día de hoy?</h4>
                    <div className="aplicacion">
                        <div className="contenedor-botones">
                            {grupos.map((grupo) => (
                                <button key={grupo.id} onClick={() => manejarSeleccionGrupo(grupo.nombre)}>
                                    {grupo.nombre.charAt(0).toUpperCase() + grupo.nombre.slice(1)}
                                </button>
                            ))}
                        </div>
                        <div className="contenido">
                            <div>
                                {grupoSeleccionado &&
                                    getEjerciciosByGrupo(grupoSeleccionado).map((ejercicio) => (
                                        <button
                                            key={ejercicio.id}
                                            onClick={() => manejarSeleccionEjercicio(ejercicio)}
                                        >
                                            {ejercicio.nombre}
                                        </button>
                                    ))}
                            </div>
                            <div>
                                {ejercicioSeleccionado && (
                                    <>
                                        <h3>{ejercicioSeleccionado.nombre}</h3>
                                        <p>{ejercicioSeleccionado.descripcion}</p>
                                    </>
                                )}
                            </div>
                            <div className="lista-ejercicios">
                                {ejerciciosSeleccionados.length > 0 && (
                                    <h4>Ejercicios Seleccionados:</h4>
                                )}
                                <ul>
                                    {ejerciciosSeleccionados.map((item, index) => (
                                        <li key={index}>
                                            {item.ejercicio} -{" "}
                                            {item.grupo.charAt(0).toUpperCase() + item.grupo.slice(1)}
                                            <button onClick={() => eliminarEjercicio(index)}>
                                                Eliminar
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="botones-accion">
                                <button onClick={añadirEjercicio}>Añadir Ejercicio</button>
                                <button onClick={guardarRutina}>Guardar Rutina</button>
                                <button onClick={cancelarEdicion}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <h2>Mis Rutinas</h2>
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
                                        <button className="rutinas-boton" onClick={() => manejarEdicionRutina(rutina)}>Editar Rutina</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No tienes rutinas guardadas.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Rutinas;
