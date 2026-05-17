# Magyarország Épített Öröksége – Fullstack mintaalkalmazás

Oktatási célú fullstack webfejlesztési projekt:  
**Express REST API** (Node.js) + **React + Vite** frontend + **MySQL** (`epitmeny_db`)

---

## Projektstruktúra

```
epitmeny-backend/
├── src/
│   ├── app.js              ← Express belépési pont
│   ├── db/
│   │   └── pool.js         ← MySQL kapcsolatkészlet
│   └── routes/
│       ├── epitmények.js   ← CRUD végpontok
│       └── telepulesek.js  ← Települések listája
├── .env.example
└── package.json

epitmeny-frontend/
├── src/
│   ├── api/
│   │   └── epitmenyApi.js  ← Axios kliens
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── TipusBadge.jsx
│   ├── pages/
│   │   ├── Fooldal.jsx     ← Nyitóoldal
│   │   ├── Lista.jsx       ← Listázás + szűrés + törlés
│   │   └── UjEpitmeny.jsx  ← Rögzítő űrlap
│   ├── App.jsx             ← Routing
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Gyors indítás

### 1. Adatbázis előkészítése

```bash
mysql -u root -p < epitmeny_db.sql
```

### 2. Backend indítása

```bash
cd epitmeny-backend
npm install

# Konfiguráció
cp .env.example .env
# Szerkessze a .env fájlt: DB_USER, DB_PASSWORD stb.

npm run dev       # nodemon – fejlesztői módban
# vagy
npm start         # éles indítás
```

A backend a **http://localhost:3001** porton indul.

### 3. Frontend indítása

```bash
cd epitmeny-frontend
npm install
npm run dev
```

A Vite dev szerver a **http://localhost:5173** porton indul.  
A Vite proxy automatikusan továbbítja az `/api` kéréseket a backend felé.

---

## API végpontok

| Metódus | Végpont                   | Leírás                              |
|---------|---------------------------|-------------------------------------|
| GET     | `/api/epitmények`         | Összes építmény; szűrők: `?tipus=vár&nev=egri` |
| GET     | `/api/epitmények/:azon`   | Egy építmény részletei              |
| POST    | `/api/epitmények`         | Új építmény rögzítése (JSON body)   |
| DELETE  | `/api/epitmények/:azon`   | Építmény törlése                    |
| GET     | `/api/telepulesek`        | Összes település (legördülőhöz)     |
| GET     | `/api/health`             | API állapot ellenőrzés              |

### POST /api/epitmények – kérés törzse

```json
{
  "azon": 41,
  "nev": "Új vár neve",
  "tipus": "vár",
  "magassag": 250,
  "telepules_id": 3,
  "epites_eve": 1300
}
```

---

## Technológiák

| Réteg     | Technológia                    |
|-----------|-------------------------------|
| Backend   | Node.js, Express 4, mysql2    |
| Frontend  | React 18, Vite 5, React Router 6, Axios |
| Stílus    | Bootstrap 5.3, Bootstrap Icons, Cinzel / EB Garamond |
| Adatbázis | MySQL / MariaDB (`epitmeny_db`) |

---

## Fejlesztési tippek a diákoknak

- A backend `src/routes/epitmények.js` fájlban találhatók az API végpontok – ezt érdemes először tanulmányozni.
- A frontend `src/api/epitmenyApi.js` fájl az összes Axios hívást tartalmazza egy helyen.
- A Vite proxy (`vite.config.js`) teszi lehetővé, hogy a frontend `/api/...` kéréseit a backend fogadja – éles környezetben ezt az nginx/Apache konfigurálja.
- A `pool.js` kapcsolatkészletet (`mysql2/promise`) érdemes összehasonlítani a direkt `mysql2` és a Sequelize ORM megközelítésekkel.
