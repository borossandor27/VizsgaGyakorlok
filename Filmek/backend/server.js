// ============================================================
// Klasszikus Filmek Nyilvántartó – Backend mintamegoldás
// Node.js + Express + MySQL REST API
// ============================================================

const express = require('express');
const mysql   = require('mysql2');
const path    = require('path');
const cors    = require('cors');

const app  = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());

// Statikus fájlok (frontend build vagy public mappa)
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------------------------------------
// Adatbázis-kapcsolat
// ------------------------------------------------------------
const db = mysql.createConnection({
  host:     'localhost',
  user:     'root',
  password: '',                 // XAMPP esetén üres
  database: 'klasszikus_filmek',
  charset:  'utf8mb4'
});

db.connect((err) => {
  if (err) {
    console.error('Adatbázis-kapcsolat sikertelen:', err.message);
    process.exit(1);
  }
  console.log('DB kapcsolat rendben. DB: klasszikus_filmek');
  console.log(`Backend fut: http://localhost:${PORT}`);
  console.log(`Tesztoldal:  http://localhost:${PORT}/`);
});

// ============================================================
// A) Filmek lekérdezése  –  GET /api/zenekar  analógja
// GET /api/film
// Visszaad minden filmet a műfaj nevével együtt (JOIN)
// ============================================================
app.get('/api/film', (req, res) => {
  const sql = `
    SELECT
      f.id,
      f.cim,
      f.rendezo,
      f.gyartasi_ev,
      f.szarmazasi_orszag,
      f.szereplok,
      f.legsikeresebb_dijak,
      f.kep_url,
      m.mufaj_neve AS mufaj
    FROM filmek f
    JOIN mufajok m ON f.mufaj_id = m.id
    ORDER BY f.gyartasi_ev DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ uzenet: 'Lekérdezési hiba.' });
    res.status(200).json(results);
  });
});

// ============================================================
// B) Új film rögzítése  –  POST /api/ujzenekar  analógja
// POST /api/ujfilm
// Body: { cim, mufaj_id, rendezo, gyartasi_ev,
//         szarmazasi_orszag, szereplok, legsikeresebb_dijak, kep_url }
// ============================================================
app.post('/api/ujfilm', (req, res) => {
  const {
    cim, mufaj_id, rendezo, gyartasi_ev,
    szarmazasi_orszag, szereplok, legsikeresebb_dijak, kep_url
  } = req.body;

  // Kötelező mezők ellenőrzése
  if (!cim || !mufaj_id || !rendezo || !gyartasi_ev || !szarmazasi_orszag) {
    return res.status(400).json({ uzenet: 'Hiányos adatok.' });
  }

  const sql = `
    INSERT INTO filmek
      (cim, mufaj_id, rendezo, gyartasi_ev, szarmazasi_orszag,
       szereplok, legsikeresebb_dijak, kep_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [cim, mufaj_id, rendezo, gyartasi_ev, szarmazasi_orszag,
     szereplok || null, legsikeresebb_dijak || null, kep_url || null],
    (err, result) => {
      if (err) return res.status(500).json({ uzenet: 'Mentési hiba.' });
      res.status(201).json({ id: result.insertId });
    }
  );
});

// ============================================================
// C) Műfajok lekérdezése  –  GET /api/stilus  analógja
// GET /api/mufajok
// ============================================================
app.get('/api/mufajok', (req, res) => {
  db.query('SELECT id, mufaj_neve FROM mufajok ORDER BY id', (err, results) => {
    if (err) return res.status(500).json({ uzenet: 'Lekérdezési hiba.' });
    res.status(200).json(results);
  });
});

// ------------------------------------------------------------
app.listen(PORT);
