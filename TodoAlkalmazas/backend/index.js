import express from 'express'; //-- Jelezzük, hogy szeretnénk használni az express-t
import cors from 'cors';
import mysql from 'mysql2'; //-- Jelezzük, hogy szeretnénk használni a mysql2-t
const app = express(); //-- Létrehozzuk az express alkalmazást a minta alapján
app.use(cors()); //-- Engedélyezzük a CORS-t, hogy a frontend és a backend kommunikálhasson
app.use(express.json()); //-- Engedélyezzük a JSON formátumú adatok küldését a backendnek

const db = mysql.createConnection({ //-- Létrehozzuk a kapcsolatot az adatbázissal
    host: 'localhost', //-- Az adatbázis hostja
    user: 'root', //-- Az adatbázis felhasznaloneve
    password: '', //-- Az adatbázis jelszava
    database: 'esemenyek', //-- Az adatbázis neve
    port: 3306 //-- Az adatbázis portja
}); 

app.get('/users', (req,res)=>{
    let sql = 'SELECT * FROM users'; //-- SQL lekérdezés, ami az összes felhasználót lekéri
    db.query(sql, (err, result) => { //-- Lekérdezzük az adatbázist
        if (err) { //-- Ha hiba történt
            console.log(err); //-- Kiírjuk a hibát a konzolra
            res.status(500).send({'error': 'Internal Server Error'}); //-- Visszaküldjük a hibát a kliensnek
        } else { //-- Ha minden rendben van
            res.status(200).json(result); //-- Visszaküldjük az eredményt a kliensnek
        }
    });
})
app.get('/users/:id', (req,res)=>{ //-- Lekérdezzük a felhasználót az ID alapján
    let sql = 'SELECT * FROM users WHERE user_id = ?'; //-- SQL lekérdezés, ami a felhasználót az ID alapján lekéri
    db.query(sql, [req.params.id], (err, result) => { //-- Lekérdezzük az adatbázist
        if (err) { //-- Ha hiba történt
            console.log(err); //-- Kiírjuk a hibát a konzolra
            res.status(500).send({'error': 'Internal Server Error'}); //-- Visszaküldjük a hibát a kliensnek
        } else { //-- Ha minden rendben van
            res.status(200).json(result); //-- Visszaküldjük az eredményt a kliensnek
        }
    });
})
app.post('/users', (req,res)=>{ //-- Új felhasználó létrehozása
    let sql = 'INSERT INTO users (name, email) VALUES (?, ?)'; //-- SQL lekérdezés, ami új felhasználót hoz létre
    db.query(sql, [req.body.name, req.body.email], (err, result) => { //-- Lekérdezzük az adatbázist
        if (err) { //-- Ha hiba történt
            console.log(err); //-- Kiírjuk a hibát a konzolra
            res.status(500).send({'error': 'Internal Server Error'}); //-- Visszaküldjük a hibát a kliensnek
        } else { //-- Ha minden rendben van
            res.status(201).json(result); //-- Visszaküldjük az eredményt a kliensnek
        }
    });
})

app.listen(3000, () => { //-- Az alkalmazás futtatásához
    console.log("Server is running on http://localhost:3000"); //-- A közvetlen készítés utána megjeleníteni a konzolon, hogy a szerver fut
});