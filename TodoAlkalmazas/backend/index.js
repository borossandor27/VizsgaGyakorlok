import express from 'express'; 
import cors from 'cors'; 
import mysql from 'mysql2'; 
 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 
 
const db = mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: '', 
    port: 3306 
}); 
 
// v�gpontok 
 
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); 
}); 
