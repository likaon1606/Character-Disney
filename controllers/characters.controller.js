const dotenv = require('dotenv');

// Models
const { Character } = require('../models/character.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

dotenv.config({ path: './config.env' });

// CRUD'S
const getAllCharacters = catchAsync(async (req, res, next) => {
    const characters = await Character.findAll({
        attributes: {exclude: ['age', 'weight', 'history']},
   }); 

    res.status(200).json({
        characters,
   });
});

const getCharacterId = catchAsync(async (req, res, next) => {
    const { character } = req;

    res.status(200).json({
        character,
    });
});

const createCharacter = catchAsync(async (req, res, next) => {
    const { name, age, weight, history } = req.body;

    // INSERT INTO...
    const newCharacter = await Character.create({
        name,
        age,
        weight,
        history,
    });

    res.status(201).json({
        status: 'success', newCharacter
    });

});

const updateCharacter = catchAsync(async (req, res, next) => {
    const { character } = req;
    const { name, age, weight, history } = req.body;

    await character.update({ name, age, weight, history });

    res.status(200).json({ status: 'success' });
});

const deleteCharacter = catchAsync(async (req, res, next) => {
    const { character } = req;

    await character.update({ status: 'deleted'});

    res.status(200).json({
        status: 'success',
    });
});



module.exports = { 
    getAllCharacters,
    createCharacter,
    getCharacterId,
    updateCharacter,
    deleteCharacter,
}