import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";

const ScooterModel = sequelize.define(
	"scooter",
	{
		isBusy: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		}, //sukurimo metu neprideti
		registrationCode: {
			type: DataTypes.STRING,
			unique: true,
		},
		lastUseTime: {
			type: DataTypes.DATE,
			allowNull: true,
		}, //sukurimo metu neprideti
		totalRide: {
			type: DataTypes.FLOAT,
			defaultValue: 0,
		}, //sukurimo metu neprideti
		rideTariffPerKm: {
			type: DataTypes.FLOAT,
		},
		leaseTariffPerMin: {
			type: DataTypes.FLOAT,
		},
	},
	{ timestamps: false }
);

export default ScooterModel;
