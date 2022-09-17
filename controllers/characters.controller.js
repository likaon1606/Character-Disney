const dotenv = require('dotenv');
const { ref, uploadBytes } = require('firebase/storage');

// Models
const { Character } = require('../models/character.model');
const { Movie } = require('../models/movie.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { storage } = require('../utils/firebase');

dotenv.config({ path: './config.env' });

// CRUD'S
const getAllCharacters = catchAsync(async (req, res, next) => {
    const characters = await Character.findAll({
        attributes: {exclude: ['age', 'weight', 'history']},
        include: { model: Movie },
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
    const { name, age, weight, history, movieId } = req.body;

    const imgRef = ref(storage, `characters/${req.file.originalname}`);
    const imgUpLoaded = await uploadBytes(imgRef, req.file.buffer);

    // INSERT INTO...
    const newCharacter = await Character.create({
        name,
        age,
        weight,
        history,
        movieId,
        characterImgUrl: imgUpLoaded.metadata.fullPath,
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