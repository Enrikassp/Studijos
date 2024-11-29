import express from "express";
import User from "../models/User.model.js";

const router = express.Router();

router.post("/login-user", async (req, res) => {
  const { user, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { user } });
    if (!existingUser) {
      return res.status(400).json({ error: "User does not exist" });
    }

    if (existingUser.password !== password) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    req.session.isLoggedIn = true;
    req.session.user = user;

    res.redirect("/");
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Error logging in" });
  }
});

router.post("/register-user", async (req, res) => {
  const { user, password, repeatedPassword } = req.body;

  if (user.length <= 3) {
    return res
      .status(400)
      .json({ error: "Prisijungimo vardas turi būti bent 4 simbolių" });
  }

  if (password.length <= 5) {
    return res
      .status(400)
      .json({ error: "Prisijungimo slaptažodis turi būti bent 6 simbolių" });
  }

  if (password !== repeatedPassword) {
    return res.status(400).json({ error: "Slaptažodžiai nesutampa" });
  }

  try {
    const existingUser = await User.findOne({ where: { user } });
    if (existingUser) {
      return res.status(400).json({ error: "Vartotojas jau egzistuoja" });
    }

    await User.create({
      user,
      password,
    });

    res.redirect("/login");
  } catch (error) {
    console.error("Error while registering user:", error);
    res.status(500).json({ error: "Įvyko klaida kuriant vartotoją" });
  }
});

export default router;
