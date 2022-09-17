const express = require('express');

// Midlewares
const {
    characterExists,
} = require('../middlewares/character.middlewares');

const { protectToken } = require('../middlewares/users.middlewares');

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

// Utils
const { upload } = require('../utils/multer');

const router = express.Router();

// Apply protectToken middleware
router.use(protectToken);

// Call CRUD´S
router.post(
    '/',
    upload.single('profileimg'),
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
