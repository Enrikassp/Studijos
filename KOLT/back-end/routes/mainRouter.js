import express from "express";
import scootersRouter from "./scootersRouter.js";
import scootersLeaseHistoryRouter from "./scootersLeaseHistoryRouter.js";
const router = express.Router();

router.use("/scooters", scootersRouter);
router.use("/scooters-lease-history", scootersLeaseHistoryRouter);

export default router;
