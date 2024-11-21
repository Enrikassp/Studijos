import { Sequelize } from "sequelize";

const sequelize = new Sequelize("forum_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Connection has ben established successfully.");
} catch (error) {
  console.log("Unable to connect to the database:", error);
}

export default sequelize;
