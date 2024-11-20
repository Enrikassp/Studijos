import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  addMoneyFromUser,
  createNewUser,
  getOneUser,
  removeMoneyFromUser,
} from "./mysql-functions.js";

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(express.json());

server.listen(8080, () => {
  console.log("Express serveris Sėkmingai pasileido. http://localhost:8080");
});

server.get("/login", async (req, res) => {
  const loginData = JSON.parse(req.query.loginData);
  const findedUser = await getOneUser(loginData.username);

  if (!findedUser) {
    return res.status(400).json({ message: "Nėra tokio vartojo." });
  }

  if (findedUser.password !== loginData.password) {
    return res.status(400).json({ message: "Netinkamas slaptažodis" });
  }

  res.status(200).json(findedUser);
});

server.post("/user/removeMoney", async (req, res) => {
  const data = req.body;
  const removeMoney = await removeMoneyFromUser(
    data.userId,
    data.withdrawAmount
  );
  if (!removeMoney.success) {
    return res.status(400).json({ message: removeMoney.message });
  }
  res.status(201).json({ message: removeMoney.message });
});

server.post("/user/addMoney", async (req, res) => {
  const data = req.body;
  const addMoney = await addMoneyFromUser(data.userId, data.withdrawAmount);
  if (!addMoney.success) {
    res.status(400).json({ message: addMoney.message });
  }
  res.status(201).json({ message: addMoney.message });
});

server.post("/user/create", async (req, res) => {
  const data = req.body;
  const findedUser = await getOneUser(data.username);

  if (findedUser) {
    return res.status(400).json({
      message: "Negalime sukurti vartotojo su tokiu pačiu vardu",
      variant: "error",
    });
  }
  const createUser = await createNewUser(data.username, data.password, 0);
  if (!createUser.success) {
    res.status(400).json({ message: createUser.message });
  }

  res
    .status(201)
    .json({ message: "Sėkmingai sukurtas vartotjas", variant: "success" });
});
