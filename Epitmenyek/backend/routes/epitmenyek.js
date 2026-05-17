// src/routes/epitmények.js
// REST végpontok az építmény táblához

import { Router } from 'express';
import pool from '../db/pool.js';

const router = Router();
console.log('✅  Epitmenyek router betöltve. Végpontok:');
// ---------------------------------------------------------------
// GET /api/epitmenyek
// Opcionális query paraméterek: ?tipus=vár  ?nev=egri
// ---------------------------------------------------------------
router.get('/', async (req, res) => {
  try {
    const { tipus, nev } = req.query;

    let sql = `
      SELECT
        e.azon,
        e.nev,
        e.tipus,
        e.magassag,
        e.epites_eve,
        e.telepules_id,
        t.nev AS telepules_nev
      FROM epitmeny e
      JOIN telepules t ON t.id = e.telepules_id
      WHERE 1=1
    `;
    const params = [];

    if (tipus) {
      sql += ' AND e.tipus = ?';
      params.push(tipus);
    }
    if (nev) {
      sql += ' AND e.nev LIKE ?';
      params.push(`%${nev}%`);
    }

    sql += ' ORDER BY e.azon';

    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (err) {
    console.error('Építmények lekérési hiba:', err);
    res.status(500).json({ hiba: 'Adatbázis hiba az építmények lekérésekor.' });
  }
});

// ---------------------------------------------------------------
// GET /api/epitmenyek/:azon
// Egy építmény részletei
// ---------------------------------------------------------------
router.get('/:azon', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT
        e.azon, e.nev, e.tipus, e.magassag, e.epites_eve, e.telepules_id,
        t.nev AS telepules_nev
       FROM epitmeny e
       JOIN telepules t ON t.id = e.telepules_id
       WHERE e.azon = ?`,
      [req.params.azon]
    );

    if (rows.length === 0) {
      return res.status(404).json({ hiba: 'Az építmény nem található.' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error('Építmény részlet hiba:', err);
    res.status(500).json({ hiba: 'Adatbázis hiba az építmény lekérésekor.' });
  }
});

// ---------------------------------------------------------------
// POST /api/epitmenyek
// Új építmény rögzítése
// Body: { azon, nev, tipus, magassag, telepules_id, epites_eve }
// ---------------------------------------------------------------
router.post('/', async (req, res) => {
  try {
    const { azon, nev, tipus, magassag, telepules_id, epites_eve } = req.body;

    // --- Validáció ---
    const hibak = [];
    if (!azon || isNaN(Number(azon)) || Number(azon) < 1)
      hibak.push('Az azonosító pozitív egész szám kell legyen.');
    if (!nev || String(nev).trim().length === 0)
      hibak.push('A név megadása kötelező.');
    if (String(nev).length > 150)
      hibak.push('A név legfeljebb 150 karakter lehet.');
    if (!tipus || String(tipus).trim().length === 0)
      hibak.push('A típus megadása kötelező.');
    if (!magassag || isNaN(Number(magassag)) || Number(magassag) < 1)
      hibak.push('A magasság pozitív egész szám kell legyen.');
    if (!telepules_id || isNaN(Number(telepules_id)))
      hibak.push('A település megadása kötelező.');
    if (!epites_eve || isNaN(Number(epites_eve)) || Number(epites_eve) < 500 || Number(epites_eve) > 2025)
      hibak.push('Az építés éve 500 és 2025 közé kell essen.');

    if (hibak.length > 0) {
      return res.status(422).json({ hiba: 'Érvénytelen adatok.', hibak });
    }

    // --- Egyedi azon ellenőrzés ---
    const [letezo] = await pool.query(
      'SELECT azon FROM epitmeny WHERE azon = ?', [Number(azon)]
    );
    if (letezo.length > 0) {
      return res.status(409).json({ hiba: `Az ${azon} azonosító már foglalt.` });
    }

    // --- Telepules ellenőrzés ---
    const [tel] = await pool.query(
      'SELECT id FROM telepules WHERE id = ?', [Number(telepules_id)]
    );
    if (tel.length === 0) {
      return res.status(422).json({ hiba: 'A megadott település nem létezik.' });
    }

    // --- Mentés ---
    await pool.query(
      `INSERT INTO epitmeny (azon, nev, tipus, magassag, telepules_id, epites_eve)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        Number(azon),
        String(nev).trim(),
        String(tipus).trim(),
        Number(magassag),
        Number(telepules_id),
        Number(epites_eve),
      ]
    );

    res.status(201).json({
      uzenet: 'Az építmény sikeresen rögzítve.',
      azon: Number(azon),
    });
  } catch (err) {
    console.error('Építmény rögzítési hiba:', err);
    res.status(500).json({ hiba: 'Adatbázis hiba a rögzítés során.' });
  }
});

// ---------------------------------------------------------------
// DELETE /api/epitmenyek/:azon
// Egy építmény törlése
// ---------------------------------------------------------------
router.delete('/:azon', async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM epitmeny WHERE azon = ?', [req.params.azon]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ hiba: 'Az építmény nem található.' });
    }
    res.json({ uzenet: 'Az építmény törölve.', azon: Number(req.params.azon) });
  } catch (err) {
    console.error('Törlési hiba:', err);
    res.status(500).json({ hiba: 'Adatbázis hiba a törlés során.' });
  }
});

export default router;
