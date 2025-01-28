import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user', userRoutes);


app.get('/', (req, res) => {
    res.send('Our backend server is running');
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});