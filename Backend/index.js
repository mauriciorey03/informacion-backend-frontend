// INDEX.JS
// Backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Configuración del servidor
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Importar rutas
const obituarioRoutes = require('./routes/obituario');

// Usar rutas
app.use('/api/obituarios', obituarioRoutes);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});