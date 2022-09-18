const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Character = db.define("character", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    characterImgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    history: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // movieId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
    status: {
        defaultValue: 'active',
        type: DataTypes.STRING,
    },
});

module.exports = { Character };