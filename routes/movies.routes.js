const express = require('express');

// Midlewares
const { protectToken } = require('../middlewares/users.middlewares');

const {
    movieExists,
} = require('../middlewares/movie.middlewares');

const {
    createMovieValidations,
    checkValidations,
  } = require('../middlewares/validations.middlewares');

// Controllers
const {
    getAllMovies,
    getMovieId,
    createMovie,
    updateMovie,
    deleteMovie,
} = require('../controllers/movies.controllers');  

const router = express.Router();

// Apply protectToken middleware
router.use(protectToken);

// Call CRUD´S
router.post(
    '/',
    createMovieValidations,
    checkValidations,
    createMovie,
);

router.get('/', getAllMovies);

router
  .route('/:id')
  .get(movieExists, getMovieId)
  .patch(movieExists, updateMovie)
  .delete(movieExists, deleteMovie);

module.exports = { moviesRouter: router };