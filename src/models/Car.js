const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

// En Mayúsculas y singular      // en minúsculas y singular
const Car = sequelize.define('car', {
    // Definimos las columnas aquí
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING(100)
        // allowNull por defecto esta en true
    },
    year: {
        type: DataTypes.INTEGER,
    },
    color:{
        type: DataTypes.STRING
    }
});

module.exports = Car;