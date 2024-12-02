import express from "express";
import path from "path";
import bodyParser from "body-parser";
import root from "./lib/dirname.js";
import sequelize from "./config/sequelize.js";
import session from "express-session";
import authRoutes from "./routes/auth.js";
import myPhotos from "./routes/my-photos.js";
import publicPhotos from "./routes/public-photos.js";
import fileUploadRoutes from "./routes/file-upload.js";
import basicRoutes from "./routes/basicRoutes.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "testas123",
    resave: false,
    saveUninitialized: true,
  })
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

app.use(express.static(path.join(root, "public")));
app.use("/auth", authRoutes);
app.use("/photos", myPhotos);
app.use("/public", express.static(path.join(root, "public")));
app.use("/private", express.static(path.join(root, "private")));
app.use("/photos", publicPhotos);
app.use(fileUploadRoutes);
app.use(basicRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
