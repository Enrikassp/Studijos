import express from "express";
import { getAllUsers, getUserById } from "../models/User.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  res.status(200).send(allUsers);
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const selectedUser = await getUserById(id);

    if (selectedUser.length === 0) throw new Error("User not found!");
    res.status(200).send(selectedUser);
  } catch (error) {
    if (error.message === "User not found!")
      return res.status(404).json({ message: error.message });
  }
});

export default router;
