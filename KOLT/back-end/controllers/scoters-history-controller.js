import ScooterHistoryModel from "../models/ScooterLeaseHistoryModel.js";
import ScooterModel from "../models/ScooterModel.js";
import { ScooterLeaseHistoryCreateValidation } from "../utils/validations/ScooterLeaseHistorySchema.js";
import sequelize from "../config/sequelize.js";

export async function getAllScootersHistory(req, res) {
  const allScotersHistory = await ScooterHistoryModel.findAll();
  res.status(200).json(allScotersHistory);
}
export async function getScooterHistoryById(req, res) {
  const { id } = req.params;
  if (!id || isNaN(id))
    return res
      .status(400)
      .json({ message: "Scooter ID was not provided or was in wrong format" });

  const foundScooterHistory = await ScooterHistoryModel.findAll({
    where: { scooterId: id },
  });
  res.status(200).json(foundScooterHistory);
}
export async function createScooterHistoryRecord(req, res) {
  const { scooterId } = req.params;
  if (!scooterId || isNaN(scooterId))
    return res
      .status(400)
      .json({ message: "Scooter ID was not provided or was in wrong format" });
  const foundScooter = await ScooterModel.findOne({
    where: { id: scooterId },
  });
  if (!foundScooter)
    return res.status(404).json({ message: "Scooter was not found" });

  // Pradiniai istorijos duomenys
  const newScooterHistoryData = {
    startingRideKm: foundScooter.totalRide,
    city: req.body.city,
    scooterId: scooterId,
  };
  const validationResult = ScooterLeaseHistoryCreateValidation.safeParse(
    newScooterHistoryData
  );
  // Jei pradinių istorinių duomenų validacija nepraeina, returninam status 400
  if (!validationResult.success)
    return res.status(400).json({ errors: validationResult.error.issues });
  const updatedData = await sequelize.transaction(async (t) => {
    const updatedScooter = await ScooterModel.update(
      {
        isBusy: true,
        lastUseTime: new Date(),
      },
      {
        where: {
          id: scooterId,
        },
      },

      { transaction: t }
    );
    const newScooterHistory = await ScooterHistoryModel.create(
      newScooterHistoryData,
      { transaction: t }
    );
    return { updatedScooter, newScooterHistory };
  });
  res.status(201).json(updatedData.newScooterHistory);
}
export async function endScooterLease(req, res) {
  const { scooterId } = req.params;
  if (!scooterId || isNaN(scooterId))
    return res
      .status(400)
      .json({ message: "Scooter ID was not provided or was in wrong format" });
  const foundScooter = await ScooterModel.findOne({
    where: { id: scooterId },
  });
  if (!foundScooter)
    return res.status(404).json({ message: "Scooter was not found" });

  const history = await ScooterHistoryModel.findOne({
    where: {
      scooterId,
      endingRideKm: null,
    },
  });
  if (!history)
    return res.status(400).json({ message: "Scooter is not leased" });
  // Kiek km buvo nuvažiuota (informacija iš front-endo)
  const { rideKm } = req.body;
  console.log("Nuvažiuota kilometrų" + rideKm);
  // Nuomos pradžios ir pabaigos datos
  const startDate = history.startingLeaseDate;
  const endDate = new Date();

  // Apskaičiavimas kiek minučių truko kelionė
  const minutes = Math.round((endDate - startDate) / (1000 * 60));

  // Nuomos kainos apskaičiavimas pagal formule: kiekNuvaziuota * kmTarifas + kiekMinTrukoKelione * minTarifas;
  const leasePrice =
    rideKm * foundScooter.rideTariffPerKm +
    minutes * foundScooter.leaseTariffPerMin;

  // Kokia rida buvo kelionės pabaigoje
  const endingRideKm = history.startingRideKm + rideKm; //neapskaiciuoja nes pareina undefined
  console.log(endingRideKm);
  // Atnaujiname įrašų duomenų bazėje informaciją
  history.endingLeaseDate = endDate;
  history.leasingPrice = leasePrice;
  history.endingRideKm = endingRideKm;
  await history.save();

  foundScooter.isBusy = false;
  foundScooter.totalRide = endingRideKm;
  await foundScooter.save();

  res
    .status(200)
    .json({ history: history.toJSON(), scooter: foundScooter.toJSON() });
}
