import express, { Router } from "express";
import connection from "./database.js";
const gyumolcsRouter = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


gyumolcsRouter.get('/', async ()=> {
    try {
      const [rows] = await connection.execute('SELECT * FROM gyumolcs'); // A lekérdezés eredménye a rows tömbben lesz    
      return rows; // A sorokat visszaadja
    } catch (error) {
      console.error('Hiba történt a lekérdezés során:', error.message);
      throw error; // Ha akarod, feldobhatod a hibát a hívónak
    }
  });
    
gyumolcsRouter.get('/:gyumolcsid', (req, res) => {
    res.send('Gyumolcsok ID!');
});
gyumolcsRouter.post('/', (req, res) => {
    res.send('Gyumolcsok POST!');
}
);
app.put('/gyumolcsok/:gyumolcsid', (req, res) => {
    res.send('Gyumolcsok PUT!');
});
app.delete('/gyumolcsok/:gyumolcsid', (req, res) => {
    res.send('Gyumolcsok DELETE!');
});

export default gyumolcsRouter;
