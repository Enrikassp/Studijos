import db from "./mysql-connect.js";

export async function getOneUser(username) {
  const sql = `SELECT * FROM users WHERE username='${username}'`;
  const [[data]] = await db.query(sql);

  return data;
}

export async function removeMoneyFromUser(userid, balance) {
  const sql = `UPDATE users SET balance = balance - ${balance} WHERE id = ${userid}`;

  try {
    const [result] = await db.query(sql);

    if (result.affectedRows === 0) {
      throw new Error("User not found or balance update failed.");
    }

    return { success: true, message: "Balance updated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function addMoneyFromUser(userid, balance) {
  const sql = `UPDATE users SET balance = balance + ${balance} WHERE id = ${userid}`;

  try {
    const [result] = await db.query(sql);

    if (result.affectedRows === 0) {
      throw new Error("User not found or balance update failed.");
    }

    return { success: true, message: "Balance updated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
