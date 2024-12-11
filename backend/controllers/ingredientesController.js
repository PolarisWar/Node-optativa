const Ingredientes = require('../models/ingredientes');

const agregarIngrediente = async (ingredientes_name, unidad_medida, recetaId) => {
  if (!ingredientes_name || !unidad_medida || !recetaId) {
    throw new Error("Nombre, unidad de medida y recetaId son requeridos.");
  }
  return await Ingredientes.create({ ingredientes_name, unidad_medida, recetaId });
};

const mostrarIngredientes = async () => {
  return await Ingredientes.findAll();
};

async function deleteIngrediente(ingredienteId) {
  await Ingredientes.destroy({
    where: { id: ingredienteId }
  });
}

async function updateIngrediente(ingredienteId, updatedData) {
  await Ingredientes.update(updatedData, {
    where: { id: ingredienteId }
  });
}

module.exports = {
  agregarIngrediente,
  mostrarIngredientes,
  deleteIngrediente,
  updateIngrediente
};