import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Paspirtuku nuomos istorija");
});

export default router;
