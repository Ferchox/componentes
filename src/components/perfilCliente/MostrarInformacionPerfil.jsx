import React from 'react';
import EtiquetaInformacion from './EtiquetaInformacion';

const MostrarInformacionPerfil = ({ perfil, convertirFecha, handleEdit }) => {
    return (
        <>
            <EtiquetaInformacion etiqueta="Nombre cliente" valor={perfil.nombre} />
            <EtiquetaInformacion etiqueta="Fecha de nacimiento" valor={convertirFecha(perfil.fechaNacimiento)} />
            <EtiquetaInformacion etiqueta="Dirección" valor={perfil.direccion} />
            <EtiquetaInformacion etiqueta="Número de celular" valor={perfil.numeroCelular} />
            <EtiquetaInformacion etiqueta="Correo electrónico" valor={perfil.email} />
            <EtiquetaInformacion etiqueta="CI" valor={perfil.ci} />
            <EtiquetaInformacion etiqueta="Sexo" valor={perfil.sexo} />
            <button onClick={handleEdit}>Editar</button>
        </>
    );
};

export default MostrarInformacionPerfil;
