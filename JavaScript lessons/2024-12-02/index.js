import express from "express";
import session from "express-session";
import mysql from "mysql2/promise";
import mysqlSessionStore from "express-mysql-session";
import dotenv from "dotenv";
import User from "./models/User.model.js";
import path from "path";
import root from "./lib/dirname.js";

await User.sync({ alter: true });
dotenv.config();
const app = express();

const MysqlStore = mysqlSessionStore(session);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const sessionStore = new MysqlStore({}, pool);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req.session);
  if (!req.session.isLoggedIn) return res.send("Pirmiausia turite prisijungti");
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }
  res.send(`Sveiki! ${req.session.views}`);
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.redirect("/login");

  if (user.email === req.body.email && user.password === req.body.password) {
    req.session.isLoggedIn = true;
    req.session.email = user.email;
    req.session.role = user.role;
    return res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ where: { email: req.body.email } });

  if (user) return res.redirect("/register");

  const newUser = await User.create(req.body);
  req.session.isLoggedIn = true;
  req.session.email = newUser.email;
  req.session.role = newUser.role;
  res.redirect("/");
});

app.get("/api/logout", (req, res) => {
  if (!req.session.isLoggedIn) return res.redirect("/login");
  else {
    req.session.destroy();
    res.redirect("/login");
  }
});

app.get("/register", async (req, res) => {
  return res.status(200).sendFile(path.join(root, "public", "register.html"));
});

app.get("/login", async (req, res) => {
  return res.status(200).sendFile(path.join(root, "public", "login.html"));
});

app.listen(3000, () => {
  console.log("Aplikacija sėkmingai pasileido. http://localhost:3000");
});
