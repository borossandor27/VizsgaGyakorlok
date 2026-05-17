// src/app.js
// Express alkalmazás belépési pontja

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import epitmenyekRouter from './routes/epitmenyek.js';
import telepulesekRouter from './routes/telepulesek.js';

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3001;

// --- Middleware ---
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE'],
}));
app.use(express.json());

// --- Útvonalak ---
app.use('/api/epitmenyek', epitmenyekRouter);
app.use('/api/telepulesek', telepulesekRouter);

// --- Állapot ellenőrzés ---
app.get('/api/health', (_req, res) => {
  res.json({ allapot: 'OK', idopont: new Date().toISOString() });
});

// --- 404 kezelő ---
app.use((_req, res) => {
  res.status(404).json({ hiba: 'A kért végpont nem létezik.' });
});

// --- Globális hibakezelő ---
app.use((err, _req, res, _next) => {
  console.error('Nem kezelt hiba:', err);
  res.status(500).json({ hiba: 'Belső szerverhiba.' });
});

// --- Indítás ---
app.listen(PORT, () => {
  console.log(`✅  Épített Örökség API fut: http://localhost:${PORT}`);
  console.log(`   Végpontok:`);
  console.log(`     GET    /api/epitmenyek`);
  console.log(`     GET    /api/epitmenyek/:azon`);
  console.log(`     POST   /api/epitmenyek`);
  console.log(`     DELETE /api/epitmenyek/:azon`);
  console.log(`     GET    /api/telepulesek`);
  console.log(`     GET    /api/health`);
});
