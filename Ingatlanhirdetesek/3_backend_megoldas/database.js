import mysql from 'mysql2/promise';
// Környezeti változók betöltése (opcionális, de ajánlott)
import dotenv from 'dotenv';
dotenv.config();

// MySQL pool létrehozása
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ingatlanok',
  waitForConnections: true, // várakozzon-e a kapcsolatokra
  connectionLimit: 10, // egyidejűleg max 10 kapcsolat
  queueLimit: 0 // végtelen várakozási sor
});

export default pool;