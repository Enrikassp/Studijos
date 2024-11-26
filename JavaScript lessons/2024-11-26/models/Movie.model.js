import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Movie = sequelize.define(
  "movie",
  {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    imdb: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  },
  {
    tableName: "filmai",
    timestamps: false,
  }
);

export default Movie;
