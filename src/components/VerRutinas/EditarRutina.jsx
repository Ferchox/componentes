import React from 'react';
import SelectorEjercicio from './SelectorEjercicio';
import './EditarRutina.css'

const EditarRutina = ({
    rutinaEditando,
    grupos,
    ejercicios,
    setEjercicioSeleccionado,
    grupoSeleccionado,
    setGrupoSeleccionado,
    ejercicioSeleccionado,
    getEjerciciosByGrupo,
    añadirEjercicio,
    ejerciciosSeleccionados,
    eliminarEjercicio,
    guardarRutina,
    cancelarEdicion
}) => {
    return (
        <div className="contenedor-editar-rutina">
            <h2>Editar mi rutina</h2>
            <h4>¿Qué vas a trabajar el día de hoy?</h4>
            <div className="aplicacion">
                <div className="contenedor-botones">
                    {grupos.map((grupo) => (
                        <button key={grupo.id} onClick={() => setGrupoSeleccionado(grupo.nombre)}>
                            {grupo.nombre.charAt(0).toUpperCase() + grupo.nombre.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="contenido">
                    <SelectorEjercicio
                        grupoSeleccionado={grupoSeleccionado}
                        getEjerciciosByGrupo={getEjerciciosByGrupo}
                        manejarSeleccionEjercicio={setEjercicioSeleccionado}
                        ejercicios={ejercicios}
                    />
                    <div>
                        {ejercicioSeleccionado && (
                            <>
                                <h3>{ejercicioSeleccionado.nombre}</h3>
                                <p>{ejercicioSeleccionado.descripcion}</p>
                            </>
                        )}
                    </div>
                    <div className="lista-ejercicios">
                        {ejerciciosSeleccionados.length > 0 && <h4>Ejercicios Seleccionados:</h4>}
                        <ul>
                            {ejerciciosSeleccionados.map((item, index) => (
                                <li key={index}>
                                    {item.ejercicio} - {item.grupo ? (item.grupo.charAt(0).toUpperCase() + item.grupo.slice(1)) : ''}
                                    <button onClick={() => eliminarEjercicio(index)}>Eliminar</button>
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
    );
};

export default EditarRutina;
