import { db } from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = 'titkos_jelszo'; // Tedd környezeti változóba éles környezetben

export const registerUser = async (req, res) => {
  const { felhasznalonev, email, jelszo, cim, telefonszam } = req.body;

  try {
    const [existing] = await db.query(
      'SELECT * FROM felhasznalok WHERE felhasznalonev = ? OR email = ?',
      [felhasznalonev, email]
    );
    if (existing.length > 0) {
      return res.status(400).json({ error: 'Felhasználónév vagy email már létezik' });
    }

    const hashedPassword = await bcrypt.hash(jelszo, 10);
    await db.query(
      'INSERT INTO felhasznalok (felhasznalonev, email, jelszo, cim, telefonszam) VALUES (?, ?, ?, ?, ?)',
      [felhasznalonev, email, hashedPassword, cim, telefonszam]
    );

    res.status(201).json({ message: 'Sikeres regisztráció' });
  } catch (err) {
    res.status(500).json({ error: 'Adatbázis hiba' });
  }
};

export const loginUser = async (req, res) => {
  const { felhasznalonev, jelszo } = req.body;

  try {
    const [users] = await db.query(
      'SELECT * FROM felhasznalok WHERE felhasznalonev = ?',
      [felhasznalonev]
    );

    if (users.length === 0) {
      return res.status(404).json({ error: 'Nincs ilyen felhasználó' });
    }

    const user = users[0];
    const match = await bcrypt.compare(jelszo, user.jelszo);

    if (!match) {
      return res.status(401).json({ error: 'Hibás jelszó' });
    }

    const token = jwt.sign({ id: user.felhaszalo_id, name: user.felhasznalonev }, SECRET, {
      expiresIn: '1d'
    });

    res.json({ token, userId: user.felhaszalo_id, username: user.felhasznalonev });
  } catch (err) {
    res.status(500).json({ error: 'Adatbázis hiba' });
  }
};
