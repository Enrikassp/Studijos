import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const User = sequelize.define(
  "user",
  {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM("USER", "MODERATOR", "ADMIN"),
      defaultValue: "USER",
    },
  },
  { timestamps: false }
);

export default User;
