import express, { Router } from "express";
import connection from "./database.js";
const gyumolcsRouter = express.Router();
gyumolcsRouter.use(express.json());
gyumolcsRouter.use(express.urlencoded({ extended: true }));

async function getFruits() {
  try {
    const [rows] = await connection.query('SELECT * FROM gyumolcs');
    return rows; // A sorokat visszaadja
  } catch (error) {
    console.error('Hiba történt a lekérdezés során:', error.message);
    throw error; // Ha akarod, feldobhatod a hibát a hívónak
  }
}
async function getFruit(id) {
  console.log(id);
  try {
    const [rows] = await connection.query('SELECT * FROM gyumolcs where gyumolcsid = ?', [id]);
    return rows; // A sorokat visszaadja
  } catch (error) {
    console.error('Hiba történt a lekérdezés során:', error.message);
    throw error; // Ha akarod, feldobhatod a hibát a hívónak
  }
}

gyumolcsRouter.get('/', (req, res) =>
  getFruits(req.params.gyumolcsid)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(403).send({ 'Hiba': err }))
);

gyumolcsRouter.get('/:gyumolcsid', (req, res) => {
  console.log(`id: ${req.params.gyumolcsid} gyümölcs lekérdezése`);
  getFruit(req.params.gyumolcsid)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(403).send({ 'Hiba': err }))
});

gyumolcsRouter.post('/', async (req, res) => {
  // kapott adatok ellenőrzése
  try {
    const { nev, megjegyzes, nev_eng, alt_szoveg, src } = req.body;
    if (!nev || !megjegyzes || !nev_eng || !alt_szoveg || !src) {
      throw new Error('Hiányzó adat(ok)');
    }
    const sql = "INSERT INTO `gyumolcs` (`gyumolcsid`, `nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES (NULL, ?, ?, ?, ?, ?);";
    const [result] = await connection.query(sql, [nev, megjegyzes, nev_eng, alt_szoveg, src]);
    console.log(result);
    res.status(201).send({ message: "Gyümölcs hozzáadva", id: result.insertId });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});


gyumolcsRouter.put('/:gyumolcsid', (req, res) => {
  const sql = "UPDATE `gyumolcs` SET `nev`= ?,`megjegyzes`= ?,`nev_eng`= ?,`alt_szoveg`= ?,`src`= ? WHERE `gyumolcsid`= ?";
  try {
    if (!req.params.gyumolcsid) {
      throw new Error('Hiányzó adat(ok)');
    }
    // kapott adatok ellenőrzése
    const { nev, megjegyzes, nev_eng, alt_szoveg, src } = req.body;
    if (!nev || !megjegyzes || !nev_eng || !alt_szoveg || !src) {
      throw new Error('Hiányzó adat(ok)');
    }
    connection.query(sql, [nev, megjegyzes, nev_eng, alt_szoveg, src, req.params.gyumolcsid]);
    res.status(201).send({ message: "Gyümölcs módosítva", id: req.params.gyumolcsid });

  } catch (error) {
    res.status(400).send({ error: error.message });
  }
  res.send('Gyumolcsok PUT!');
});
gyumolcsRouter.delete('/:gyumolcsid', (req, res) => {
  if (!req.params.gyumolcsid) {
    throw new Error('Hiányzó adat(ok)');
  }
  try {
    const sql = "DELETE FROM gyumolcs WHERE gyumolcsid = ?";
    connection.query(sql, [req.params.gyumolcsid]);
    res.status(201).send({ message: "Gyümölcs törölve", id: req.params.gyumolcsid });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

export default gyumolcsRouter;
