const Categorias = require('../models/categorias');

// Función para agregar una nueva categoría
const agregarCategoria = async (req, res) => {
  try {
    const { categoria_name, categoria_descripcion } = req.body;
    if (!categoria_name || !categoria_descripcion) {
      return res.status(400).json({ error: "Nombre y descripción son requeridos." });
    }
    const nuevaCategoria = await Categorias.create({ categoria_name, categoria_descripcion });
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para mostrar detalles de todas las categorías
const mostrarCategorias = async (req, res) => {
  try {
    const categorias = await Categorias.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function deleteCategoria(categoriaId) {
  try {
    await Categorias.destroy({
      where: { id: categoriaId }
    });
    console.log(`Categoría con ID ${categoriaId} eliminada.`);
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
  }
}

async function updateCategoria(categoriaId, updatedData) {
  try {
    await Categorias.update(updatedData, {
      where: { id: categoriaId }
    });
    console.log(`Categoría con ID ${categoriaId} actualizada.`);
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
  }
}

module.exports = {
  agregarCategoria,
  mostrarCategorias,
  deleteCategoria,
  updateCategoria
};