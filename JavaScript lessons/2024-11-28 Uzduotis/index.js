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

app.get("/", (req, res) => {
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(root, "/pages/public.html"));
  } else {
    res.redirect("/login");
  }
});

app.get("/login", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect("/");
  } else {
    res.sendFile(path.join(root, "/pages/login.html"));
  }
});

app.get("/register", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect("/");
  } else {
    res.sendFile(path.join(root, "/pages/register.html"));
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Error during logout");
    }

    res.redirect("/login");
  });
});

app.get("/protected", (req, res) => {
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(root, "/pages/protected.html"));
  } else {
    res.redirect("/login");
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
