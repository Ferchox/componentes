import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import InicioSesionUsuario from '../pages/InicioSesion';
import RegistroUsuario from '../pages/Registro';
import Chat from '../pages/Chat';
import Entrenadores from '../pages/PEntrenador';
import EvaluacionUsuario from '../pages/EvaluacionUsuario';
import GenerarRutina from '../pages/GenerarRutina';
import GenerarRutinaIA from '../pages/GenerarRutinaIA';
import Metas from '../pages/Metas';
import PerfilCliente from '../pages/Perfil';
import InfoMaquinasQR from '../pages/InfoMaquinas';
import InfoMaquinas from '../pages/InformacionMaquinas';
import RegistroEvaluacion from '../pages/RegistroEvaluacion';
import VerRutinas from '../pages/VerRutinas';
import Admin from '../pages/Admin';
import RutaPrivada from './RutaPrivada';

const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/IniciarSesionUsuario" element={<InicioSesionUsuario />} />
                <Route path="/RegistroUsuario" element={<RegistroUsuario />} />

                <Route path='/Chat' element={<RutaPrivada><Chat /></RutaPrivada>} />
                <Route path='/Entrenadores' element={<RutaPrivada><Entrenadores /></RutaPrivada>} />
                <Route path='/EvaluacionUsuario' element={<RutaPrivada><EvaluacionUsuario /></RutaPrivada>} />
                <Route path='/GenerarRutina' element={<RutaPrivada><GenerarRutina /></RutaPrivada>} />
                <Route path='/GenerarRutinaIA' element={<RutaPrivada><GenerarRutinaIA /></RutaPrivada>} />
                <Route path='/Metas' element={<RutaPrivada><Metas /></RutaPrivada>} />
                <Route path='/PerfilCliente' element={<RutaPrivada><PerfilCliente /></RutaPrivada>} />
                <Route path='/InfoMaquinasQR' element={<RutaPrivada><InfoMaquinasQR /></RutaPrivada>} />
                <Route path='/RegistroEvaluacion' element={<RutaPrivada><RegistroEvaluacion /></RutaPrivada>} />
                <Route path='/InfoMaquinas' element={<RutaPrivada><InfoMaquinas /></RutaPrivada>} />
                <Route path='/VerRutinas' element={<RutaPrivada><VerRutinas /></RutaPrivada>} />
                <Route path='/Admin' element={<RutaPrivada><Admin /></RutaPrivada>} />
            </Routes>
        </Router>
    );
};

export default Rutas;
