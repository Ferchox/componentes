import React from 'react';
import RutinaItem from './RutinaItem';
import { NavLink } from 'react-router-dom';

const ListaRutinas = ({ rutinas, generarPDF, eliminarRutina, manejarEdicionRutina }) => {
    return (
        <>
            <h2>Mis Rutinas</h2>
            <div className="rutinas-aplicacion">
                {rutinas.length > 0 ? (
                    rutinas.map((rutina) => (
                        <RutinaItem
                            key={rutina.id}
                            rutina={rutina}
                            generarPDF={generarPDF}
                            eliminarRutina={eliminarRutina}
                            manejarEdicionRutina={manejarEdicionRutina}
                        />
                    ))
                ) : (
                    <p>No tienes rutinas guardadas.</p>
                )}
                <div className="rutinas-botones-accion">
                    <NavLink to='/GenerarRutina'>
                        <button className="rutinas-boton">Crear rutina</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default ListaRutinas;
