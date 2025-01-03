

import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import '@/assets/css/main.css'

const root = ReactDom.createRoot(document.getElementById('app'))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
