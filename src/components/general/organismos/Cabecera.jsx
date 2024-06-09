import React from 'react';
import gymLogo from '../../../assets/gym-logo-sin-fondo.png';
import './Cabecera.css';

import { NavLink } from 'react-router-dom';

const Cabecera = () => {
    return (
        <div>
            <header className='contenedor-cabecera'>
                <div className="logo-gym">
                    <NavLink to="/">
                        <img src={gymLogo} alt="Gym Logo" className="logo-image" />
                    </NavLink>
                </div>
            </header>
        </div>
    );
}

export default Cabecera;
