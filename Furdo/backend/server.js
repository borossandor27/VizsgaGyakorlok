// ============================================================
//  server.js  –  Fürdők Nyilvántartó Rendszer – Backend
//  Node.js + Express + MySQL2
//  Indítás: node server.js
// ============================================================

const express = require('express');
const mysql   = require('mysql2');
const cors    = require('cors');
const path    = require('path');

const app  = express();
const PORT = 5000;

// ── Middleware ───────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// Statikus fájlok kiszolgálása (frontend / kepek)
app.use(express.static(path.join(__dirname, 'public')));

// ── Adatbázis-kapcsolat ──────────────────────────────────────
const db = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: '',          // XAMPP alapértelmezett: üres jelszó
  database: 'furdo_db',
  charset : 'utf8mb4'
});

db.connect(err => {
  if (err) {
    console.error('DB kapcsolat sikertelen:', err.message);
    process.exit(1);
  }
  console.log('DB kapcsolat rendben. DB: furdo_db');
  console.log(`Backend fut: http://localhost:${PORT}`);
  console.log(`Tesztoldal:  http://localhost:${PORT}/`);
});

// ── Tesztoldal ───────────────────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── A) GET /api/furdok – összes fürdő várossal ───────────────
app.get('/api/furdok', (req, res) => {
  const sql = `
    SELECT f.azon, f.nev, f.tipus, f.medencek,
           f.belepodij, f.nyitas_eve, v.nev AS varos, f.URL
    FROM furdo f
    JOIN varos v ON f.varos_id = v.id
    ORDER BY f.azon
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ hiba: err.message });
    res.status(200).json(results);
  });
});

// ── GET /api/varosok – városok listája (frontend dropdown) ───
app.get('/api/varosok', (req, res) => {
  db.query('SELECT id, nev FROM varos ORDER BY nev', (err, results) => {
    if (err) return res.status(500).json({ hiba: err.message });
    res.status(200).json(results);
  });
});

// ── B) POST /api/furdok – új fürdő rögzítése ────────────────
app.post('/api/furdok', (req, res) => {
  const { nev, tipus, medencek, belepodij, varos_id, nyitas_eve, URL } = req.body;

  // Kötelező mezők ellenőrzése
  if (!nev || !tipus || !belepodij || !varos_id) {
    return res.status(400).json({ uzenet: 'Hiányos adatok' });
  }

  const sql = `
    INSERT INTO furdo (nev, tipus, medencek, belepodij, varos_id, nyitas_eve, URL)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const ertekek = [
    nev,
    tipus,
    medencek   || 1,
    belepodij,
    varos_id,
    nyitas_eve || new Date().getFullYear(),
    URL        || ''
  ];

  db.query(sql, ertekek, (err, result) => {
    if (err) return res.status(500).json({ hiba: err.message });
    res.status(201).json({ id: result.insertId });
  });
});

// ── C) DELETE /api/furdok/:azon – fürdő törlése ─────────────
app.delete('/api/furdok/:azon', (req, res) => {
  const azon = parseInt(req.params.azon);

  // Létezik-e?
  db.query('SELECT azon FROM furdo WHERE azon = ?', [azon], (err, rows) => {
    if (err)              return res.status(500).json({ hiba: err.message });
    if (rows.length === 0)
      return res.status(404).json({ uzenet: 'A keresett fürdő nem létezik.' });

    db.query('DELETE FROM furdo WHERE azon = ?', [azon], (err2) => {
      if (err2) return res.status(500).json({ hiba: err2.message });
      res.status(204).send();
    });
  });
});

// ── D) PUT /api/furdok/:azon/kep – képlink módosítása ────────
app.put('/api/furdok/:azon/kep', (req, res) => {
  const azon = parseInt(req.params.azon);
  const { URL } = req.body;

  if (URL === undefined) {
    return res.status(400).json({ uzenet: 'Hiányzó URL mező.' });
  }

  db.query(
    'UPDATE furdo SET URL = ? WHERE azon = ?',
    [URL, azon],
    (err, result) => {
      if (err)                  return res.status(500).json({ hiba: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ uzenet: 'A keresett fürdő nem létezik.' });
      res.status(200).json({ uzenet: 'Képlink sikeresen frissítve.' });
    }
  );
});

// ── Szerver indítása ─────────────────────────────────────────
app.listen(PORT);
