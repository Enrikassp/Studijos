import express from "express";
import path from "path";
import root from "../lib/dirname.js";
const router = express.Router();

router.get("/login", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect("/");
  } else {
    res.sendFile(path.join(root, "/pages/login.html"));
  }
});
router.get("/", (req, res) => {
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(root, "/pages/public.html"));
  } else {
    res.redirect("/login");
  }
});

router.get("/register", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect("/");
  } else {
    res.sendFile(path.join(root, "/pages/register.html"));
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Error during logout");
    }

    res.redirect("/login");
  });
});

router.get("/protected", (req, res) => {
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(root, "/pages/protected.html"));
  } else {
    res.redirect("/login");
  }
});
export default router;
