import express from 'express';
import connection from './database.js';
const keszletRouter = express.Router();
keszletRouter.get('/', async (req, res) => {
    const sql = 'SELECT * FROM keszlet';
    try {
        const [rows] = await connection.query(sql);
        res.status(200).send(rows);
    } catch (error) {
        console.error("Hiba a lekérdezés során:", err);
        res.sendStatus(500);
    }

});

keszletRouter.post('/', async (req, res) => {
    console.log(`${req.body} adatok rögzítése`);
    try {
        const { gyumolcsid, mennyiseg, egysegar } = req.body;
        if (!gyumolcsid || !mennyiseg || !egysegar) {
            throw new Error('Hiányzó adat(ok)');
        }
        const sql = "INSERT INTO `keszlet` (`gyumolcsid`, `mennyiseg`, `egysegar`) VALUES (?, ?, ?);";
        const [result] = await connection.query(sql, [gyumolcsid, mennyiseg, egysegar]);
        console.log(result);
        res.status(200).send({ message: "Készlet hozzáadva", id: result.insertId });
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
});
keszletRouter.put('/:id', (req, res) => {
    const sql = "UPDATE `keszlet` SET `nev`= ?,`mennyiseg`= ?,`ar`= ? WHERE `id`= ?";
    try {
        if (!req.params.id) {
            throw new Error('Hiányzó ID');
        }
        const { nev, mennyiseg, ar } = req.body;
        if (!nev || !mennyiseg || !ar) {
            throw new Error('Hiányzó adat(ok)');
        }
        connection.query(sql, [nev, mennyiseg, ar, req.params.id], (err, result) => {
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.status(200).send({ message: "Készlet módosítva", id: req.params.id });
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});
export default keszletRouter;