const express = require("express");
const server = express();
server.use(express.json());
server.listen(8080, () => {
  console.log("Sėkmingai paleistas serveris su prievadu 8080");
});

let skacius = 0;

let todos = [];

server.get("/todos", (req, res) => {
  res.status(200).send(todos);
});
server.post("/todos", (req, res) => {
  todos.push(req.body);
  res.status(200).send("OK");
});
server.get("/a", (req, res) => {
  skacius++;
  res.status(200).send({ a: "Hello world!", skacius: skacius });
});
server.post("/a", (req, res) => {
  res.json("A Post");
});
server.get("/b", (req, res) => {
  res.send("B");
});
