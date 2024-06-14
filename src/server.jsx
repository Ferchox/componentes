// server.js (Backend - continuación)
const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const axios = require('axios');
const app = express();

app.use(express.json());

// Función para obtener todos los usuarios de MockAPI
const getUsers = async () => {
    const response = await axios.get('https://6668e270f53957909ff9675e.mockapi.io/cliente');
    return response.data;
};

// Endpoint para solicitar restablecimiento de contraseña
app.post('/reset-password-request', async (req, res) => {
    const { email } = req.body;
    try {
        const users = await getUsers();
        const user = users.find(u => u.email === email);

        if (!user) {
            return res.status(200).send('Si existe una cuenta con ese correo, recibirás un email con instrucciones para restablecer tu contraseña.');
        }

        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hora

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tuemail@gmail.com',
                pass: 'tucontraseña'
            }
        });

        const mailOptions = {
            from: 'tuemail@gmail.com',
            to: user.email,
            subject: 'Restablecer Contraseña',
            text: `Por favor, haz click en el siguiente enlace para restablecer tu contraseña: 
            http://localhost:3000/restablecer/${token}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('Correo enviado');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).send('Error al enviar el correo');
    }
});

// Endpoint para restablecer contraseña
app.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    try {
        const users = await getUsers();
        const user = users.find(u => u.resetPasswordToken === token && u.resetPasswordExpires > Date.now());

        if (!user) {
            return res.status(400).send('El token de restablecimiento de contraseña es inválido o ha expirado.');
        }

        // Actualizar la contraseña del usuario
        user.contrasena = password;
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;

        // Actualizar el usuario en la API MockAPI
        await axios.put(`https://6668e270f53957909ff9675e.mockapi.io/cliente/${user.id}`, user);
        res.status(200).send('Contraseña restablecida exitosamente');
    } catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        res.status(500).send('Error al restablecer la contraseña');
    }
});

// Iniciar el servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
