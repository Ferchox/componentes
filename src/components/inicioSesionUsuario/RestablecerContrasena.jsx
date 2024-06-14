import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import EtiquetaTitulo from '../general/EtiquetaTitulo';
import './RestablecerContrasena.css'
emailjs.init('ITZrn_HCKk8ZBUyXs');

const RestablecerContrasena = () => {
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState(null);
    const [tipoAviso, setTipoAviso] = useState(null);
    const navigate = useNavigate();

    const generarCodigo = () => {
        return Math.floor(100000 + Math.random() * 900000).toString(); // Código de 6 dígitos
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('https://6668e270f53957909ff9675e.mockapi.io/cliente');
            const usuarios = response.data;
            const usuario = usuarios.find(user => user.email === correo);

            if (usuario) {
                const codigo = generarCodigo();

                const serviceID = 'default_service';
                const templateID = 'template_n3xjauj';
                const templateParams = {
                    from_name: 'Your App Name',
                    to_name: usuario.nombre,
                    message: `Tu código de restablecimiento de contraseña es: ${codigo}`,
                    to_email: correo,
                    reply_to: 'no-reply@yourapp.com'
                };

                await emailjs.send(serviceID, templateID, templateParams);
                navigate('/VerificarCodigo', { state: { correo, codigoEnviado: codigo } });
            } else {
                setMensaje('Correo electrónico no encontrado');
                setTipoAviso('error');
            }
        } catch (error) {
            console.error('Error al enviar el correo de restablecimiento:', error);
            setMensaje('Hubo un error al intentar enviar el correo de restablecimiento.');
            setTipoAviso('error');
        }
    };

    return (
        <div className='contenedor-restablecer-contrasena'>
            <EtiquetaTitulo titulo='Restablecer contraseña' />
            <form className='contenedor-restablecer' onSubmit={handleSubmit}>
                <h4>Correo electrónico</h4>
                <input
                    type="email"
                    placeholder="Introduce tu correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <button type="submit">Enviar Correo de Restablecimiento</button>
                {mensaje && <p className={`mensaje ${tipoAviso}`}>{mensaje}</p>}
            </form>
        </div>
    );
};

export default RestablecerContrasena;
