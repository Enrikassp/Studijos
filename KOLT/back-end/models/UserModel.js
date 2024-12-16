import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";

const UserModel = sequelize.define("User", {
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	hashedPassword: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	salt: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	iban: {
		type: DataTypes.STRING,
		defaultValue: null,
		allowNull: true,
	},
	address: {
		type: DataTypes.STRING,
		defaultValue: null,
		allowNull: true,
	},
});

export default UserModel;
