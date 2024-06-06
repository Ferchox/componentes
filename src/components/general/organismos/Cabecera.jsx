import React from 'react';
import gymLogo from '../../../assets/gym-logo-sin-fondo.png';
import './Cabecera.css';

const Cabecera = () => {
    return (
        <div>
            <header className='contenedor-cabecera'>
                <div className="logo-gym">
                    <a href=""><img src={gymLogo} alt="Gym Logo" className="logo-image" /></a>
                </div>
            </header>
        </div>
    );
}

export default Cabecera;
