const pool = require("../config/db");
const bcrypt = require("bcryptjs");

class User {
  static async create({ name, username, email, password, no_telp }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const profileImage = `https://robohash.org/${encodeURIComponent(
      email
    )}.png`;
    const role = "user";

    const [result] = await pool.execute(
      "INSERT INTO users (name, username, email, password, no_telp, profile_image, role) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, username, email, hashedPassword, no_telp, profileImage, role]
    );

    return result.insertId;
  }

  static async updateUser(userId, updates) {
    const setString = Object.keys(updates)
      .map((key) => `${key} = ?`)
      .join(", ");
    const values = [...Object.values(updates), userId];

    const [result] = await pool.execute(
      `UPDATE users SET ${setString} WHERE id = ?`,
      values
    );

    return result;
  }

  static async findByEmail(email) {
    const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  }

  static async updateTimestamp(userId) {
    await pool.execute("UPDATE users SET updated_at = NOW() WHERE id = ?", [
      userId,
    ]);
  }

  static async getUserProfile(userId) {
    const [rows] = await pool.execute(
      "SELECT name, email, no_telp, profile_image, role FROM users WHERE id = ?",
      [userId]
    );
    return rows[0];
  }
}

module.exports = User;
