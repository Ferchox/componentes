import React from 'react'
import { NavLink } from 'react-router-dom';

const BotonesPerfil = () => {
    return (
        <div>
            <NavLink to='/EvaluacionUsuario'>
                <button >Ver historial de evaluaciones</button>
            </NavLink>
            <NavLink to='/RegistroEvaluacion'>
                <button >Registrar evaluación</button>
            </NavLink>
        </div >
    )
}

export default BotonesPerfil
