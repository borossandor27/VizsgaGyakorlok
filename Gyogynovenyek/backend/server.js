// ============================================================
// Gyógynövény Nyilvántartó Rendszer – Backend mintamegoldás
// Node.js + Express + MySQL REST API
// ============================================================
import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import path from "path";
import { fileURLToPath } from "url";

// __dirname helyettesítése ES modulban
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
// Statikus fájlok kiszolgálása (frontend)
app.use(express.static(path.join(__dirname, "public")));

// ------------------------------------------------------------
// Adatbázis-kapcsolat - Pool használata
// ------------------------------------------------------------
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "gyogynovenyek_db",
  charset: "utf8mb4",
  waitForConnections: true,
  connectionLimit: 10,
});

// Kapcsolat tesztelése
async function initDb() {
  try {
    const connection = await pool.getConnection();
    console.log("DB kapcsolat rendben. DB: gyogynovenyek_db");
    connection.release();
    
    console.log(`Backend fut: http://localhost:${PORT}`);
    console.log(`Tesztoldal: http://localhost:${PORT}/`);
    
    // Szerver indítása
    app.listen(PORT);
  } catch (err) {
    console.error("Adatbázis-kapcsolat sikertelen:", err.message);
    process.exit(1);
  }
}

initDb();

// ============================================================
// A) Gyógynövények lekérdezése
// GET /api/gyogynovenyek
// Visszaadja az összes rekordot a lelőhely nevével együtt (JOIN)
// ============================================================
app.get("/api/gyogynovenyek", async (req, res) => {
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
  try {
    const [results] = await pool.query(sql);
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ uzenet: "Lekérdezési hiba." });
  }
});

// ============================================================
// B) Új gyógynövény rögzítése
// POST /api/gyogynovenyek
// Body: { nev, fajta, lelohely_id, gyujtes_eve, hasznositas, URL }
// ============================================================
app.post("/api/gyogynovenyek", async (req, res) => {
  const { nev, fajta, lelohely_id, gyujtes_eve, hasznositas, URL } = req.body;

  // Kötelező mezők ellenőrzése
  if (!nev || !lelohely_id || !gyujtes_eve || !hasznositas) {
    return res.status(400).json({ uzenet: "Hiányos adatok" });
  }

  const sql = `
    INSERT INTO gyogynoven (nev, fajta, lelohely_id, gyujtes_eve, hasznositas, URL)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  try {
    const [result] = await pool.query(sql, [
      nev,
      fajta || null,
      lelohely_id,
      gyujtes_eve,
      hasznositas,
      URL || "",
    ]);
    res.status(201).json({ id: result.insertId, uzenet: "Gyógynövény sikeresen rögzítve." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ uzenet: "Mentési hiba." });
  }
});

// ============================================================
// C) Gyógynövény törlése
// DELETE /api/gyogynovenyek/:azon
// ============================================================
app.delete("/api/gyogynovenyek/:azon", async (req, res) => {
  const { azon } = req.params;

  try {
    // Ellenőrzés: létezik-e a rekord?
    const [rows] = await pool.query(
      "SELECT azon FROM gyogynoven WHERE azon = ?",
      [azon]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ uzenet: "A keresett gyógynövény nem létezik." });
    }
    
    // Törlés végrehajtása
    await pool.query("DELETE FROM gyogynoven WHERE azon = ?", [azon]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ uzenet: "Törlési hiba." });
  }
});

// ============================================================
// D) Képlink módosítása
// PUT /api/gyogynovenyek/:azon/kep
// Body: { URL }
// ============================================================
app.put("/api/gyogynovenyek/:azon/kep", async (req, res) => {
  const { azon } = req.params;
  const { URL } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE gyogynoven SET URL = ? WHERE azon = ?",
      [URL || "", azon]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ uzenet: "A keresett gyógynövény nem létezik." });
    }
    
    res.status(200).json({ uzenet: "Képlink sikeresen frissítve." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ uzenet: "Frissítési hiba." });
  }
});

// ============================================================
// E) Lelőhelyek lekérdezése (dropdown feltöltéséhez)
// GET /api/lelohelyek
// ============================================================
app.get("/api/lelohelyek", async (req, res) => {
  try {
    const [results] = await pool.query("SELECT id, nev FROM lelohely ORDER BY nev");
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ uzenet: "Lekérdezési hiba." });
  }
});