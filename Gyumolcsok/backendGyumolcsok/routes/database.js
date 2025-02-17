import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gyumolcsok',
    waitForConnections: true, // Ha nincs szabad kapcsolat, várakozzon
    connectionLimit: 10,   // Maximális egyidejű kapcsolatok száma
    queueLimit: 0 // Várakozási sor korlátlan

});
console.log('Database connection established!');
export default connection;