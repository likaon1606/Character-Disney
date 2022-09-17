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
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        defaultValue: 'active',
        type: DataTypes.STRING,
    },
});

module.exports = { Gender };