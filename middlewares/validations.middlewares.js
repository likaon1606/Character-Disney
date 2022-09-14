const { body, validationResult } = require('express-validator');

// Utils
const { AppError } = require('../utils/appError');

// Validations users
const createUserValidations = [
    body('name').notEmpty().withMessage('Name cannot be empty'),
    body('email')
      .notEmpty()
      .withMessage('Email cannot be empty')
      .isEmail()
      .withMessage('Must be a valid email'),
    body('password')
      .notEmpty()
      .withMessage('Password cannot be empty')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long'),
  ];

// Validations characters
const createCharacterValidations = [
    body('name').notEmpty().withMessage('Name cannot be empty'),
    body('age').notEmpty().withMessage('Age cannot be empty and must be numeric'),
    body('weight').notEmpty().withMessage('Weight be empty and must be Integer'),
    body('history').notEmpty().withMessage('History be empty')
        .isLength({ min: 10, max:40 })
        .withMessage('Minimum 10 characters and maximum 40')
];

// Validation movies
const createMovieValidations = [
    body('title').notEmpty().withMessage('Title cannot be empty'),
    body('creationDate').notEmpty().withMessage('CreationDate cannot be empty'),
    body('qualification')
        .notEmpty()
        .withMessage('Qualification cannot be empty')
        .isNumeric({ min: 1, max: 5 }),
];

// Validations genders
const createGenderValidations = [
    body('name').notEmpty().withMessage('Name cannot be empty'),
];    

const checkValidations = (req, res, next) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        const messages = errors.array().map(({ msg }) => msg);

        // [msg, msg, msg] -> 'msg. msg. msg'
        const errorMsg = messages.join('. ');

        return next(new AppError(errorMsg, 400));
    }
    next();
};

module.exports = {
    createUserValidations,
    createCharacterValidations,
    checkValidations,
    createMovieValidations,
    createGenderValidations,
};