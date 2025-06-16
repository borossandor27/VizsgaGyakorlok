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
    // A kérés törzséből kinyerjük az adatokat
    const {
        nev,
        stilus_id,
        orszag,
        varos,
        aktiv_evek,
        tagok,
        legsikeresebb_album,
        kep_url
    } = req.body; // Az 'id' eltávolítva innen

    // Ellenőrzés, hogy minden *szükséges* adat megvan-e (az 'id' már nem kötelező)
    if (!nev || !stilus_id || !orszag || !varos || !aktiv_evek || !tagok || !legsikeresebb_album || !kep_url) {
        return res.status(400).json({ error: 'Hiányzó adat(ok)! Minden mező kötelező, kivéve az id.' });
    }

    // Ellenőrizzük, hogy a stilus_id létezik-e
    db.query('SELECT id FROM stilusok WHERE id = ?', [stilus_id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error checking stilus_id');
        }
        if (results.length === 0) {
            return res.status(400).send('Invalid stilus_id');
        }

        // Ha a stilus_id érvényes, folytatjuk a beszúrással
        const sql = `
            INSERT INTO zenekarok 
            (nev, stilus_id, orszag, varos, aktiv_evek, tagok, legsikeresebb_album, kep_url)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        `; // Az 'id' oszlop eltávolítva az INSERT-ből

        const values = [
            nev,
            stilus_id,
            orszag,
            varos,
            aktiv_evek,
            tagok,
            legsikeresebb_album,
            kep_url
        ]; // Az 'id' érték eltávolítva a values tömbből, ehhez az id tulajdonságát AUTO_INCREMENT-re állítottuk az adatbázisban

        // Beszúrjuk az új zenekart
        db.query(sql, values, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error creating zenekar'); // Hibaüzenet pontosítása
            } else {
                res.status(201).json({ message: 'Sikeres mentés', insertedId: results.insertId });
            }
        });
    });
});
// Stílusok lekérése (8. feladat)
app.get('/api/stilusok', (req, res) => {
    db.query('SELECT * FROM stilusok', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving stilusok');
        } else {
            res.status(200).json(results);
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
