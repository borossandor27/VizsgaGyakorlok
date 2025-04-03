import { db } from '../db.js';

export const getAllBooks = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM konyvek');
  res.json(rows);
};

export const getBookById = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM konyvek WHERE konyv_id = ?', [req.params.id]);
  if (rows.length === 0) return res.status(404).json({ error: 'Nincs ilyen könyv' });
  res.json(rows[0]);
};

export const createBook = async (req, res) => {
  const { cim, szerzo, kiado, kiadas_ev, isbn, leiras, boritokep, ar, keszleten } = req.body;
  await db.query('INSERT INTO konyvek (cim, szerzo, kiado, kiadas_ev, isbn, leiras, boritokep, ar, keszleten) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [cim, szerzo, kiado, kiadas_ev, isbn, leiras, boritokep, ar, keszleten]);
  res.status(201).json({ message: 'Könyv hozzáadva' });
};

export const updateBook = async (req, res) => {
  const { cim, szerzo, kiado, kiadas_ev, isbn, leiras, boritokep, ar, keszleten } = req.body;
  await db.query('UPDATE konyvek SET cim=?, szerzo=?, kiado=?, kiadas_ev=?, isbn=?, leiras=?, boritokep=?, ar=?, keszleten=? WHERE konyv_id=?',
    [cim, szerzo, kiado, kiadas_ev, isbn, leiras, boritokep, ar, keszleten, req.params.id]);
  res.json({ message: 'Könyv módosítva' });
};

export const deleteBook = async (req, res) => {
  await db.query('DELETE FROM konyvek WHERE konyv_id = ?', [req.params.id]);
  res.json({ message: 'Könyv törölve' });
};
