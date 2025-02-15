import connection from "./database";
import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/gyumolcsok', (req, res) => {
    const query = 'SELECT * FROM gyumolcsok';
    connection.query(query, (err, rows) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.status(201).json(rows);
    });
    res.send('Gyumolcsok!');
});
app.get('/gyumolcsok/:gyumolcsid', (req, res) => {
    res.send('Gyumolcsok ID!');
});
app.post('/gyumolcsok', (req, res) => {
    res.send('Gyumolcsok POST!');
}
);
app.put('/gyumolcsok/:gyumolcsid', (req, res) => {
    res.send('Gyumolcsok PUT!');
});
app.delete('/gyumolcsok/:gyumolcsid', (req, res) => {
    res.send('Gyumolcsok DELETE!');
});
