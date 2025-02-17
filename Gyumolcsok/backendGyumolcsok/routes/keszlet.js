import express from 'express';
import connection from './database.js';
const keszletRouter = express.Router();
keszletRouter.get('/', (req, res) => {
    const query = 'SELECT * FROM keszlet';
    connection.query(query, (err, rows) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.status(201).json(rows);
    });
    res.send('Keszlet!');
});
export default keszletRouter;