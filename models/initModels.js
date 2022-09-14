const { Movie } = require('./movie.model');
const { Character } = require('./character.model');
const { Gender } = require('./gender.model');


const initModels = () => {

// 1 movie <--> M Characters
Movie.hasMany(Character);
Character.belongsTo(Movie);

// 1 character <--> M Movies
// Character.hasMany(Movie, { foreignKey: 'movieId' });
// Movie.belongsTo(Character);

// 1 gender <--> 1 Movie
// Movie.hasOne(Gender, { foreignKey: 'genderId' });
// Gender.belongsTo(Movie);

};

module.exports = { initModels };