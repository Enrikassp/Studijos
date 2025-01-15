import express from "express";
import * as scooterHistoryController from "../controllers/scoters-history-controller.js";
const router = express.Router();

router.get("/", scooterHistoryController.getAllScootersHistory);
router.get("/:id", scooterHistoryController.getScooterHistoryById);
router.post(
  "/start-lease/:scooterId",
  scooterHistoryController.createScooterHistoryRecord
); //pradeda nuomą
router.post("/end-lease/:scooterId", scooterHistoryController.endScooterLease); //pabaigia nuomą
export default router;
