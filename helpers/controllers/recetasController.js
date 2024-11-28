const Recetas = require('../models/recetas');

// Función para agregar una nueva receta
const agregarReceta = async (req, res) => {
  try {
    const { receta_name, receta_descripcion, receta_instrucciones, tiempo_preparacion, categoriaId } = req.body;
    if (!receta_name || !receta_descripcion || !receta_instrucciones || !tiempo_preparacion || !categoriaId) {
      return res.status(400).json({ error: "Todos los campos son requeridos." });
    }
    const nuevaReceta = await Recetas.create({ receta_name, receta_descripcion, receta_instrucciones, tiempo_preparacion, categoriaId });
    res.status(201).json(nuevaReceta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para mostrar detalles de todas las recetas
const mostrarRecetas = async (req, res) => {
  try {
    const recetas = await Recetas.findAll();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
async function deleteReceta(recetaId) {
  try {
    await Recetas.destroy({
      where: { id: recetaId }
    });
    console.log(`Receta con ID ${recetaId} eliminada.`);
  } catch (error) {
    console.error("Error al eliminar la receta:", error);
  }
}

async function updateReceta(recetaId, updatedData) {
  try {
    await Recetas.update(updatedData, {
      where: { id: recetaId }
    });
    console.log(`Receta con ID ${recetaId} actualizada.`);
  } catch (error) {
    console.error("Error al actualizar la receta:", error);
  }
}

module.exports = {
  agregarReceta,
  mostrarRecetas,
  deleteReceta,
  updateReceta
};