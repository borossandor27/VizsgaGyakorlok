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
        res.status(200).json({ id: result.insertId, name, email, birthday });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba történt a felhasználó létrehozásakor.' });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        if (rows.length) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).json({ error: 'Nincs ilyen azonosítójú felhasználó' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba történt a felhasználó lekérdezésekor.' });
    }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, birthday } = req.body;
    try {
        const [result] = await db.query('UPDATE users SET name = ?, email = ?, birthday = ? WHERE id = ?', [name, email, birthday, id]);
        if (result.affectedRows) {
            res.status(200).json({ id, name, email, birthday });
        } else {
            res.status(404).json({ error: 'Nincs ilyen azonosítójú felhasználó' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba történt a felhasználó módosításakor.' });
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
        if (result.affectedRows) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Nincs ilyen azonosítójú felhasználó' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba történt a felhasználó törlésekor.' });
    }
});
export default router;
