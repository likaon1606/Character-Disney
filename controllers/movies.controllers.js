const dotenv = require('dotenv');

// Models
const { Movie } = require('../models/movie.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

dotenv.config({ path: './config.env' });

// CRUD'S
const getAllMovies = catchAsync(async (req, res, next) => {
    const movie = await Movie.findAll({
        attributes: {exclude: ['qualification']},
   }); 

    res.status(200).json({
        movie,
   });
});

const getMovieId = catchAsync(async (req, res, next) => {
    const { movie } = req;

    res.status(200).json({
        movie,
    });
});

const createMovie = catchAsync(async (req, res, next) => {
    const { movieImgUrl, title, creationDate, qualification } = req.body;

    // INSERT INTO...
    const newMovie = await Movie.create({
        movieImgUrl,
        title,
        creationDate,
        qualification,
    });

    res.status(201).json({
        status: 'success', newMovie
    });

});

const updateMovie = catchAsync(async (req, res, next) => {
    const { movie } = req;
    const { movieImgUrl, title, creationDate, qualification, } = req.body;

    await movie.update({ movieImgUrl,
        title,
        creationDate,
        qualification, });

    res.status(200).json({ status: 'success' });
});

const deleteMovie = catchAsync(async (req, res, next) => {
    const { movie } = req;

    await movie.update({ status: 'deleted'});

    res.status(200).json({
        status: 'success',
    });
});


module.exports = {
    getAllMovies,
    getMovieId,
    createMovie,
    updateMovie,
    deleteMovie
};