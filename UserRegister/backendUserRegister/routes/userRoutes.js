import express from 'express';
import db from './connection.js';

const router = express.Router();

// GET /user - Felhasználók listázása
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        //rows.birthday = new Date(rows.birthday).toLocaleDateString();
        res.status(201).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba történt a felhasználók lekérdezésekor.' });
    }
});

// POST /user - Új felhasználó létrehozása
router.post('/', async (req, res) => {
    console.log(req.body);
    const { name, email, birthday } = req.body;
    try {
        const [result] = await db.query('INSERT INTO `users` (`id`, `name`, `email`, `birthday`) VALUES (NULL,?, ?,?)', [name, email, birthday]);
        res.json({ id: result.insertId, name, email, birthday });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba történt a felhasználó létrehozásakor.' });
    }
});

export default router;
