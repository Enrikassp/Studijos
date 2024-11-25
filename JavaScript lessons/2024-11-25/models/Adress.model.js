import { DataTypes } from "sequelize";
import User from "./User.model.js";
import sequelize from "../config/sequelize.js";

const Address = sequelize.define("address", {
  country: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
});

User.hasOne(Address);
Address.belongsTo(User);
await User.sync({ alter: true });
await Address.sync({ alter: true });
export default Address;
