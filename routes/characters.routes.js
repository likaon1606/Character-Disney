const express = require('express');

// Midlewares
const {
    characterExists,
} = require('../middlewares/character.middlewares');

const {
    createCharacterValidations,
    checkValidations,
  } = require('../middlewares/validations.middlewares');

// Controllers
const {
    getAllCharacters,
    getCharacterId,
    createCharacter,
    updateCharacter,
    deleteCharacter,
} = require('../controllers/characters.controller');

const router = express.Router();

// Call CRUD´S
router.post(
    '/',
    createCharacterValidations,
    checkValidations,
    createCharacter,
);

router.get('/', getAllCharacters);

router
  .route('/:id')
  .get(characterExists, getCharacterId)
  .patch(characterExists, updateCharacter)
  .delete(characterExists,  deleteCharacter);

module.exports = { charactersRouter: router };
