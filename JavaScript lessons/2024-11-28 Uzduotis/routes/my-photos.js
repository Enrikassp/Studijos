import fs from "fs";
import root from "../lib/dirname.js";
import path from "path";
import express from "express";

const router = express.Router();

router.get("/my-photos", (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }

  const username = req.session.user;
  const publicFolder = path.join(root, "public", username);
  const privateFolder = path.join(root, "private", username);

  const photos = {
    public: [],
    private: [],
  };

  fs.readdir(publicFolder, (err, files) => {
    if (err) {
      console.error("Error reading public folder:", err);
    } else {
      files.forEach((file) => {
        photos.public.push({
          path: `/public/${username}/${file}`,
          name: file,
        });
      });
    }

    fs.readdir(privateFolder, (err, files) => {
      if (err) {
        console.error("Error reading private folder:", err);
      } else {
        files.forEach((file) => {
          photos.private.push({
            path: `/private/${username}/${file}`,
            name: file,
          });
        });
      }

      console.log(photos);
      res.json(photos);
    });
  });
});
export default router;
