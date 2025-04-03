import express from 'express';
import cors from 'cors';

import booksRoutes from './routes/books.js';
import usersRoutes from './routes/users.js';
import ordersRoutes from './routes/orders.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/books', booksRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
// A szerver elindításához futtassa a következő parancsot a terminálban:
// node server.jsx