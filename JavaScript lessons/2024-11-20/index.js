import { getAllUsers } from "./models/User.model.js";
import express from "express";
import userRouter from "./routes/user.router.js";
const app = express();

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Serveris sėkmingai paleistas");
});
