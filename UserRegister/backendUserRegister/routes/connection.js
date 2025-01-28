import mysql from 'mysql2';
import dotenv from 'dotenv/config';


const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'userregister',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
console.log('Connection pool created');
export default pool.promise();