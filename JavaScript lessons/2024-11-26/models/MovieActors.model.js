import sequelize from "../config/sequelize.js";
import Movie from "./Movie.model.js";
import Actor from "./Actor.model.js";
import { DataTypes } from "sequelize";

const MovieActors = sequelize.define(
  "MovieActors",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  { timestamps: false }
);
Movie.belongsToMany(Actor, {
  through: MovieActors,
  foreignKey: "movieId",
  otherKey: "actorId",
});
Actor.belongsToMany(Movie, {
  through: MovieActors,
  foreignKey: "actorId",
  otherKey: "movieId",
});
await sequelize.sync();
export default MovieActors;
