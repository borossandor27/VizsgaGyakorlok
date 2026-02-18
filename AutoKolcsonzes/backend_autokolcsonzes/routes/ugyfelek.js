import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT nev, email FROM Ugyfel");
  res.json(rows);
});

router.get("/:nev", async (req, res) => {
  const [rows] = await db.query(
    "SELECT nev, email FROM Ugyfel WHERE nev = ?",
    [req.params.nev]
  );

  if (rows.length === 0) {
    return res.status(404).json({ hiba: "Ügyfél nem található" });
  }

  res.json(rows[0]);
});

export default router;
