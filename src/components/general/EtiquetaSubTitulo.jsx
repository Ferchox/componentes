import React from 'react';
import PropTypes from 'prop-types';
import './EtiquetaSubTitulo.css';

const EtiquetaSubTitulo = ({ titulo }) => {
    return (
        <div className='contenedor-etiqueta-sub-titulo'>
            {titulo}
        </div>
    );
};

EtiquetaSubTitulo.propTypes = {
    titulo: PropTypes.string.isRequired,
};

export default EtiquetaSubTitulo;
