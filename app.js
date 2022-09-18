const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Controllers
const { globalErrorHandler } = require('./controllers/errors.controllers');

// Routers
const { charactersRouter } = require('./routes/characters.routes');
const { moviesRouter } = require('./routes/movies.routes');
const { gendersRouter } = require('./routes/genders.routes');
const { usersRouter } = require('./routes/users.routes');

// Models
// !Change for init model
// const { Character } = require('./models/character.model');
// const { Movie } = require('./models/movie.model');
// const { Gender } = require('./models/gender.model');
// const { User } = require('./models/users.model');

// Init express app
const app = express();

// Enable Cors
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Enable incoming Form-Data
app.use(express.urlencoded({ extended: true }));

// Limit IP requests
const limiter = rateLimit({
    max: 10000,
    windowMs: 1 * 60 * 60 * 1000, // 1hr
    message: 'Too many requests from this IP',
});

app.use(limiter);

// Enpoints
app.use('/api/v1/characters', charactersRouter);
app.use('/api/v1/movies', moviesRouter);
app.use('/api/v1/genders', gendersRouter);
app.use('/api/v1/users', usersRouter);

// Global error handler
app.use('*', globalErrorHandler);

module.exports = {app};