import jwt from 'jsonwebtoken';

const SECRET = 'titkos_jelszo'; // Éles környezetben .env fájlba

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: 'Hiányzó token' });
  }

  const token = authHeader.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: 'Érvénytelen token formátum' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // { id, name }
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Érvénytelen vagy lejárt token' });
  }
};
