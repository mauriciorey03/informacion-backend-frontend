# informacion-backend-frontend

# Tutorial para desarrollar una App Web de Obituario

## Tecnologías utilizadas
- Backend: Node.js
- Base de datos: MySQL (a través de Docker)
- Frontend: React Native

## Estructura de organización
- backend/
  - config/
    - database.js
  - models/
    - obituario.js
  - routes/
    - obituario.js
  - app.js
  - package.json
- frontend/
  - src/
    - components/
      - ObituarioForm.js
      - ObituarioList.js
    - screens/
      - HomeScreen.js
    - App.js
  - package.json
- docker-compose.yml

## Paso a paso

1. Configuración del entorno:
   - Instala Node.js en tu sistema.
   - Instala Docker para ejecutar MySQL.

2. Configuración de la base de datos:
   - Crea un archivo `docker-compose.yml` en la raíz del proyecto con la configuración de MySQL, algunas de ellas `npm install express mysql mysql2`.
   - Ejecuta `docker-compose up -d` para iniciar el contenedor de MySQL.

3. Desarrollo del backend:
   - Crea una carpeta `backend` y navega a ella.
   - Inicializa un nuevo proyecto de Node.js con `npm init`.
   - Instala las dependencias necesarias, como Express y MySQL.
   - Crea un archivo `index.js` como punto de entrada del servidor.
   - Configura la conexión a la base de datos MySQL en `config/database.js`.
   - Crea la base de datos MySQL.
        CÓDIGO:
        CREATE TABLE Obituarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(255) NOT NULL,
            fechaFallecimiento DATE NOT NULL,
            horaFallecimiento TIME NOT NULL
          );
   - Crea un modelo para el obituario en `models/obituario.js`. (Automáticamente genera timestamp, pero se deshabilita de la BD)
   - Define las rutas y controladores para las operaciones CRUD de obituarios en `routes/obituario.js`. 
   - Inicia el servidor Node.js ejecutando `node index.js`.
   - Publica datos de prueba y verifica con Postman en la URL ROUTES http://localhost:3000/api/obituarios/:id

4. Desarrollo del frontend con React Native:
   - Crea una carpeta `frontend` y navega a ella.
   - Inicializa un nuevo proyecto de React Native con `npx react-native init ObituarioApp`.
   - Instala las dependencias necesarias, como Axios para las solicitudes HTTP.
   - Crea componentes reutilizables, como `ObituarioForm` y `ObituarioList`, en la carpeta `src/components`.
   - Crea una pantalla principal `HomeScreen` en la carpeta `src/screens`.
   - Configura la navegación y las rutas en `App.js`.
   - Implementa la lógica para enviar los datos del formulario al backend y mostrar la lista de obituarios.

5. Integración y pruebas:
   - Asegúrate de que el backend y el frontend se estén ejecutando correctamente.
   - Realiza pruebas exhaustivas para verificar el funcionamiento de la aplicación.
   - Verifica que los datos se estén guardando correctamente en la base de datos MySQL.
   - Prueba la aplicación en diferentes plataformas (iOS y Android) utilizando React Native.

6. Despliegue:
   - Prepara la aplicación para el despliegue optimizando y empaquetando el código.
   - Configura un servidor para alojar el backend Node.js.
   - Configura una instancia de MySQL en el servidor de producción.
   - Despliega la aplicación React Native en las tiendas de aplicaciones correspondientes (App Store y Google Play Store).

Este es un tutorial paso a paso para desarrollar una aplicación web de obituario utilizando Node.js, MySQL y React Native. Recuerda que puedes personalizar y expandir cada paso según tus necesidades específicas.