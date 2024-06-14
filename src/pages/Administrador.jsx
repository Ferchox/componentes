import React from 'react'
import AdminPanel from '../components/general/AdminPanel.jsx'
import Cabecera from "../components/general/Cabecera.jsx";
import PiePagina from "../components/general/PiePagina.jsx";
import BarraNavegacion from "../components/general/BarraNavegacion.jsx";
import './Administrador.css'

const Administrador = () => {
    return (
        <div className='contenedor-administrador'>
            <Cabecera />
            <BarraNavegacion />
            <AdminPanel />
            <PiePagina />
        </div>
    )
}

export default Administrador