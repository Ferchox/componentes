import React, { useState, useEffect } from 'react';
import ListaRutinas from './ListaRutinas';
import EditarRutina from './EditarRutina';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './Rutinas.css';

const Rutinas = () => {
    const [rutinas, setRutinas] = useState([]);
    const [rutinaEditando, setRutinaEditando] = useState(null);
    const [grupos, setGrupos] = useState([]);
    const [ejercicios, setEjercicios] = useState([]);
    const [grupoSeleccionado, setGrupoSeleccionado] = useState(null);
    const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);
    const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]);

    useEffect(() => {
        const idCliente = sessionStorage.getItem('usuarioId');

        const fetchData = async () => {
            try {
                const [rutinasResponse, gruposResponse, ejerciciosResponse] = await Promise.all([
                    fetch(`https://6668e270f53957909ff9675e.mockapi.io/rutinasCliente?idCliente=${idCliente}`),
                    fetch("https://6668e270f53957909ff9675e.mockapi.io/rutinas"),
                    fetch("https://6668e270f53957909ff9675e.mockapi.io/ejercicios")
                ]);

                if (!rutinasResponse.ok) {
                    if (rutinasResponse.status === 404) {
                        setRutinas([]);
                    } else {
                        throw new Error(`Rutinas API error: ${rutinasResponse.statusText}`);
                    }
                } else {
                    const rutinasData = await rutinasResponse.json();
                    setRutinas(rutinasData);
                }

                if (!gruposResponse.ok) throw new Error(`Grupos API error: ${gruposResponse.statusText}`);
                if (!ejerciciosResponse.ok) throw new Error(`Ejercicios API error: ${ejerciciosResponse.statusText}`);

                const [gruposData, ejerciciosData] = await Promise.all([
                    gruposResponse.json(),
                    ejerciciosResponse.json()
                ]);

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
        }).then(() => {
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

    return (
        <div className="contenedor-rutinas">
            {rutinaEditando ? (
                <EditarRutina
                    rutinaEditando={rutinaEditando}
                    grupos={grupos}
                    ejercicios={ejercicios}
                    setEjercicioSeleccionado={setEjercicioSeleccionado}
                    grupoSeleccionado={grupoSeleccionado}
                    setGrupoSeleccionado={setGrupoSeleccionado}
                    ejercicioSeleccionado={ejercicioSeleccionado}
                    getEjerciciosByGrupo={getEjerciciosByGrupo}
                    añadirEjercicio={añadirEjercicio}
                    ejerciciosSeleccionados={ejerciciosSeleccionados}
                    eliminarEjercicio={eliminarEjercicio}
                    guardarRutina={guardarRutina}
                    cancelarEdicion={cancelarEdicion}
                />
            ) : (
                <ListaRutinas
                    rutinas={rutinas}
                    generarPDF={generarPDF}
                    eliminarRutina={eliminarRutina}
                    manejarEdicionRutina={manejarEdicionRutina}
                />
            )}
        </div>
    );
};

export default Rutinas;
