const express = require('express');
const router = express.Router();

// Importar los controladores
const categoriasController = require('./helpers/controllers/categoriasController');
const recetasController = require('./helpers/controllers/recetasController');
const ingredientesController = require('./helpers/controllers/ingredientesController');

// Ruta para la página principal
router.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

/**
 * @swagger
 * /categorias:
 *   post:
 *     summary: Agregar una nueva categoría
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoria_name:
 *                 type: string
 *               categoria_descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría creada exitosamente
 *       400:
 *         description: Error al crear la categoría
 */
router.post('/categorias', categoriasController.agregarCategoria);

/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorías
 *       500:
 *         description: Error al obtener las categorías
 */
router.get('/categorias', categoriasController.mostrarCategorias);

/**
 * @swagger
 * /recetas:
 *   post:
 *     summary: Agregar una nueva receta
 *     tags: [Recetas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               receta_name:
 *                 type: string
 *               receta_descripcion:
 *                 type: string
 *               receta_instrucciones:
 *                 type: string
 *               tiempo_preparacion:
 *                 type: integer
 *               categoriaId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Receta creada exitosamente
 *       400:
 *         description: Error al crear la receta
 */
router.post('/recetas', recetasController.agregarReceta);

/**
 * @swagger
 * /recetas:
 *   get:
 *     summary: Obtener todas las recetas
 *     tags: [Recetas]
 *     responses:
 *       200:
 *         description: Lista de recetas
 *       500:
 *         description: Error al obtener las recetas
 */
router.get('/recetas', recetasController.mostrarRecetas);

/**
 * @swagger
 * /ingredientes:
 *   post:
 *     summary: Agregar un nuevo ingrediente
 *     tags: [Ingredientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ingredientes_name:
 *                 type: string
 *               unidad_medida:
 *                 type: integer
 *               recetaId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Ingrediente creado exitosamente
 *       400:
 *         description: Error al crear el ingrediente
 */
router.post('/ingredientes', ingredientesController.agregarIngrediente);

/**
 * @swagger
 * /ingredientes:
 *   get:
 *     summary: Obtener todos los ingredientes
 *     tags: [Ingredientes]
 *     responses:
 *       200:
 *         description: Lista de ingredientes
 *       500:
 *         description: Error al obtener los ingredientes
 */
router.get('/ingredientes', ingredientesController.mostrarIngredientes);

module.exports = router;