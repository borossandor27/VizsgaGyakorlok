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
    database: 'rock_zenekarok_70s',
    port: 3306
});

// vegpontok 

app.get('/api/zenekar', (req, res) => {
    db.query("SELECT zenekarok.id,`nev`,`stilus_id`,`orszag`,`varos`,`aktiv_evek`,`tagok`,`legsikeresebb_album`,`kep_url`, stilusok.stilus_neve FROM `zenekarok` JOIN stilusok ON zenekarok.stilus_id=stilusok.id;", (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving vegpontok');
        } else {
            res.status(200).json(results);
        }
    });
});

app.get('/api/zenekar/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM zenekarok WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving vegpont');
        } else if (results.length === 0) {
            res.status(404).send('Vegpont not found');
        } else {
            res.json(results[0]);
        }
    });
});

// Új zenekar hozzáadása (7. feladat)
app.post('/api/ujzenekar', (req, res) => {
    const {
        id,
        nev,
        stilus_id,
        orszag,
        varos,
        aktiv_evek,
        tagok,
        legsikeresebb_album,
        kep_url
    } = req.body;
    // Ellenőrzés, hogy minden szükséges adat megvan-e
    if (!id || !nev || !stilus_id || !orszag || !varos || !aktiv_evek || !tagok || !legsikeresebb_album || !kep_url) {
        return res.status(400).json({ error: 'Hiányzó adat(ok)! Minden mező kötelező.' });
    }
    const sql = `
    INSERT INTO zenekarok 
    (id, nev, stilus_id, orszag, varos, aktiv_evek, tagok, legsikeresebb_album, kep_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

    const values = [
        id,
        nev,
        stilus_id,
        orszag,
        varos,
        aktiv_evek,
        tagok,
        legsikeresebb_album,
        kep_url
    ];

    // Ellenőrizzük, hogy a stilus_id létezik-e
    db.query('SELECT id FROM stilusok WHERE id = ?', [stilus_id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error checking stilus_id');
        }
        if (results.length === 0) {
            return res.status(400).send('Invalid stilus_id');
        }
    });
    // Ha minden rendben van, beszúrjuk az új zenekart
    db.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error creating vegpont');
        } else {
            res.status(201).json({ message: 'Sikeres mentés', insertedId: results.insertId });
        }
    });
});

app.put('/api/zenekar/:id', (req, res) => {
    const id = req.params.id;
    const vegpont = req.body;
    db.query('UPDATE vegpontok SET ? WHERE id = ?', [vegpont, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating vegpont');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Vegpont not found');
        } else {
            res.json({ id, ...vegpont });
        }
    });
});

app.delete('/api/zenekar/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM vegpontok WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting vegpont');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Vegpont not found');
        } else {
            res.status(204).send();
        }
    });
});

db.connect((err) => {
    if (err) {
        console.error('Nem sikerült kapcsolódni az adatbázishoz:', err.message);
        process.exit(1); // Kilép a program, ha hiba van 
    }

    console.log('Sikeres adatbázis kapcsolat.');

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}); 
