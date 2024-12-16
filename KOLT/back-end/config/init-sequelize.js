import ScooterModel from "../models/ScooterModel.js";
import ScooterLeaseHistoryModel from "../models/ScooterLeaseHistoryModel.js";
import UserModel from "../models/UserModel.js";
import sequelize from "./sequelize.js";

await sequelize.sync();
