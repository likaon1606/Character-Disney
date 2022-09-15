// Utils
const { catchAsync } = require('../utils/catchAsync');

// Models
const { Movie } = require('../models/movie.model');
const { Character } = require('../models/character.model');
const { Gender } = require('../models/gender.model');

// CRUD'S
const getAllMovies = catchAsync(async (req, res, next) => {
    const movie = await Movie.findAll({
        attributes: {exclude: ['qualification']},
        include: [{ model: Character }, { model: Gender }],
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
    const { movieImgUrl, title, creationDate, qualification, characterId, genderId} = req.body;

    // INSERT INTO...
    const newMovie = await Movie.create({
        movieImgUrl,
        title,
        creationDate,
        qualification,
        characterId,
        genderId,
    });

    res.status(201).json({
        status: 'success', newMovie,
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