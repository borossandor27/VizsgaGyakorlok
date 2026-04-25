// ============================================================
// Gyógynövény Nyilvántartó Rendszer – Backend mintamegoldás
// Node.js + Express + MySQL REST API
// ============================================================

const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.json());

// Statikus fájlok kiszolgálása (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------------------------------------
// Adatbázis-kapcsolat
// ------------------------------------------------------------
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',           // XAMPP esetén üres
  database: 'gyogynovenyek_db',
  charset: 'utf8mb4'
});

db.connect((err) => {
  if (err) {
    console.error('Adatbázis-kapcsolat sikertelen:', err.message);
    process.exit(1);
  }
  console.log('DB kapcsolat rendben. DB: gyogynovenyek_db');
  console.log(`Backend fut: http://localhost:${PORT}`);
  console.log(`Tesztoldal: http://localhost:${PORT}/`);
});

// ============================================================
// A) Gyógynövények lekérdezése
// GET /api/gyogynovenyek
// Visszaadja az összes rekordot a lelőhely nevével együtt (JOIN)
// ============================================================
app.get('/api/gyogynovenyek', (req, res) => {
  const sql = `
    SELECT
      g.azon,
      g.nev,
      g.fajta,
      g.gyujtes_eve,
      g.hasznositas,
      g.URL,
      l.nev AS lelohely
    FROM gyogynoven g
    JOIN lelohely l ON g.lelohely_id = l.id
    ORDER BY g.azon DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ uzenet: 'Lekérdezési hiba.' });
    res.status(200).json(results);
  });
});

// ============================================================
// B) Új gyógynövény rögzítése
// POST /api/gyogynovenyek
// Body: { nev, fajta, lelohely_id, gyujtes_eve, hasznositas, URL }
// ============================================================
app.post('/api/gyogynovenyek', (req, res) => {
  const { nev, fajta, lelohely_id, gyujtes_eve, hasznositas, URL } = req.body;

  // Kötelező mezők ellenőrzése
  if (!nev || !lelohely_id || !gyujtes_eve || !hasznositas) {
    return res.status(400).json({ uzenet: 'Hiányos adatok' });
  }

  const sql = `
    INSERT INTO gyogynoven (nev, fajta, lelohely_id, gyujtes_eve, hasznositas, URL)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [nev, fajta || null, lelohely_id, gyujtes_eve, hasznositas, URL || ''], (err, result) => {
    if (err) return res.status(500).json({ uzenet: 'Mentési hiba.' });
    res.status(201).json({ id: result.insertId });
  });
});

// ============================================================
// C) Gyógynövény törlése
// DELETE /api/gyogynovenyek/:azon
// ============================================================
app.delete('/api/gyogynovenyek/:azon', (req, res) => {
  const { azon } = req.params;

  // Ellenőrzés: létezik-e a rekord?
  db.query('SELECT azon FROM gyogynoven WHERE azon = ?', [azon], (err, rows) => {
    if (err) return res.status(500).json({ uzenet: 'Lekérdezési hiba.' });
    if (rows.length === 0) {
      return res.status(404).json({ uzenet: 'A keresett gyógynövény nem létezik.' });
    }
    db.query('DELETE FROM gyogynoven WHERE azon = ?', [azon], (err2) => {
      if (err2) return res.status(500).json({ uzenet: 'Törlési hiba.' });
      res.status(204).send();
    });
  });
});

// ============================================================
// D) Képlink módosítása
// PUT /api/gyogynovenyek/:azon/kep
// Body: { URL }
// ============================================================
app.put('/api/gyogynovenyek/:azon/kep', (req, res) => {
  const { azon } = req.params;
  const { URL } = req.body;

  db.query('UPDATE gyogynoven SET URL = ? WHERE azon = ?', [URL || '', azon], (err, result) => {
    if (err) return res.status(500).json({ uzenet: 'Frissítési hiba.' });
    if (result.affectedRows === 0) {
      return res.status(404).json({ uzenet: 'A keresett gyógynövény nem létezik.' });
    }
    res.status(200).json({ uzenet: 'Képlink sikeresen frissítve.' });
  });
});

// ============================================================
// E) Lelőhelyek lekérdezése (dropdown feltöltéséhez)
// GET /api/lelelohelyek
// ============================================================
app.get('/api/leloehelyek', (req, res) => {
  db.query('SELECT id, nev FROM lelohely ORDER BY nev', (err, results) => {
    if (err) return res.status(500).json({ uzenet: 'Lekérdezési hiba.' });
    res.status(200).json(results);
  });
});

// ------------------------------------------------------------
app.listen(PORT);
