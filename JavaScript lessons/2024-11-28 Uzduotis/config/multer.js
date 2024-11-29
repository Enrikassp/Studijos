import multer from "multer";
import path from "path";
import root from "../lib/dirname.js";
import fs from "fs";

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    if (!req.session.isLoggedIn) {
      return cb(new Error("User is not logged in"));
    }

    const user = req.session.user;
    if (!user) {
      return cb(new Error("User not found in session"));
    }

    const isPrivate = req.body.privateSave === "on";
    const mainPath = isPrivate ? "private" : "public";
    const userFolderPath = path.join(root, mainPath, user);

    fs.mkdir(userFolderPath, { recursive: true }, (err) => {
      if (err) return cb(err);
      cb(null, userFolderPath);
    });
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
