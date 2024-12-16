import express from "express";
import scootersRouter from "./scootersRouter.js";
import scootersHistoryRouter from "./scootersLeaseHistoryRouter.js";
import authRouter from "./authRouter.js";
const router = express.Router();

router.use("/scooters", scootersRouter);
router.use("/scooters-lease-history", scootersHistoryRouter);
router.use("/auth", authRouter);

export default router;
