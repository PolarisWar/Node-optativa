const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");

const recetas = sequelize.define("recetas", {
    receta_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receta_descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    receta_instrucciones: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    tiempo_preparacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      timestamps: true,
      paranoid: true,
});
module.exports = Recetas;
