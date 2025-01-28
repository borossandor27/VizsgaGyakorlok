import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());
import connect from './connection.js';


// Create
app.post('/users', (req, res) => {
    const { name, email, birthday } = req.body;
    const sql = 'INSERT INTO users (name, email, birthday) VALUES (?, ?, ?)';
    connect.query(sql, [name, email, birthday], (err, result) => {
        if (err) throw err;
        res.send('User added');
    });
});

// Read
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    connect.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Update
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, birthday } = req.body;
    const sql = 'UPDATE users SET name = ?, email = ?, birthday = ? WHERE id = ?';
    connect.query(sql, [name, email, birthday, id], (err, result) => {
        if (err) throw err;
        res.send('User updated');
    });
});

// Delete
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    connect.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.send('User deleted');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});