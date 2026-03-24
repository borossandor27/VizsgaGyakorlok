import mysql from "mysql2/promise";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "diaknyilvantartas",
  port: 3306,
};

const pool = mysql.createPool(dbConfig);

app.get("/riport", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM teljesiskolairiport");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Szerver hiba" });
  }
});

app.get("/students", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM diakok");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Diák jegyeinek lekérése ID alapján
app.get("/diak/:id/jegyek", async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
      SELECT 
        d.nev,
        t.targy_nev,
        j.erdemjegy,
        j.datum
      FROM jegyek j
      JOIN diakok d ON j.diak_id = d.id
      JOIN tantargyak t ON j.tantargy_id = t.id
      WHERE d.id = ?
    `,
      [req.params.id],
    );

    if (!rows.length) {
      return res.status(404).json({ message: "Nincs találat" });
    }

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Szerver hiba" });
  }
});

// Diákok szűrése osztály és név alapján 
//  pl:
//  /riport?osztaly=10.A
//  /riport?nev=Balogh
app.get("/riport", async (req, res) => {
  try {
    let sql = "SELECT * FROM teljesiskolairiport WHERE 1=1";
    const params = [];

    if (req.query.osztaly) {
      sql += " AND Osztaly = ?";
      params.push(req.query.osztaly);
    }

    if (req.query.nev) {
      sql += " AND Diak_Neve LIKE ?";
      params.push(`%${req.query.nev}%`);
    }

    const [rows] = await pool.query(sql, params);
    res.json(rows);

  } catch (err) {
    res.status(500).json({ error: "Szerver hiba" });
  }
});

// új jegy felvitel
app.post("/jegyek", async (req, res) => {
  try {
    const { diak_id, tantargy_id, erdemjegy, datum } = req.body;
    const [result] = await pool.query(
      "INSERT INTO jegyek (diak_id, tantargy_id, erdemjegy, datum) VALUES (?, ?, ?, ?)",
      [diak_id, tantargy_id, erdemjegy, datum]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: "Szerver hiba" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Kiszolgáló fut a http://localhost:${PORT} porton`);
});