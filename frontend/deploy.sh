#!/bin/bash


if [[ ! -d "frontend" ]]; then
    dir=pwd
    echo "Directorio actual: $dir"
    echo -e "Accediendo al directorio de frontend"
    cd /app/frontend
    echo -e "Instalando dependencias"

    #Se actualiza a la versión más actual de npm
    npm install -g npm

    #Instalación de vite como compilador
    npm install vite

    #Instalación del plugin de vite para React
    npm install @vitejs/plugin-react --save-dev

    #Instalamos dependencias de debug y para navegadores
    npm install --save-dev browserslist
    npm install debug@latest supports-color@latest

    #Instalamos el resto de dependencias
    echo -e "Iniciando aplicación"

    npm update
    npm run dev
fi