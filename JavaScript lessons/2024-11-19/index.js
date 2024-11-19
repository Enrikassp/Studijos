import db from "./mysql-connect.js";

async function getAllUsers() {
  const sql = "SELECT * FROM `users`";
  const [data] = await db.query(sql);

  return data;
}

async function getOneUser(id) {
  const sql = `SELECT * FROM users WHERE id=${id}`;
  const [[data]] = await db.query(sql);

  return data;
}

async function insertIntoUsers(user) {
  const sql = `INSERT INTO users (username, password) VALUES('${user.username}','${user.password}')`;
  const response = await db.query(sql);

  return response;
}

async function updateUser(id, updatedFields) {
  const fieldsToUpdate = Object.keys(updatedFields)
    .map((key) => `${key} = '${updatedFields[key]}'`)
    .join(", ");
  const sql = `UPDATE users SET ${fieldsToUpdate} WHERE id = ${id}`;
  const data = await db.query(sql);

  return data;
}

async function deleteUser(id) {
  const sql = `DELETE FROM users WHERE id = ${id}`;
  const data = await db.query(sql);
  console.log(data);
  return data;
}

// Visu naudotoju gavimas
// const allUsers = await getAllUsers();
// console.log(allUsers);

// Naudotojo iterpimas
// const newUser = {
//   username: "Lukas",
//   password: "84127421764",
// };
// await insertIntoUsers(newUser);

// Vieno naudotojo gavimas
// const user = await getOneUser(2);
// console.log(user);

// Naudotojo redagavimas
// updateUser(8, { username: "Petriukas", password: "jasdjisahdsa" });

// Naudotojo ištrinimas
// deleteUser(8);
