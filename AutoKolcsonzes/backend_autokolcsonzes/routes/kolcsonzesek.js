import express from "express";
import db from "../db.js";

const router = express.Router();

/* Összes kölcsönzés */
router.get("/", async (req, res) => {
  const [rows] = await db.query(`
    SELECT k.id AS kolcsonzes_szama,
           u.nev AS ugyfel,
           a.rendszam,
           a.automarka,
           a.automodell,
           a.napi_dij,
           k.mettol,
           k.meddig
    FROM Kolcsonzes k
    JOIN Auto a ON k.auto_id = a.id
    JOIN Ugyfel u ON k.ugyfel_id = u.id
  `);

  res.json(rows);
});

/* Kölcsönzés ID alapján */
router.get("/:id", async (req, res) => {
  const [rows] = await db.query(`
    SELECT k.id AS kolcsonzes_szama,
           u.nev AS ugyfel,
           a.rendszam,
           a.automarka,
           a.automodell,
           a.napi_dij,
           k.mettol,
           k.meddig
    FROM Kolcsonzes k
    JOIN Auto a ON k.auto_id = a.id
    JOIN Ugyfel u ON k.ugyfel_id = u.id
    WHERE k.id = ?
  `, [req.params.id]);

  if (rows.length === 0) {
    return res.status(404).json({ hiba: "Kölcsönzés nem található" });
  }

  res.json(rows[0]);
});

/* Ügyfélhez tartozó kölcsönzések */
router.get("/ugyfel/:nev", async (req, res) => {
  const [rows] = await db.query(`
    SELECT k.id AS kolcsonzes_szama,
           u.nev AS ugyfel,
           a.rendszam,
           a.automarka,
           a.automodell,
           a.napi_dij,
           k.mettol,
           k.meddig
    FROM Kolcsonzes k
    JOIN Auto a ON k.auto_id = a.id
    JOIN Ugyfel u ON k.ugyfel_id = u.id
    WHERE u.nev = ?
  `, [req.params.nev]);

  if (rows.length === 0) {
    return res.status(404).json({ hiba: "Nincs kölcsönzés ehhez az ügyfélhez" });
  }

  res.json(rows);
});

/* Új kölcsönzés */
router.post("/", async (req, res) => {
  const { auto_id, kolcsonzo_id, ugyfel_id, mettol, meddig } = req.body;

  if (!auto_id || !kolcsonzo_id || !ugyfel_id || !mettol || !meddig) {
    return res.status(400).json({ hiba: "Hiányzó adatok" });
  }

  if (new Date(mettol) >= new Date(meddig)) {
    return res.status(400).json({ hiba: "Hibás dátumtartomány" });
  }

  try {
    const [result] = await db.query(
      `INSERT INTO Kolcsonzes (auto_id, kolcsonzo_id, ugyfel_id, mettol, meddig)
       VALUES (?, ?, ?, ?, ?)`,
      [auto_id, kolcsonzo_id, ugyfel_id, mettol, meddig]
    );

    res.status(201).json({
      uzenet: "Kölcsönzés rögzítve",
      id: result.insertId
    });
  } catch {
    res.status(400).json({ hiba: "Hibás idegen kulcs" });
  }
});

export default router;
