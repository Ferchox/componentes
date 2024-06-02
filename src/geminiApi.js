// src/geminiApi.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export async function iniciarChat(historial) {
    const modelo = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = modelo.startChat({
        history: historial,
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    return chat;
}

export async function enviarMensaje(chat, mensaje) {
    const resultado = await chat.sendMessage(mensaje);
    const respuesta = await resultado.response;
    return respuesta.text();
}
