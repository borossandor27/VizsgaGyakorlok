import mysql from 'mysql2/promise';
require('dotenv').config();
export default async function connect()  {
    

    const pool = await mysql.createPool({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        database: process.env.DB_NAME || 'userregister',
    });

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('MySQL connected...');
        connection.release();
    });

    return pool;
}
