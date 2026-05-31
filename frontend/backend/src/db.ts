import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
});

export async function initDB() {
  try {
    const conn = await pool.getConnection();
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS enquiries (
        id           INT AUTO_INCREMENT PRIMARY KEY,
        full_name    VARCHAR(255) NOT NULL,
        organisation VARCHAR(255) NOT NULL,
        role         VARCHAR(255),
        email        VARCHAR(255) NOT NULL,
        phone        VARCHAR(50),
        country      VARCHAR(100) NOT NULL,
        enquiry_type VARCHAR(50) NOT NULL,
        message      TEXT NOT NULL,
        attachment_url VARCHAR(500),
        created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    conn.release();
    console.log("Database initialized successfully");
  } catch (err) {
    console.error("Database initialization failed:", err);
  }
}
