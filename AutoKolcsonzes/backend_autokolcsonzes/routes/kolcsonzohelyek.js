import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await db.query(
    "SELECT id, nev, cim FROM Kolcsonzo"
  );
  res.json(rows);
});

router.get("/:id", async (req, res) => {
  const [rows] = await db.query(
    "SELECT id, nev, cim FROM Kolcsonzo WHERE id = ?",
    [req.params.id]
  );

  if (rows.length === 0) {
    return res.status(404).json({ hiba: "Telephely nem található" });
  }

  res.json(rows[0]);
});

export default router;
