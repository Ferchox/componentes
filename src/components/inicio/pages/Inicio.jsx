import React from 'react'
import InformacionPrincipal from '../InformacionPrincipal'
import BarraNavegacion from '../../general/organismos/BarraNavegacion';
import Cabecera from '../../general/organismos/Cabecera';
import PiePagina from '../../general/organismos/PiePagina';
const Inicio = () => {
    return (
        <div>
            <Cabecera />
            <BarraNavegacion />
            <InformacionPrincipal />
            <PiePagina />
        </div>
    )
}

export default Inicio