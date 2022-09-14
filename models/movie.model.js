const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Movie = db.define('movie', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    movieImgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    qualification: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        defaultValue: 'active',
        type: DataTypes.STRING,
    },
    characterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // genderId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
});

module.exports = { Movie };