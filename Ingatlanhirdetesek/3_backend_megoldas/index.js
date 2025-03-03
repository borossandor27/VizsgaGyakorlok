import express from "express";
import cors from "cors";
import pool from "./database.js";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /api/ingatlan visszaadja az összes ingatlant 200-as státusszal
app.get("/api/ingatlan", async (req, res) => {
    let query = "SELECT ingatlanok.id, kategoriak.nev AS kategoia, ingatlanok.leiras, ingatlanok.hirdetesDatuma, ingatlanok.tehermentes, ingatlanok.ar, ingatlanok.kepUrl FROM ingatlanok JOIN kategoriak ON ingatlanok.kategoria=kategoriak.id;";

    try {
        const [rows] = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba a lekérdezés során' });
    }
});
app.get('/api/kategoriak', async (req, res) => {
    const query = "SELECT * FROM kategoriak;";
    try {
        const [rows] = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba a lekérdezés során' });
    }
});
// POST /api/ingatlan létrehoz egy új ingatlant JSON body alapján
app.post("/api/ujingatlan", async (req, res) => {
    const { kategoria, leiras, hirdetesDatuma, tehermentes, ar, kepUrl } = req.body;
    console.log(`uj ingatlan: ${kategoria}, ${leiras}, ${hirdetesDatuma}, ${tehermentes}, ${ar}, ${kepUrl}`);
    if (typeof kategoria !== 'number' 
        || typeof leiras !== 'string' 
        || typeof hirdetesDatuma !== 'string' 
        || typeof tehermentes !== 'boolean' 
        || typeof ar !== 'number' 
        || typeof kepUrl !== 'string') {
        res.status(400).json({ error: 'Hiányos adatok' });
        return;
    }
    const query = "INSERT INTO ingatlanok (kategoria, leiras, hirdetesDatuma, tehermentes, ar, kepUrl) VALUES (?, ?, ?, ?, ?, ?);";
    try {
        const [result] = await pool.query(query, [kategoria, leiras, hirdetesDatuma, tehermentes, ar, kepUrl]);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Hiba az új ingatlan létrehozása során' });
    }
});

// DELETE /api/ingatlan/:id törli az adott azonosítójú ingatlant
app.delete("/api/ingatlan/:id", async (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.status(404).json({ error: 'Az azonosító nem szám' });
        return;
    }

    const query = "DELETE FROM ingatlanok WHERE id = ?;";
    try {
        await pool.query(query, [id]);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Az ingatlan nem létezik.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});