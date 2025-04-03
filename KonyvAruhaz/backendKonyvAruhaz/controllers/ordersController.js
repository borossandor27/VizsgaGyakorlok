import { db } from '../db.js';

export const createOrder = async (req, res) => {
  const { felhaszalo_id, konyv_id, mennyiseg } = req.body;
  const datum = new Date().toISOString().split('T')[0]; // csak év-hónap-nap

  try {
    await db.query(
      'INSERT INTO rendelesek (felhaszalo_id, konyv_id, mennyiseg, datum) VALUES (?, ?, ?, ?)',
      [felhaszalo_id, konyv_id, mennyiseg, datum]
    );
    res.status(201).json({ message: 'Rendelés sikeresen rögzítve' });
  } catch (err) {
    res.status(500).json({ error: 'Adatbázis hiba' });
  }
};

export const getOrdersByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const [rows] = await db.query(
      `SELECT r.rendeles_id, r.mennyiseg, r.datum, k.cim, k.ar
       FROM rendelesek r
       JOIN konyvek k ON r.konyv_id = k.konyv_id
       WHERE r.felhaszalo_id = ?`,
      [userId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Adatbázis hiba' });
  }
};
