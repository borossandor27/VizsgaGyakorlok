// src/db/pool.js
// MySQL kapcsolatkészlet létrehozása a mysql2 könyvtárral

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     Number(process.env.DB_PORT) || 3306,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME     || 'epitmeny_db',
  waitForConnections: true,
  connectionLimit:    10,
  charset: 'utf8mb4',
});

export default pool;
