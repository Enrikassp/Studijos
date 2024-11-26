import MovieActors from "./models/MovieActors.model.js";
import Movie from "./models/Movie.model.js";
import Actor from "./models/Actor.model.js";

// const newMovie = await Movie.create({
//   title: "Gladiator II",
//   imdb: 7,
// });

// const actors = [
//   {
//     firstName: "Paul",
//     lastName: "Mescal",
//   },
//   {
//     firstName: "Denzel",
//     lastName: "Washington",
//   },
//   {
//     firstName: "Pedro",
//     lastName: "Pascal",
//   },
//   {
//     firstName: "Connie",
//     lastName: "Nielsen",
//   },
//   {
//     firstName: "Joseph",
//     lastName: "Quinn",
//   },
// ];

// await Actor.bulkCreate(actors);

// await MovieActors.create({
//   movieId: 1,
//   actorId: 5,
// });

const movieActors = await Movie.findAll({
  include: [Actor],
});

console.log(movieActors.map((movie) => movie.toJSON()));
