const express = require('express');

// Midlewares
const {
    genderExists,
} = require('../middlewares/gender.middlewares');

const {
    createGenderValidations,
    checkValidations,
  } = require('../middlewares/validations.middlewares');

// Controllers
const {
    getAllGenders,
    getGenderId,
    createGender,
    updateGender,
    deleteGender,
} = require('../controllers/gender.controllers');

const router = express.Router();

// Call CRUD´S
router.post(
    '/',
    createGenderValidations,
    checkValidations,
    createGender,
);

router.get('/', getAllGenders);

router
  .route('/:id')
  .get(genderExists, getGenderId)
  .patch(genderExists, updateGender)
  .delete(genderExists,  deleteGender);

module.exports = { gendersRouter: router };
