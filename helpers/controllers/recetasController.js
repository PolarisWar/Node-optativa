const Recetas = require('../models/recetas');

// Función para agregar una nueva receta
const agregarReceta = async (req, res) => {
  try {
    const nuevaReceta = await Recetas.create(req.body);
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

module.exports = {
  agregarReceta,
  mostrarRecetas
};