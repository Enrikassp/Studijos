import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
  },
  lastName: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  email: { type: DataTypes.STRING },
});

export default User;
