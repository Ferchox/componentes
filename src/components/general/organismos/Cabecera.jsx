import React from 'react'
import gymLogo from '../../../assets/gym-logo-sin-fondo.png';

const Cabecera = () => {
    return (
        <div>
            <header className='contenedor-cabecera'>
                <img src={gymLogo} alt="Gym Logo" className="logo-gym" />
            </header>
        </div>
    )
}

export default Cabecera