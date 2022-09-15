const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Gender = db.define('gender', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        defaultValue: 'active',
        type: DataTypes.STRING,
    },
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = { Gender };