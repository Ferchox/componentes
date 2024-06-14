import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import InicioSesionUsuario from '../pages/InicioSesion'
import RegistroUsuario from '../pages/Registro'
import Chat from '../pages/Chat';
import Entrenadores from '../pages/PEntrenador'
import EvaluacionUsuario from '../pages/EvaluacionUsuario'
import GenerarRutina from '../pages/GenerarRutina';
import GenerarRutinaIA from '../pages/GenerarRutinaIA'
import Metas from '../pages/Metas'
import PerfilCliente from '../pages/Perfil'
import InfoMaquinasQR from '../pages/InfoMaquinas';
import InfoMaquinas from '../pages/InformacionMaquinas';
import RegistroEvaluacion from '../pages/RegistroEvaluacion';
import VerRutinas from '../pages/VerRutinas';

const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/IniciarSesionUsuario" element={<InicioSesionUsuario />} />
                <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
                <Route path='/Chat' element={<Chat />} />
                <Route path='/Entrenadores' element={<Entrenadores />} />
                <Route path='/EvaluacionUsuario' element={<EvaluacionUsuario />} />
                <Route path='/GenerarRutina' element={<GenerarRutina />} />
                <Route path='/GenerarRutinaIa' element={<GenerarRutinaIA />} />
                <Route path='/Metas' element={<Metas />} />
                <Route path='/PerfilCliente' element={<PerfilCliente />} />
                <Route path='/InfoMaquinasQR' element={<InfoMaquinasQR />} />
                <Route path='/RegistroEvaluacion' element={<RegistroEvaluacion />} />
                <Route path='/InfoMaquinas' element={<InfoMaquinas />} />
                <Route path='/VerRutinas' element={<VerRutinas />} />

            </Routes>
        </Router>
    )
}

export default Rutas