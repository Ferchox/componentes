import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../components/inicio/pages/Inicio';
import InicioSesionUsuario from '../components/inicioSesionUsuario/pages/InicioSesion'
import RegistroUsuario from '../components/registroUsuario/pages/Registro'
import Chat from '../components/chat/pages/Chat'
import CrearMetas from '../components/crearMetas/pages/CrearMeta'
import Entrenadores from '../components/PantallaEntrenador/pages/PEntrenador'
import EvaluacionUsuario from '../components/evaluacionUsuario/pages/EvaluacionUsuario'
import GenerarRutina from '../components/generarRutina/pages/GenerarRutina'
import Metas from '../components/metas/pages/Metas'
import PerfilCliente from '../components/perfilCliente/pages/Perfil'
import InfoMaquinas from '../components/maquinaQR/pages/InfoMaquinas';

const Rutas = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/IniciarSesionUsuario" element={<InicioSesionUsuario />} />
                    <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
                    <Route path='/Chat' element={<Chat />} />
                    <Route path='/CrearMetas' element={<CrearMetas />} />
                    <Route path='/Entrenadores' element={<Entrenadores />} />
                    <Route path='/EvaluacionUsuario' element={<EvaluacionUsuario />} />
                    <Route path='/GenerarRutina' element={<GenerarRutina />} />
                    <Route path='/Metas' element={<Metas />} />
                    <Route path='/PerfilCliente' element={<PerfilCliente />} />
                    <Route path='/InfoMaquinas' element={<InfoMaquinas />} />
                </Routes>
            </Router>
        </>
    )
}

export default Rutas