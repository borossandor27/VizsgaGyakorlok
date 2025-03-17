import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// MySQL kapcsolat létrehozása pool-al
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Módosítsd saját adatbázisod beállításai szerint
    password: '',
    database: 'etterem',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// **GET /menu** – Az étlap lekérése
app.get('/menu', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT menuitems.*, categories.name AS categoriName FROM MenuItems JOIN categories ON menuitems.category_id=categories.id ORDER BY category_id;');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// **POST /order** – Új rendelés rögzítése
app.post('/order', async (req, res) => {
    const { table_id, items, user_id } = req.body;
    if (!table_id || !items || !items.length) {
        return res.status(400).json({ error: 'Table ID and items are required' });
    }
    try {
        const [result] = await pool.query('INSERT INTO `orders` (`id`, `table_id`, `user_id`, `status`, `total_price`) VALUES (NULL, ?, ?, ?, ?)', [table_id, user_id, 'folyamatban', items.price]);
        const orderId = result.insertId;
        for (const item of items) {
            await pool.query('INSERT INTO OrderItems (order_id, menu_item_id, quantity, price) VALUES (?, ?, ?, ?)',
                [orderId, item.menu_item_id, item.quantity, item.price]);
        }
        res.status(201).json({ orderId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// **GET /orders** – Aktív rendelések listázása
/*
let sql = "SELECT orders.*, users.name AS user_name, users.email AS user_email, users.role, 
    tables.table_number, orderitems.id AS item_id, orderitems.quantity, orderitems.price,
    menuitems.name AS food_name, menuitems.description AS food_description, menuitems.price AS food_price, menuitems.image_url, menuitems.available,
    categories.name AS categorie_name
FROM categories JOIN menuitems ON categories.id=menuitems.category_id
        JOIN orderitems ON menuitems.id=orderitems.menu_item_id
        JOIN orders ON orderitems.order_id=orders.id
        JOIN tables ON orders.table_id=tables.id
        JOIN users ON orders.user_id=users.id;"
*/
app.get('/orders', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM rendelesek WHERE status != "fizetve"');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// **PUT /order/:id** – Rendelés státuszának frissítése
app.put('/order/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
        return res.status(400).json({ error: 'Status is required' });
    }
    try {
        const [result] = await pool.query('UPDATE Orders SET status = ? WHERE id = ?', [status, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json({ message: 'Order updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// **DELETE /order/:id** – Rendelés törlése
app.delete('/order/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM OrderItems WHERE order_id = ?', [id]);
        const [result] = await pool.query('DELETE FROM Orders WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
