// src/routes/telepulesek.js
// GET /api/telepulesek  – összes település listája (legördülőhöz)

import { Router } from 'express';
import pool from '../db/pool.js';

const router = Router();

// GET /api/telepulesek
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, nev, megye_id FROM telepules ORDER BY nev'
    );
    res.json(rows);
  } catch (err) {
    console.error('Telepulesek lekérési hiba:', err);
    res.status(500).json({ hiba: 'Adatbázis hiba a települések lekérésekor.' });
  }
});

export default router;
