const express = require('express');
const router = express.Router();
const AppError = require('./errors/AppError');
const logger = require('./logger/logger'); // Importa el logger


// Importar los controladores
const recetasController = require('./controllers/recetasController');
const ingredientesController = require('./controllers/ingredientesController');
const categoriasController = require('./controllers/categoriasController');

// Importar los middlewares de validación
const validateIngredienteData = require('./middlewares/validateIngredienteData');
const validateCategoriaData = require('./middlewares/validateCategoriaData');
const validateRecetaData = require('./middlewares/validateRecetaData');


// Ruta para agregar una nueva categoría
router.post('/categorias', validateCategoriaData, async (req, res) => {
  try {
    const { categoria_name, categoria_descripcion } = req.body;
    const nuevaCategoria = await categoriasController.agregarCategoria(categoria_name, categoria_descripcion);
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para mostrar todas las categorías
router.get('/categorias', async (req, res, next) => {
  try {
    // Supongamos que tienes una función para obtener categorías
    const categorias = await categoriasController.mostrarCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    logger.error('Error al obtener categorías: ', error);
    next(new AppError('No se pudieron obtener las categorías', 500));
  }
});

// Ruta para eliminar una categoría
router.delete('/categorias/:id', async (req, res) => {
  try {
    const categoriaId = req.params.id;
    await categoriasController.deleteCategoria(categoriaId);
    res.status(200).json({ message: `Categoría con ID ${categoriaId} eliminada.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para actualizar una categoría
router.put('/categorias/:id', validateCategoriaData, async (req, res) => {
  try {
    const categoriaId = req.params.id;
    const updatedData = req.body;
    await categoriasController.updateCategoria(categoriaId, updatedData);
    res.status(200).json({ message: `Categoría con ID ${categoriaId} actualizada.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para agregar un nuevo ingrediente
router.post('/ingredientes', validateIngredienteData, async (req, res) => {
  try {
    const { ingredientes_name, unidad_medida, recetaId } = req.body;
    const nuevoIngrediente = await ingredientesController.agregarIngrediente(ingredientes_name, unidad_medida, recetaId);
    res.status(201).json(nuevoIngrediente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para mostrar todos los ingredientes
router.get('/ingredientes', async (req, res, next) => {
  try {
    const ingredientes = await ingredientesController.mostrarIngredientes();
    res.status(200).json(ingredientes);
  } catch (error) {
    logger.error('Error al obtener ingredientes: ', error);
    next(new AppError('No se pudieron obtener los ingredientes', 500));
  }
});

// Ruta para eliminar un ingrediente
router.delete('/ingredientes/:id', async (req, res) => {
  try {
    const ingredienteId = req.params.id;
    await ingredientesController.deleteIngrediente(ingredienteId);
    res.status(200).json({ message: `Ingrediente con ID ${ingredienteId} eliminado.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para actualizar un ingrediente
router.put('/ingredientes/:id', validateIngredienteData, async (req, res) => {
  try {
    const ingredienteId = req.params.id;
    const updatedData = req.body;
    await ingredientesController.updateIngrediente(ingredienteId, updatedData);
    res.status(200).json({ message: `Ingrediente con ID ${ingredienteId} actualizado.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rutas para recetas
// Ruta para agregar una nueva receta
router.post('/recetas', validateRecetaData, async (req, res) => {
  try {
    const { receta_name, receta_descripcion, receta_instrucciones, tiempo_preparacion, categoriaId } = req.body;
    const nuevaReceta = await recetasController.agregarReceta(receta_name, receta_descripcion, receta_instrucciones, tiempo_preparacion, categoriaId);
    res.status(201).json(nuevaReceta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/recetas', async (req, res, next) => {
  try {
    const recetas = await recetasController.mostrarRecetas();
    res.status(200).json(recetas);
  } catch (error) {
    logger.error('Error al obtener recetas: ', error);
    next(new AppError('No se pudieron obtener las recetas', 500));
  }
});

// Ruta para eliminar una receta
router.delete('/recetas/:id', async (req, res) => {
  try {
    const recetaId = req.params.id;
    await recetasController.deleteReceta(recetaId);
    res.status(200).json({ message: `Receta con ID ${recetaId} eliminada.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para actualizar una receta
router.put('/recetas/:id', validateRecetaData, async (req, res) => {
  try {
    const recetaId = req.params.id;
    const updatedData = req.body;
    await recetasController.updateReceta(recetaId, updatedData);
    res.status(200).json({ message: `Receta con ID ${recetaId} actualizada.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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

/**
 * @swagger
 * /categorias/{id}:
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría a eliminar
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error al eliminar la categoría
 */
router.delete('/categorias/:id', async (req, res) => {
  try {
    const categoriaId = req.params.id;
    await categoriasController.deleteCategoria(categoriaId);
    res.status(200).json({ message: `Categoría con ID ${categoriaId} eliminada.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /categorias/{id}:
 *   put:
 *     summary: Actualizar una categoría
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría a actualizar
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
 *       200:
 *         description: Categoría actualizada exitosamente
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error al actualizar la categoría
 */
router.put('/categorias/:id', async (req, res) => {
  try {
    const categoriaId = req.params.id;
    const updatedData = req.body;
    await categoriasController.updateCategoria(categoriaId, updatedData);
    res.status(200).json({ message: `Categoría con ID ${categoriaId} actualizada.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /ingredientes/{id}:
 *   delete:
 *     summary: Eliminar un ingrediente
 *     tags: [Ingredientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del ingrediente a eliminar
 *     responses:
 *       200:
 *         description: Ingrediente eliminado exitosamente
 *       404:
 *         description: Ingrediente no encontrado
 *       500:
 *         description: Error al eliminar el ingrediente
 */
router.delete('/ingredientes/:id', async (req, res) => {
  try {
    const ingredienteId = req.params.id;
    await ingredientesController.deleteIngrediente(ingredienteId);
    res.status(200).json({ message: `Ingrediente con ID ${ingredienteId} eliminado.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /ingredientes/{id}:
 *   put:
 *     summary: Actualizar un ingrediente
 *     tags: [Ingredientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del ingrediente a actualizar
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
 *                 type: string
 *     responses:
 *       200:
 *         description: Ingrediente actualizado exitosamente
 *       404:
 *         description: Ingrediente no encontrado
 *       500:
 *         description: Error al actualizar el ingrediente
 */
router.put('/ingredientes/:id', async (req, res) => {
  try {
    const ingredienteId = req.params.id;
    const updatedData = req.body;
    await ingredientesController.updateIngrediente(ingredienteId, updatedData);
    res.status(200).json({ message: `Ingrediente con ID ${ingredienteId} actualizado.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /recetas/{id}:
 *   delete:
 *     summary: Eliminar una receta
 *     tags: [Recetas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la receta a eliminar
 *     responses:
 *       200:
 *         description: Receta eliminada exitosamente
 *       404:
 *         description: Receta no encontrada
 *       500:
 *         description: Error al eliminar la receta
 */
router.delete('/recetas/:id', async (req, res) => {
  try {
    const recetaId = req.params.id;
    await recetasController.deleteReceta(recetaId);
    res.status(200).json({ message: `Receta con ID ${recetaId} eliminada.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /recetas/{id}:
 *   put:
 *     summary: Actualizar una receta
 *     tags: [Recetas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la receta a actualizar
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
 *     responses:
 *       200:
 *         description: Receta actualizada exitosamente
 *       404:
 *         description: Receta no encontrada
 *       500:
 *         description: Error al actualizar la receta
 */
router.put('/recetas/:id', async (req, res) => {
  try {
    const recetaId = req.params.id;
    const updatedData = req.body;
    await recetasController.updateReceta(recetaId, updatedData);
    res.status(200).json({ message: `Receta con ID ${recetaId} actualizada.` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;