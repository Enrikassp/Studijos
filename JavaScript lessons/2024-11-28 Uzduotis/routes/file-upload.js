import express from "express";
import path from "path";
import upload from "../config/multer.js";
import root from "../lib/dirname.js";

const router = express.Router();

router.get("/add-file", (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  res.sendFile(path.join(root, "/pages/add-file.html"));
});

router.post("/upload-file", upload.single("fileUpload"), (req, res) => {
  res.redirect("/add-file");
});

export default router;
