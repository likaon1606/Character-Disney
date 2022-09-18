const { Movie } = require('./movie.model');
const { Character } = require('./character.model');
const { Gender } = require('./gender.model');

const initModels = () => {

// 1 movie <--> M Characters
Movie.hasMany(Character, { foreignKey: 'movieId' });
Character.belongsTo(Movie);

// 1 movie <--> 1 Gender
Movie.hasMany(Gender, { foreignKey: 'movieId' });
Gender.belongsTo(Movie);

//1 character <--> M Movies
// Character.hasMany(Movie, { foreignKey: 'characterId' });
// Movie.belongsTo(Character);

};

module.exports = { initModels };