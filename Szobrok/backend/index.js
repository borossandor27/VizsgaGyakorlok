import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mysql from "mysql2";
import multer from "multer";
import path from "path";
import fs from "fs";
const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // A képfeltöltéshez szükséges lehet a urlencoded is

// Képek mappa ellenőrzése és létrehozása
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const kepekDir = path.join(__dirname, "kepek");
if (!fs.existsSync(kepekDir)) {
  fs.mkdirSync(kepekDir, { recursive: true });
  console.log("kepek/ mappa létrehozva.");
}

// Statikus fájlok kiszolgálása (képek)
app.use("/kepek", express.static(kepekDir));

// Multer konfiguráció (képfeltöltés)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, kepekDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `szobor_${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });

// Adatbázis kapcsolat
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "szobrok",
  port: process.env.DB_PORT || 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Adatbázis kapcsolat SIKERTELEN:", err.message);
    return;
  }
  console.log("Az adatbázis kapcsolat rendben van.");
});

// ──────────────────────────────────────────────
// VÉGPONTOK
// ──────────────────────────────────────────────

// GET /api/szobrok – összes szobor (alkotó névvel, JOIN)
app.get("/api/szobrok", (req, res) => {
  const sql = `
    SELECT
      s.id,
      s.szemely,
      s.hely,
      s.avatas,
      s.rogzites,
      s.kep_url,
      GROUP_CONCAT(a.nev SEPARATOR ', ') AS alkoto_nev
    FROM szobor s
    LEFT JOIN kapcsolat k ON s.id = k.szoborid
    LEFT JOIN alkoto a    ON k.alkotoid = a.id
    GROUP BY s.id, s.szemely, s.hely, s.avatas, s.rogzites, s.kep_url
    ORDER BY s.id
  `;
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res
        .status(503)
        .json({ uzenet: "Hiba a lista lekérésekor!", hiba: err.message });
    }
    res
      .status(200)
      .json({
        uzenet:
          "A lista lekérdezése sikeres. Rekordok száma: " + results.length,
        adatok: results,
      });
  });
});

// GET /api/alkotok – alkotók lenyíló listához
app.get("/api/alkotok", (req, res) => {
  db.query(
    "SELECT id, nev, szulev, szulhely FROM alkoto ORDER BY nev",
    (err, results) => {
      if (err)
        return res.status(503).json({ uzenet: "Hiba az alkotók lekérésekor!" });
      res
        .status(200)
        .json({ uzenet: "Az alkotók lekérdezése sikeres.", adatok: results });
    },
  );
});

// GET /api/helyek – helyszínek lenyíló listához
app.get("/api/helyek", (req, res) => {
  db.query("SELECT DISTINCT hely FROM szobor ORDER BY hely", (err, results) => {
    if (err)
      return res.status(503).json({ uzenet: "Hiba a helyek lekérésekor!" });
    res.status(200).json({ adatok: results.map((r) => r.hely) });
  });
});

// GET /api/szobrok/alkotonkent/:alkotoid – szobrok alkotó szerint
app.get("/api/szobrok/alkotonkent/:alkotoid", (req, res) => {
  const sql = `
    SELECT s.id, s.szemely, s.hely, s.avatas, s.kep_url
    FROM szobor s
    JOIN kapcsolat k ON s.id = k.szoborid
    WHERE k.alkotoid = ?
  `;
  db.query(sql, [req.params.alkotoid], (err, results) => {
    if (err) return res.status(503).json({ uzenet: "Hiba!" });
    res.status(200).json({ adatok: results });
  });
});

// GET /api/szobrok/hely/:hely – szobrok hely szerint
app.get("/api/szobrok/hely/:hely", (req, res) => {
  const sql = `
    SELECT s.id, s.szemely, s.hely, s.avatas,
           GROUP_CONCAT(a.nev SEPARATOR ', ') AS alkoto_nev
    FROM szobor s
    LEFT JOIN kapcsolat k ON s.id = k.szoborid
    LEFT JOIN alkoto a    ON k.alkotoid = a.id
    WHERE s.hely = ?
    GROUP BY s.id
  `;
  db.query(sql, [req.params.hely], (err, results) => {
    if (err) return res.status(503).json({ uzenet: "Hiba!" });
    res.status(200).json({ adatok: results });
  });
});

// DELETE /api/szobrok/:id – szobor törlése
app.delete("/api/szobrok/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT id FROM szobor WHERE id = ?", [id], (err, rows) => {
    if (err) return res.status(503).json({ uzenet: "Adatbázis hiba." });
    if (rows.length === 0)
      return res
        .status(404)
        .json({ uzenet: `Nem található szobor (id: ${id}).` });

    // Kapcsolat törlése először (FK)
    db.query("DELETE FROM kapcsolat WHERE szoborid = ?", [id], (err2) => {
      if (err2)
        return res.status(503).json({ uzenet: "Hiba a kapcsolat törlésénél." });
      db.query("DELETE FROM szobor WHERE id = ?", [id], (err3) => {
        if (err3)
          return res.status(503).json({ uzenet: "Hiba a szobor törlésénél." });
        res
          .status(200)
          .json({ uzenet: `A szobor (id: ${id}) sikeresen törölve.` });
      });
    });
  });
});

// PATCH /api/szobrok/:id/kep – képlink módosítása (URL-ből)
app.patch("/api/szobrok/:id/kep", (req, res) => {
  const id = req.params.id;
  const { kep_url } = req.body;
  if (!kep_url)
    return res.status(400).json({ uzenet: "A kep_url mező kötelező." });

  db.query(
    "UPDATE szobor SET kep_url = ? WHERE id = ?",
    [kep_url, id],
    (err, result) => {
      if (err)
        return res
          .status(503)
          .json({ uzenet: "Adatbázis hiba a képlink módosításakor." });
      if (result.affectedRows === 0)
        return res
          .status(404)
          .json({ uzenet: `Nem található szobor (id: ${id}).` });
      res
        .status(200)
        .json({
          uzenet: `A képlink sikeresen frissítve (id: ${id}).`,
          kep_url,
        });
    },
  );
});

// POST /api/szobrok/:id/kep – képfájl feltöltése + kep_url frissítése
app.post("/api/szobrok/:id/kep", upload.single("kep"), (req, res) => {
  const id = req.params.id;
  if (!req.file)
    return res.status(400).json({ uzenet: "Nincs feltöltött fájl." });

  const kep_url = `/kepek/${req.file.filename}`;
  db.query(
    "UPDATE szobor SET kep_url = ? WHERE id = ?",
    [kep_url, id],
    (err, result) => {
      if (err) return res.status(503).json({ uzenet: "Adatbázis hiba." });
      if (result.affectedRows === 0)
        return res.status(404).json({ uzenet: "Nem található szobor." });
      res
        .status(200)
        .json({ uzenet: "Kép sikeresen feltöltve és mentve.", kep_url });
    },
  );
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Szerver elindult: http://localhost:${PORT}`);
});
