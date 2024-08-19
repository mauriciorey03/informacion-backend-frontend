// OBITUARIO.JS
// Backend/models/obituario.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Obituario = sequelize.define("Obituario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaFallecimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    horaFallecimiento: {
        type: DataTypes.TIME,
        allowNull: false,
    },
}, {
    timestamps: false
});

module.exports = Obituario;
