const Categorias = require('../models/categorias');

// Función para agregar una nueva categoría
const agregarCategoria = async (req, res) => {
  try {
    const nuevaCategoria = await Categorias.create(req.body);
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

module.exports = {
  agregarCategoria,
  mostrarCategorias
};