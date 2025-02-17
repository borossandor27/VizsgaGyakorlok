import express from 'express';
import cors from 'cors';
import { Router } from 'express';
import gyumolcsRouter from './routes/gyumolcs.js';
import keszletRouter from './routes/keszlet.js';
const app = express();
const port = 3000;
app.use(cors());

app.use('/gyumolcsok', gyumolcsRouter);
app.use('/keszlet', keszletRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});