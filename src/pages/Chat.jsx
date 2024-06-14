import React from 'react'
import ChatApi from '../components/chat/ChatApi'
import BarraNavegacion from '../components/general/BarraNavegacion'
import Cabecera from '../components/general/Cabecera'
import PiePagina from '../components/general/PiePagina'
import './Chat.css'

const Chat = () => {
    return (
        <div className="contenedor-chat-fondo">
            <Cabecera />
            <BarraNavegacion />
            <ChatApi />
            <PiePagina />
        </div>
    )
}

export default Chat