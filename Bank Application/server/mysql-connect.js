import mysql from "mysql2/promise";
let connection;
try {
  connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "banking",
    port: 3306,
    password: "",
  });
} catch (err) {
  console.log(err);
}

export default connection;
