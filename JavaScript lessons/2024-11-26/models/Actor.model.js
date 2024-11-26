import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Actor = sequelize.define(
  "actor",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "aktoriai",
    timestamps: false,
  }
);

export default Actor;
