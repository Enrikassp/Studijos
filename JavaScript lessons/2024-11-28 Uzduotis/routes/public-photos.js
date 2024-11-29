import fs from "fs";
import root from "../lib/dirname.js";
import path from "path";
import express from "express";
const router = express.Router();
router.get("/public-photos", (req, res) => {
  const publicFolder = path.join(root, "public");

  fs.readdir(publicFolder, (err, folders) => {
    if (err) {
      console.error("Error reading the directory:", err);
      return res.status(500).json({ error: "Error reading photos" });
    }

    const photos = [];

    folders.forEach((folder) => {
      const userFolderPath = path.join(publicFolder, folder);

      if (fs.statSync(userFolderPath).isDirectory()) {
        const photoFiles = fs
          .readdirSync(userFolderPath)
          .filter(
            (file) =>
              file.endsWith(".jpg") ||
              file.endsWith(".jpeg") ||
              file.endsWith(".png")
          );

        photoFiles.forEach((photo) => {
          photos.push({
            photo: path.join(folder, photo),
            author: folder,
          });
        });
      }
    });

    res.json({ photos });
  });
});
export default router;
