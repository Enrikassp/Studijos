import db from "./mysql-connect.js";

export async function getOneUser(username) {
  const sql = `SELECT * FROM users WHERE username=?`;
  const [[data]] = await db.query(sql, [username]);

  return data;
}

export async function removeMoneyFromUser(userid, balance) {
  const sql = `UPDATE users SET balance = balance - ? WHERE id = ?`;

  try {
    const [result] = await db.query(sql, [balance, userid]);

    if (result.affectedRows === 0) {
      throw new Error("User not found or balance update failed.");
    }

    return { success: true, message: "Balance updated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function addMoneyFromUser(userid, balance) {
  const sql = `UPDATE users SET balance = balance + ? WHERE id = ?`;

  try {
    const [result] = await db.query(sql, [balance, userid]);

    if (result.affectedRows === 0) {
      throw new Error("User not found or balance update failed.");
    }

    return { success: true, message: "Balance updated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function createNewUser(username, password, balance) {
  const sql = `INSERT INTO users (username, password, balance) VALUES (?,?,?)`;

  try {
    const [result] = await db.query(sql, [username, password, balance]);
    return {
      success: true,
      userId: result.insertId,
    };
  } catch (error) {
    console.error("Error creating new user:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}
