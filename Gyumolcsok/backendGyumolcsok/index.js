import express from 'express';
import { Router } from 'express';
import gyumolcsRouter from './gyumolcs.js';
import keszletRouter from './keszlet.js';
const app = express();
const port = 3000;

app.use('/gyumolcsok', gyumolcsRouter);
app.use('/keszlet', keszletRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});