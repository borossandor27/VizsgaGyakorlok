import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await db.query(
    "SELECT rendszam, automarka, automodell, napi_dij FROM Auto"
  );
  res.json(rows);
});

router.get("/:rendszam", async (req, res) => {
  const [rows] = await db.query(
    "SELECT rendszam, automarka, automodell, napi_dij FROM Auto WHERE rendszam = ?",
    [req.params.rendszam]
  );

  if (rows.length === 0) {
    return res.status(404).json({ hiba: "Autó nem található" });
  }

  res.json(rows[0]);
});

export default router;
