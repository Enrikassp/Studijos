import db from "../config-db.js";

export async function getAllUsers() {
  const selectQuery = `SELECT * FROM users`;
  const result = await db.all(selectQuery);
  return result;
}

export async function getUserById(id) {
  const selectQuery = `SELECT * FROM users WHERE id = ${id}`;
  const result = await db.all(selectQuery);
  return result;
}

export async function createNewUser(user) {
  const addQuery = `INSERT INTO users (name, email) VALUES (?, ?)`;
  const result = await db.run(addQuery, [user.name, user.email]);
  return result;
}

export async function updateUser(id, updatedFields) {
  const updatingFieldsString = Object.keys(updatedFields)
    .map((key) => `${key} = ?`)
    .join(", ");
  const paramsArray = Object.keys(updatedFields).map(
    (key) => updatedFields[key]
  );
  const updateQuery = `UPDATE users SET ${updatingFieldsString} WHERE id = ?`;
  const result = await db.run(updateQuery, [...paramsArray, id]);
  return result;
}

export async function deleteUser(id) {
  const deleteQuary = `DELETE FROM users WHERE id = ?`;
  const result = await db.run(deleteQuary, [id]);
  return result;
}
