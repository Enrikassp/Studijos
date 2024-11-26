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
	ownerId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: true,
	},
});

// 1:1
User.hasOne(Address, {
	foreignKey: {
		name: "ownerId",
	},
});
Address.belongsTo(User, {
	foreignKey: {
		name: "ownerId",
	},
});

await Address.sync({ alter: true });
await User.sync({ alter: true });

export default Address;
