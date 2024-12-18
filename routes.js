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