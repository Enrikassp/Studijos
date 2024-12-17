import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";
import ScooterModel from "./ScooterModel.js";

const ScooterLeaseHistoryModel = sequelize.define(
  "scooter_lease_history",
  {
    startingRideKm: {
      type: DataTypes.FLOAT,
    },
    endingRideKm: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
    },
    startingLeaseDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    endingLeaseDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    leasingPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);
ScooterModel.hasMany(ScooterLeaseHistoryModel, {
  foreignKey: { allowNull: false, name: "scooterId" },
});

export default ScooterLeaseHistoryModel;
