import React from 'react'
import ChatApi from '../components/chat/ChatApi'
import BarraNavegacion from '../components/general/organismos/BarraNavegacion'
import Cabecera from '../components/general/organismos/Cabecera'
import PiePagina from '../components/general/organismos/PiePagina'

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