import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nevnapkereso'
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});
function honapszamToNev(honapszam) {
    if (honapszam === null || honapszam === undefined) {
        return '';
    }
    switch (honapszam) {
        case 1:
            return 'január';
        case 2:
            return 'február';
        case 3:
            return 'március';
        case 4:
            return 'április';
        case 5:
            return 'május';
        case 6:
            return 'június';
        case 7:
            return 'július';
        case 8:
            return 'augusztus';
        case 9:
            return 'szeptember';
        case 10:
            return 'október';
        case 11:
            return 'november';
        case 12:
            return 'december';
        default:
            return '';
    }
}

app.get('/api/nevnap/', (req, res) => {
    const napszam = req.query.nap || null;
    const nevnap = req.query.nev || null;

    if (!napszam && !nevnap) {
        return res.status(400).json({ error: 'Please provide either a date or a name' });
    }
    
    if (napszam !== null) {
        const honap = napszam.split('-')[0];
        const honapNev = honapszamToNev(parseInt( honap));
        const nap = napszam.split('-')[1];
        const sql = `SELECT nev1, nev2 FROM nevnap WHERE ho=${honap} AND nap=${nap};`;
        db.query(sql, (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'No name found for the given date' });
            }
            const result = results[0];
            res.status(200).json({
                datum: `${honapNev} ${nap}.`,
                nevnap1: result.nev1,
                nevnap2: result.nev2
            });
        });
    }
    else if (nevnap !== null) {
        const sql = `SELECT ho, nap, nev1, nev2 FROM nevnap WHERE nev1='${nevnap}' OR nev2='${nevnap}';`;
        db.query(sql, (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'No date found for the given name' });
            }
            const result = results[0];
            res.status(200).json({
                datum: `${honapszamToNev(parseInt(result.ho))} ${result.nap}.`,
                nevnap1: result.nev1,
                nevnap2: result.nev2
            });
        });
    }
});
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});
