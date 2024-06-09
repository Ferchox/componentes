import React from 'react';
import PropTypes from 'prop-types';
import './EtiquetaTitulo.css';

const EtiquetaTitulo = ({ titulo }) => {
    return (
        <div className='contenedor-etiqueta-titulo'>
            {titulo}
        </div>
    );
};

EtiquetaTitulo.propTypes = {
    titulo: PropTypes.string.isRequired,
};

export default EtiquetaTitulo;
