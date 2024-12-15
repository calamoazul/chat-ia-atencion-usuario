import React from 'react'
import '@/assets/css/partials.css' 
import '@/assets/css/form.css'
import Chat from './components/chat'
function App() {
 
    return (
        <>
            <header className="header">
                <h1 className="heading">Chat de Atención al Usuario</h1>
            </header>
            <section className="chat box">
                <Chat />
            </section>
        </>

    )
}

export default App