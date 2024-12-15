# Chat de Inteligencia Artificial de Dudas Frecuentes

## Presentación

Esta app está diseñada para atender dudas de usuarios empleando Inteligencia Artificial para responder a las dudas más frecuentes. La aplicación simula ser un servicio de atención al cliente de un concesionario, por lo que las dudas irán orientadas a plazos para reparaciones en el taller, dudas sobre ofertas de diversos modelos, quejas sobre incidencias, etc.

## Instalación

Esta app está desarrollada con Python, usando el framework Djando para el backend, y React para el front.
Para el despliegue utiliza Docker, por lo que solo habría que clonar el repositorio usando este comando en la terminal:

```bash
git clone https://github.com/calamoazul/chat-ia-atencion-usuario.git
```

Una vez desplegado el proyecto, habría que usar docker-compose en el directorio raíz para levantar los contenedores, creando un archivo .env similar al .env.example para realizar la conexión con Postgresql.

> [!DANGER]
> Si no se crea un archivo .env con las mismas variables del archivo .env.example, Docker no podrá construir el contenedor de la aplicación.

Tras realizar las configuraciones necesarias, solo habría que crear los contenedores con el comando de docker-compose

```bash
docker-compose up --build
```

Hay dos scripts que se encargan de ejecutar los comandos necesarios para que estén operativos los tres contenedores.

El script del backend **entrypoint.sh** se encarga de conectar Django con la base de datos de Postgresql y ejecutar las primeras migraciones que necesita Django para crear su panel de administración.
El script del frontend **deploy.sh** se encarga de instalar, Node, Vite y React y actualizar las dependencias necesarias


## Arquitectura del backend

El backend es muy sencillo y se desarrolla a través de tres modelos: Cliente, Coche y Dudas.
Los modelos de cliente y Coche se cargarán de forma automática en la base de datos. El cliente, puede tener asignado un coche o no, pero podrá registrarse como cliente y realizar sus preguntas al chat.
Su petición se mandará al back y esté buscara por palabras clave en el campo about.
Si no se encuentran resultados parecidos, el chat pedirá al cliente que específique mostrándole las dudas más frecuentes, las que tengan mayor repeticiones en el campo about, y el cliente podrá solicitar una y el chat le mandará la respuesta al front de la aplicación y este se la mostrará al usuario a través de React.

La idea es que el chat también guarde dudas del cliente si reconoce el nombre de un coche para generar un registro sobre las dudas que tienen los usuarios y así mostrárselo al usuario admin de la aplicación en el panel de administración.

La estructura del backend será la siguiente:

Todos los modelos se guardarán en el archivo models.py

Las migraciones de datos de prueba se guardarán en el directorio migrations.

En el archivo chat.py se procesarán las peticiones del frontend y se mandarán las respuestas.

El archivo urls.py es el que organizará la conexión con el back y el front indicando que rutas pueden ser consultadas por el front.

Para la seguridad de la aplicación, lo ideal sería establecer unos middlewares en las cabeceras para que el back solo acepte peticiones del frontend y de ningún otro sitio externo.

## Arquitectura del frontend

El frontend usa React con Vite como compilador. La parte visual es muy sencilla y el proceso de interactuar con el usuario es la más sencilla de todas.
Se cogen los datos del formulario con el evento input y se mandan al backend con el botón de enviar.
Después el backend responderá a las dudas del usuario en un campo con el atributo readonly para que no pueda interaccionar con él.

La parte de mayor complejidad sería la función de registro, que no se ha implementado para dar prioridad al chat, pero sería crear un formulario donde se validaran los datos con javascript antes de enviarlos al backend para comprobar si las credenciales del usuario son correctas.

Esa misma validación también habría que realizarla en el chat y también se podría añadir secciones más llamativas, como botones con las dudas frecuentes si el backend no ha podido procesar las dudas del usuario.

La arquitectura de la aplicación también es muy sencilla, los componentes del chat irían separados según funcionalidad y si hubiera que pasar información de un componente a otro se realizaría a través de las props.

En el tema de test, lo ideal seria implementarlos con librerías como chai o mocha para comprobar que las validaciones tanto del chat como de la función de login funcionan perfectamente. Esos tests irían en su propio directorio para que no se mezclaran con el directorio principal de la aplicación