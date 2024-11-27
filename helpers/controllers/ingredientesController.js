const Ingredientes = require('../models/ingredientes');

// Función para agregar un nuevo ingrediente
const agregarIngrediente = async (req, res) => {
  try {
    const nuevoIngrediente = await Ingredientes.create(req.body);
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

module.exports = {
  agregarIngrediente,
  mostrarIngredientes
};