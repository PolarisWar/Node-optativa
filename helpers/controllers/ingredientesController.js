const Ingredientes = require('../models/ingredientes');

// Función para agregar un nuevo ingrediente
const agregarIngrediente = async (req, res) => {
  try {
    const { ingredientes_name, unidad_medida, recetaId } = req.body;
    if (!ingredientes_name || !unidad_medida || !recetaId) {
      return res.status(400).json({ error: "Nombre, unidad de medida y recetaId son requeridos." });
    }
    const nuevoIngrediente = await Ingredientes.create({ ingredientes_name, unidad_medida, recetaId });
    res.status(201).json(nuevoIngrediente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para mostrar detalles de todos los ingredientes
const mostrarIngredientes = async (req, res) => {
  try {
    const ingredientes = await Ingredientes.findAll();
    res.status(200).json(ingredientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function deleteIngrediente(ingredienteId) {
  try {
    await Ingredientes.destroy({
      where: { id: ingredienteId }
    });
    console.log(`Ingrediente con ID ${ingredienteId} eliminado.`);
  } catch (error) {
    console.error("Error al eliminar el ingrediente:", error);
  }
}

async function updateIngrediente(ingredienteId, updatedData) {
  try {
    await Ingredientes.update(updatedData, {
      where: { id: ingredienteId }
    });
    console.log(`Ingrediente con ID ${ingredienteId} actualizado.`);
  } catch (error) {
    console.error("Error al actualizar el ingrediente:", error);
  }
}

module.exports = {
  agregarIngrediente,
  mostrarIngredientes,
  deleteIngrediente,
  updateIngrediente
};