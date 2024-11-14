import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { readFromUsersFile, writeToUsersFile } from "./file-io.js";
const server = express();
// express.json() - middleware kuris pritaiko palaikuma priimti JSON duomenis
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(cors());
server.listen(8080, () => {
  console.log("Serveris sėkmingai pasileido!. http://localhost:8080");
});

const idGen = generateId(3);
const users = [
  { id: 1, name: "Jonas", age: 27 },
  { id: 2, name: "Saulius", age: 32 },
  { id: 3, name: "Petras", age: 22 },
];

// GET - Gauti visus userius
server.get("/users", (req, res) => {
  const users = readFromUsersFile();
  res.status(200).send(users);
});

// GET - Gauti konkretų id pasinaudojant id
server.get("/users/:id", (req, res) => {
  const users = readFromUsersFile();
  const id = Number(req.params.id);
  const user = users.find((usr) => usr.id === id);

  if (!user) return res.status(404).json({ message: "Naudotojas nerastas..." });

  res.status(200).send(user);
});

// POST
server.post("/users", (req, res) => {
  const users = readFromUsersFile();
  const newUser = req.body;

  if (!newUser.age || !newUser.name) {
    return res.status(400).json("not valid user schema");
  }

  newUser.id = idGen.next().value;
  users.push(newUser);
  writeToUsersFile(users);
  // res.status(201).json(newUser);
  res.redirect("http://127.0.0.1:5500/index.html");
});

// PUT
server.put("/users/:id", (req, res) => {
  const users = readFromUsersFile();
  const id = Number(req.params.id);
  const foundUser = users.find((usr) => usr.id === id);

  if (!foundUser)
    return res.status(404).json({ message: "Naudotojas nerastas..." });
  const updateUserData = req.body;

  if (updateUserData.name) foundUser.name = updateUserData.name;
  if (updateUserData.age) foundUser.age = updateUserData.age;
  writeToUsersFile(users);
  res.status(201).json(foundUser);
});

// DELETE

server.delete("/users/:id", (req, res) => {
  const users = readFromUsersFile();
  const id = Number(req.params.id);
  const index = users.findIndex((usr) => usr.id === id);

  console.log(index);
  if (index === -1) return res.status(404).send("Naudotojas nerastas...");

  users.splice(index, 1);
  writeToUsersFile(users);
  res.status(204);
});

function* generateId(startId = 0) {
  while (true) {
    startId++;
    yield startId;
  }
}
