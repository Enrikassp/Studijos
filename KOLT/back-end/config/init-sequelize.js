import ScooterModel from "../models/ScooterModel.js";
import ScooterLeaseHistoryModel from "../models/ScooterLeaseHistoryModel.js";
import sequelize from "./sequelize.js";

await sequelize.sync({ alter: true });
