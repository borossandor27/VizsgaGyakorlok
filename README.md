# Gyakorló feladatok

A szakmai vizsga `projekt vizsga-tevékenység` `adatbázis - backend - frontend` **240 perces** gyakorlati vizsgafeladatára felkészülést segítő feladatok.

---

## A gyakorlati vizsga

A gyakorlati vizsga **240 perc** időtartamú, amely során egy teljes körű webalkalmazást, valamint konzolos és grafikus felületű asztali alkalmazást kell elkészíteni a megadott követelmények alapján.

### Pontozás és időbeosztás

| **Szempont** | **Pontszám** | **Idő** |
|---|---|---|
| Konzolos asztali alkalmazásfejlesztés (Java vagy C#) | 15 pont | 55 perc |
| Grafikus asztali alkalmazásfejlesztés (Java vagy C#) | 10 pont | 37 perc |
| Reszponzív weboldal készítés és formázás | 10 pont | 37 perc |
| Backend programozás *(REST API + adatbázis)* | 15 pont | 55 perc |
| Frontend programozás *(HTML / CSS / JavaScript / REST API kliens)* | 15 pont | 55 perc |
| **Összesen** | **65 pont** | **240 perc** |

> A vizsga sikeres teljesítéséhez legalább **26 pontot** kell elérni (40%).

---

## Technológiai útmutató

### Könyvtárstruktúra

```
vizsga/
├── forras/        ← adatfájlok (csv, json, sql)
├── asztali/       ← C# vagy Java konzol + GUI projekt
├── backend/       ← Node.js + Express REST API
└── frontend/      ← React + Vite alkalmazás
```

### 1. Konzolos asztali alkalmazásfejlesztés

C# vagy Java nyelven készített konzolalkalmazás, amely adatokat olvas be (`.txt`, `.csv`, `.json` fájlból vagy adatbázisból), és programozási tételek alkalmazásával végez rajtuk műveleteket: keresés, szűrés, rendezés, összesítés.

### 2. Grafikus asztali alkalmazásfejlesztés

C# (WinForms vagy WPF) vagy Java (Swing/JavaFX) alapú ablakos alkalmazás, amely adatokat jelenít meg és kezel. Az adatforrás lehet fájl vagy adatbázis, a felületnek felhasználóbarátnak és áttekinthetőnek kell lennie.

### 3. Reszponzív weboldal

HTML5, CSS3 és JavaScript alapú, több lapból álló weboldal. Reszponzív viselkedés eléréséhez használható Bootstrap, Tailwind CSS, Flexbox vagy CSS Grid. Kötelező elemek:

- Navigációs menü
- Figyelemfelkeltő kezdőlap (landing page) fejléc háttérképpel
- Adatbevitelre alkalmas űrlap (validációval és visszajelzéssel)

**Navbar példa (Bootstrap 5):**

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="index.html">Öregfák</a>
        <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Kezdőlap</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="lista.html">Lista</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="hozzaadas.html">Hozzáadás</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

**Header háttérképpel (Bootstrap 5 + CSS):**

```html
<header class="bg-primary text-white py-5 position-relative">
    <div class="container">
        <div class="row justify-content-center overlay text-center">
            <h1 class="display-4">Öregfák</h1>
            <p class="lead">Tudományos és kulturális örökség</p>
            <div class="d-flex gap-3 mt-4 justify-content-center">
                <a href="lista.html" class="btn btn-light btn-lg">Lista</a>
                <a href="hozzaadas.html" class="btn btn-outline-light btn-lg">Hozzáadás</a>
            </div>
        </div>
    </div>
</header>
```

```css
header {
    background-image: url('kepek/banner.jpg');
    background-size: cover;
    background-position: center;
}

.overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
```

### 4. Backend – Node.js + Express REST API

**Telepítés és projekt inicializálás:**

```bash
cd vizsga/backend
npm init -y
npm install express mysql2 cors
npm pkg set type=module
```

**`index.js` alapsablon:**

```js
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express()
app.use(cors())
app.use(express.json())

const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vizsga_db',
    port: 3306
})

// GET – összes rekord
app.get('/api/elemek', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM elemek')
        res.json(rows)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// GET – egy rekord id alapján
app.get('/api/elemek/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM elemek WHERE id = ?', [req.params.id])
        if (rows.length === 0) return res.status(404).json({ error: 'Nem található' })
        res.json(rows[0])
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// POST – új rekord
app.post('/api/elemek', async (req, res) => {
    try {
        const { nev, leiras } = req.body
        const [result] = await db.query(
            'INSERT INTO elemek (nev, leiras) VALUES (?, ?)',
            [nev, leiras]
        )
        res.status(201).json({ id: result.insertId })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// PUT – módosítás
app.put('/api/elemek/:id', async (req, res) => {
    try {
        const { nev, leiras } = req.body
        await db.query(
            'UPDATE elemek SET nev = ?, leiras = ? WHERE id = ?',
            [nev, leiras, req.params.id]
        )
        res.json({ success: true })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// DELETE – törlés
app.delete('/api/elemek/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM elemek WHERE id = ?', [req.params.id])
        res.json({ success: true })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

app.listen(3000, () => console.log('Backend fut: http://localhost:3000'))
```

**Indítás:**

```bash
node index.js
```

### 5. Frontend – React + Vite

**Telepítés:**

```bash
cd vizsga/frontend
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm install axios react-router-dom bootstrap react-bootstrap bootstrap-icons
```

**`src/main.jsx`:**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
```

**`src/App.jsx`** – Bootstrap navbar + útvonalak:

```jsx
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Lista from './pages/Lista'
import Hozzaadas from './pages/Hozzaadas'

export default function App() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Alkalmazás</NavLink>
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Főoldal</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/lista">Lista</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/hozzaadas">Hozzáadás</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lista" element={<Lista />} />
                    <Route path="/hozzaadas" element={<Hozzaadas />} />
                </Routes>
            </div>
        </>
    )
}
```

**`src/pages/Lista.jsx`** – adatok lekérése a saját backendről:

```jsx
import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:3000/api/elemek'

export default function Lista() {
    const [elemek, setElemek] = useState([])
    const [hiba, setHiba] = useState(null)

    useEffect(() => {
        axios.get(API)
            .then(res => setElemek(res.data))
            .catch(() => setHiba('Nem sikerült betölteni az adatokat.'))
    }, [])

    const torol = async (id) => {
        await axios.delete(`${API}/${id}`)
        setElemek(prev => prev.filter(e => e.id !== id))
    }

    if (hiba) return <div className="alert alert-danger">{hiba}</div>

    return (
        <div>
            <h2>Lista</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Név</th>
                        <th>Leírás</th>
                        <th>Műveletek</th>
                    </tr>
                </thead>
                <tbody>
                    {elemek.map(e => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.nev}</td>
                            <td>{e.leiras}</td>
                            <td>
                                <button className="btn btn-sm btn-danger"
                                    onClick={() => torol(e.id)}>
                                    <i className="bi bi-trash"></i> Törlés
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
```

**Indítás:**

```bash
npm run dev
```

---

## Gyakorlófeladatok

### Alapszintű feladatok

| # | Feladat | Leírás |
|---|---|---|
| 1 | [Gyümölcsök](./Gyumolcsok/) | Egyszerű nyilvántartó – jó első feladat a CRUD alapok gyakorlásához |
| 2 | [Felhasználó nyilvántartás](./UserRegister/) | Egyszerű felhasználókezelő alkalmazás |
| 3 | [Feladat ütemezés](./TodoAlkalmazas/) | Esemény létrehozása, megtekintése, módosítása és törlése webes felületen |
| 4 | [Diák nyilvántartás](./DiakNyilvantartas/) | Tanulói adatok kezelése |
| 5 | [Mozijegyek](./Mozijegyek/) | Mozijegy-foglalási rendszer alapjai |
| 6 | [Zenelejátszó](./Zenelejatszo/) | Zeneszámok listázása és kezelése |

### Közepes nehézségű feladatok

| # | Feladat | Leírás |
|---|---|---|
| 7 | [Éttermi rendelések](./EttermiRendeles/) | Rendelések felvétele, kezelése és státuszkövetése |
| 8 | [Autó kölcsönzés](./AutoKolcsonzes/) | Járművek nyilvántartása, foglalások kezelése |
| 9 | [Ingatlan hirdetések](./Ingatlanhirdetesek/) | [ITMP](https://www.itmp.hu/) által 2022-ben készített vizsga feladatminta |
| 10 | [Sportesemények](./Sportesemenyek/) | Eseménynaptár, csapatok és eredmények kezelése |
| 11 | [Utazási ajánlatok](./UtazasiAjanlatok/) | Utazási csomagok listázása és szűrése |
| 12 | [Kép galéria](./KepGaleria/) | Képek feltöltése, kategorizálása és megjelenítése |

### Haladó feladatok

| # | Feladat | Leírás |
|---|---|---|
| 13 | [Könyv áruház](./KonyvAruhaz/) | Teljes webáruház authentikációval és jogosultságkezeléssel |
| 14 | [Borászat](./Boraszat/) | Borkészletek, rendelések és ügyfelek komplex kezelése |
| 15 | [Fürdőhelyek](./Furdo/) | Turisztikai adatbázis komplex lekérdezésekkel |

### Hivatalos mintafeladatok

| # | Feladat | Forrás |
|---|---|---|
| 16 | [Névnap kereső](./Nevnapkereso/) | Fodor Péter és Kovács László Bálint (2022) – közzétéve az [infojegyzeten](https://infojegyzet.hu/vizsgafeladatok/szoftverfejleszto-projektfeladat/) |
