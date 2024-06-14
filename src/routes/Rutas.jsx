import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../components/inicio/pages/Inicio';
import InicioSesionUsuario from '../components/inicioSesionUsuario/pages/InicioSesion'
import RegistroUsuario from '../components/registroUsuario/pages/Registro'
import Chat from '../pages/Chat';
import Entrenadores from '../components/PantallaEntrenador/pages/PEntrenador'
import EvaluacionUsuario from '../pages/EvaluacionUsuario'
import GenerarRutina from '../components/generarRutina/pages/GenerarRutina'
import GenerarRutinaIA from '../components/generarRutinaIA/pages/GenerarRutinaIA'
import Metas from '../components/metas/pages/Metas'
import PerfilCliente from '../components/perfilCliente/pages/Perfil'
import InfoMaquinasQR from '../components/maquinaQR/pages/InfoMaquinas';
import InfoMaquinas from '../components/infoMaquinas/pages/InformacionMaquinas';
import RegistroEvaluacion from '../components/ingresarEvaluacion/RegistroEvaluacion';
import VerRutinas from '../components/VerRutinas/pages/VerRutinas';

const Rutas = () => {
    return (
        <>
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
        </>
    )
}

export default Rutas