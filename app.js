require ('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes'); // Importa el archivo de rutas
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig'); // Importa la configuración de Swagger

app.use(cors(corsOptions));
app.use(express.json()); // Corrige el uso de express.json()
app.use('/', routes); // Usa las rutas importadas

// Configura Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

// Instancia de Sequelize para conectarse a la base de datos
const sequelize = require("./helpers/database.js");

// Importaciones de los modelos 
const Categorias = require("./helpers/models/categorias"); 
const Ingredientes = require("./helpers/models/ingredientes"); 
const Recetas = require("./helpers/models/recetas");

// Sincronizar los modelos para verificar la conexión con la base de datos
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Todos los modelos se sincronizaron correctamente.");
  })
  .catch((err) => {
    console.log("Ha ocurrido un error al sincronizar los modelos: ", err);
  });