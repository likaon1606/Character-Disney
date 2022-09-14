const { Gender } = require('../models/gender.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const genderExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;
  
    const gender = await Gender.findOne({
      where: { id, status: 'active' },
    });
  
    if (!gender) {
      return next(new AppError('Gender does not exist with given Id', 404));
    }
  
    // Add gender data to the req object
    req.gender = gender;
    next();
  });

module.exports = {
    genderExists,
};