const { Movie } = require('../models/movie.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const movieExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;
  
    const movie = await Movie.findOne({
      where: { id, status: 'active' },
    });
  
    if (!movie) {
      return next(new AppError('Movie does not exist with given Id', 404));
    }
  
    // Add movie data to the req object
    req.movie = movie;
    next();
  });

module.exports = {
    movieExists,
};