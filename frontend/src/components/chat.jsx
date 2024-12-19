import React from 'react'
import { useState } from 'react'
import "@/assets/css/form.css";


export default function Chat() {

    const [on, setOn] = useState(false)

    const [question, setQuestion] = useState('');
    const [chat, setChat] = useState('¿En qué podemos ayudarte?')
    const [request, setRequest] = useState('')

   
     
    const inputUser = (evt) => {
        if (!on){
            setOn(!on)
        }
        setQuestion(evt.target.value);
    }

    const sendQuestion = (evt) => {
        evt.preventDefault()
        setRequest(question)
    }
    return (
        <>
            <form onSubmit={sendQuestion} className="chat">
                <input type="text" readonly value={chat} />
                <textarea required placeholder="Escríbanos sus dudas" onInput={inputUser} className="userBox">
                </textarea>
                <input type="submit" value="Enviar" />
            </form >
            <span>{ question }</span>
            <span>{ request }</span>
        </>
    )
}