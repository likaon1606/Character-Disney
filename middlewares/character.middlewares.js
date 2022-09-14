const { Character } = require("../models/character.model");

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const characterExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;
  
    const character = await Character.findOne({
      where: { id, status: 'active' },
      attributes: { exclude: ['password'] },
    });
  
    if (!character) {
      return next(new AppError('Character does not exist with given Id', 404));
    }
  
    // Add character data to the req object
    req.character = character;
    next();
  });

module.exports = {
    characterExists,
};