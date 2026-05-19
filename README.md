# Gyakorló feladatok

A szakmai vizsga `projekt vizsga-tevékenység` `adatbázis - backend - frontend` 240&nbsp;perces gyakorlati vizsgafeladatára felkészülést segítő feladatok

## 1. [Könyv áruház](./KonyvAruhaz/)

Erős feladat authentikációval, jogosultság kezeléssel.

## 2. [Felhasználó nyilvántartás](./UserRegister/)

Egyszerű felhasználó nyilvántartó alkalmazás.

## 3. [Feladat ütemezés](./TodoAlkalmazas/)

Egy egyszerű feladat ütemező alkalmazás, amely lehetővé teszi a felhasználók számára, hogy eseményeket hozzanak létre, megtekintsék, frissítsék és töröljék őket egy webes felületen keresztül.

## 4. [Gyümölcsök](./Gyumolcsok/)

Egyszerű gyümölcs nyilvántartó alkalmazás.

## 5. [Névnap kereső](./Nevnapkereso/)

2022-ben központilag Fodor Péter és Kovács László Bálint által készített és az [infojegyzeten](https://infojegyzet.hu/vizsgafeladatok/szoftverfejleszto-projektfeladat/) is közzétett gyakorlati feladatsor minta.

## 6. [Ingatlan hirdetések](./Ingatlanhirdetesek/)

[Infotanár Mentor Program Club](https://www.itmp.hu/) által 2022-ben készített gyakorlati vizsga feladat minta.

## 7. [Éttermi rendelések](./EttermiRendeles/)

Egyszerű éttermi rendelés kezelő alkalmazás.

## 8. [Autó kölcsönzés](./AutoKolcsonzes/)

## 9. [Diák nyilvántartás](./DiakNyilvantartas/)

## 10. [Mozijegyek](./Mozijegyek/)

## 11. [Zenelejátszó](./Zenelejatszo/)

## 12. [Sportesemények](./Sportesemenyek/)

## 13. [Utazási ajánlatok](./UtazasiAjanlatok/)

## 14. [Kép galéria](./KepGaleria/)

## 15. [Borászat](./Boraszat/)

## 16. [Furdőhelyek](./Furdo/)

## 17. [Mozijegyek](./Mozijegyek/)

## A gyakorlati vizsga

A gyakorlati vizsga **240&nbsp;perc** időtartamú, amely során egy teljes körű webalkalmazást és konzolos és GUI felületű asztali alkalmazást kell elkészíteni a megadott követelmények alapján. A vizsga során a jelölteknek lehetőségük van bemutatni a megszerzett tudásukat és képességeiket a webfejlesztés és adatbázis-kezelés terén.

### A vizsga értékelése a megadott szempontok szerint történik

| **Szempont**                                                                                                      | **pontszám** | **idő**  |
|-------------------------------------------------------------------------------------------------------------------|--------------|----------|
| konzolos asztali alkalmazásfejlesztés Java vagy C# nyelven                                                        | 15&nbsp;pont      | 55&nbsp;perc  |
| grafikus asztali alkalmazásfejlesztés Java vagy C# nyelven                                                        | 10&nbsp;pont      | 37&nbsp;perc  |
| reszponzív viselkedésű weboldal készítés és formázás                                                              | 10&nbsp;pont      | 37&nbsp;perc  |
| backend programozás *(adatbázis lekérdezést is végző, néhány végpontot tartalmazó REST API kiszolgáló létrehozása)* | 15&nbsp;pont      | 55&nbsp;perc  |
| frontend programozás *(HTML / CSS /JavaScript / REST API kliens)*                                                   | 15&nbsp;pont      | 55&nbsp;perc  |
| mindösszesen                                                                                                      | **65&nbsp;pont**      | **240&nbsp;perc** |

> A maximálisan megszerezhető&nbsp;pontszám 65&nbsp;pont, amely a vizsga teljesítése esetén elérhető. A vizsga sikeres teljesítéséhez legalább 26&nbsp;pontot kell elérni.

### 1. Konzolos asztali alkalmazásfejlesztés

A feladat megoldása során egy konzolos alkalmazást kell készíteni Java vagy C# nyelven, amely képes adatokat kezelni és megjeleníteni a felhasználó számára. Az adatforrás lehet egy helyi `.txt`, `csv`, `json` fájl vagy adatbázis. A kapott adatokból a programozási tételek alkalmazásával különböző műveleteket kell végezni, például keresést, szűrést vagy rendezést.

### 2. Grafikus asztali alkalmazásfejlesztés

A feladat megoldása során egy grafikus felhasználói felülettel rendelkező alkalmazást kell készíteni Java vagy C# nyelven. Az alkalmazásnak képesnek kell lennie adatokat megjeleníteni és kezelni a felhasználó számára. Az adatforrás lehet egy helyi `.txt`, `csv`, `json` fájl vagy adatbázis. A kapott adatokból a programozási tételek alkalmazásával különböző műveleteket kell végezni, például keresést, szűrést vagy rendezést.

### 3. Reszponzív viselkedésű weboldal készítés és formázás

A feladat megoldása során egy reszponzív weboldalt kell készíteni HTML5, CSS3 és JavaScript használatával. A weboldalnak alkalmazkodnia kell különböző eszközök képernyőméreteihez és felhasználóbarát felületet kell biztosítania. A weboldal tartalmazhat statikus tartalmat, valamint interaktív elemeket is.
A reszponzív viselkedés eléréséhez használhatók különböző technikák, például média lekérdezések (media queries), rugalmas rácsok (flexbox) vagy CSS grid. A weboldal formázásához használhatók különböző CSS keretrendszerek, például Bootstrap vagy Tailwind CSS.
Mivel több lapos webdokumentumot kell készíteni, így elengedhetelen egy egyszerű navigációs menüt is készíteni, amely lehetővé teszi a felhasználók számára, hogy könnyen navigáljanak a weboldal különböző részei között.

```html
    <!-- Navigációs sáv -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html">Öregfák</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Kezdőlap</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="fak.html">Fák listája</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="hozzaadas.html">Új fa</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="kepek.html">Képek</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
```

**landing page: `index.html`**

Itt egy figyelemfelkeltő kezdőlapot kell készíteni, amely bemutatja a weboldal témáját és célját. A kezdőlapnak tartalmaznia kell egy nagy, figyelemfelkeltő képet vagy bannert, valamint egy rövid leírást a weboldalról. Emellett érdemes lehet néhány kiemelt információt vagy szolgáltatást is megjeleníteni, hogy a látogatók gyorsan megértsék, mit kínál a weboldal.

```html
<!-- header -->
<header class="bg-primary text-white py-5">
    <div class="container">
      <div class="row justify-content-center overlay">
        <h1 class="display-4">Öregfák</h1>
        <p class="lead">Tudományos és kulturális örökség</p>
        <div class="d-flex gap-3 mt-4">
          <a href="fak.html" class="btn btn-light btn-lg">Fák listája</a>
          <a href="hozzaadas.html" class="btn btn-outline-light btn-lg">Új fa hozzáadása</a>
        </div>
      </div>
    </div>
</header>
```

A fejlécet egyéni formázással és egy nagy háttérképpel lehet kiemelni, hogy azonnal megragadja a látogatók figyelmét. A gombok segítségével a látogatók könnyen navigálhatnak a weboldal különböző részei között.

```css
/* Egyéni stílus a fejléchez */
header {
    position: relative;
    background-image: url('kepek/1.jpg');
    background-size: cover;
    background-position: center;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Sötét átlátszó réteg a jobb olvashatóságért */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
```

Követelmény adatbevitelre alkalmas űrlap készítése, amely lehetővé teszi a felhasználók számára, hogy új adatokat adjanak hozzá a rendszerhez. Az űrlapnak tartalmaznia kell különböző típusú mezőket, például szöveges mezőket, legördülő listákat vagy jelölőnégyzeteket, amelyek segítségével a felhasználók megadhatják a szükséges információkat. Az űrlapnak reszponzívnak kell lennie, hogy különböző eszközökön is jól használható legyen. Emellett érdemes lehet valamilyen visszajelzést is biztosítani a felhasználók számára, például egy sikeres mentés esetén megjelenő üzenetet vagy egy hiba esetén megjelenő figyelmeztetést.

```html
  <!-- Űrlap kártya -->
  <main class="row justify-content-center">
      <div class="col-lg-8 col-md-10 col-12">
          <div class="card shadow-sm border-0 rounded-4">
              <div class="card-body p-4 p-md-5">
                  <form id="kepModositasForm">
                      <!-- Fa kiválasztása -->
                      <div class="mb-4">
                          <label for="faSelect" class="form-label fw-semibold">🌲 Fa kiválasztása</label>
                          <select class="form-select form-select-lg" id="faSelect" required>
                              <option selected disabled value="">Válasszon...</option>
                              <option value="10">10 - Platán (Budapest)</option>
                              <option value="11">11 - Hárs (Szeged)</option>
                              <option value="12">12 - Tölgy (Pécs)</option>
                              <option value="13">13 - Bükk (Miskolc)</option>
                              <option value="14">14 - Fenyő (Sopron)</option>
                          </select>
                          <div class="form-text">Válassza ki a módosítani kívánt fát.</div>
                      </div>

                      <!-- Új képlink mező -->
                      <div class="mb-4">
                          <label for="kepLink" class="form-label fw-semibold">🔗 Új képlink</label>
                          <input type="url" class="form-control form-control-lg" id="kepLink"
                              placeholder="kepek/3.jpg vagy https://...">
                          <div class="form-text">Megadhat relatív elérési utat (pl. kepek/1.jpg) vagy teljes
                              URL-t.</div>
                      </div>

                      <!-- Előnézet (plusz funkció) -->
                      <div class="mb-4">
                          <label class="form-label fw-semibold">👁️ Előnézet</label>
                          <div id="kepElonezet" class="border rounded-3 p-3 text-center bg-light"
                              style="min-height: 150px;">
                              <span class="text-muted">Kép előnézete itt jelenik meg...</span>
                          </div>
                      </div>

                      <!-- Gombok -->
                      <div class="d-flex flex-wrap gap-3 mt-4">
                          <button type="button" id="mentesBtn" class="btn btn-primary btn-lg px-5">
                              💾 Mentés
                          </button>
                          <button type="reset" class="btn btn-outline-secondary btn-lg px-4">
                              🗑️ Űrlap törlése
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </main>
```

### 4. Backend programozás

A feladat megoldása során egy REST API kiszolgálót kell létrehozni, amely képes adatbázis lekérdezéseket végrehajtani és adatokat szolgáltatni a frontend számára. A backend alkalmazásnak képesnek kell lennie különböző végpontokat kezelni, amelyek lehetővé teszik az adatok lekérését, hozzáadását, módosítását és törlését. A backend alkalmazás fejlesztéséhez használhatók különböző programozási nyelvek és keretrendszerek, például Node.js, Python, Java vagy C#. Ajánlott az Express.js használata.

```bash
mkdir vizsga
cd vizsga
mkdir forras
mkdir asztali
mkdir backend
cd backend
npm init -y
npm i express mysql2 cors
npm pkg set type=module
echo import express from 'express'; > index.js
echo import cors from 'cors'; >> index.js
echo import mysql from 'mysql2'; >> index.js
echo. >> index.js
echo const app = express(); >> index.js
echo app.use(cors()); >> index.js
echo app.use(express.json()); >> index.js
echo. >> index.js
echo const db = mysql.createConnection(^{ >> index.js
echo     host: 'localhost', >> index.js
echo     user: 'root', >> index.js
echo     password: '', >> index.js
echo     database: '', >> index.js
echo     port: 3306 >> index.js
echo }); >> index.js
echo. >> index.js
echo // vegpontok >> index.js
echo app.get('/api/valami', (req, res) => { >> index.js
echo     db.query('SELECT * FROM valami', (err, results) => { >> index.js
echo         if (err) { >> index.js
echo             console.error('Hiba történt:', err); >> index.js
echo             res.status(500).json({ error: 'Hiba történt' }); >> index.js
echo         } else { >> index.js
echo             res.json(results); >> index.js
echo         } >> index.js
echo     }); >> index.js
echo }); >> index.js
echo. >> index.js
echo // további végpontok (POST, PUT, DELETE) >> index.js
echo. >> index.js
echo app.listen(3000, () =^> ^{ >> index.js
echo     console.log('Server is running on http://localhost:3000'); >> index.js
echo }); >> index.js
```

### 5. Frontend programozás

A feladat megoldása során egy webes frontend alkalmazást kell készíteni HTML, CSS és JavaScript használatával, amely képes kommunikálni a backend REST API-val. A frontend alkalmazásnak képesnek kell lennie adatokat lekérni a backendről, megjeleníteni azokat a felhasználó számára, valamint lehetőséget kell biztosítania az adatok hozzáadására, módosítására és törlésére. A frontend alkalmazás fejlesztéséhez használhatók különböző keretrendszerek és könyvtárak, például React, Angular vagy Vue.js. Ajánlott a React használata Vite környezetben.

```bash
mkdir frontend
cd frontend
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm install axios react-router-dom bootstrap react-bootstrap bootstrap-icons
npm pkg set type=module
```

`src/main.jsx` fájl tartalma:

Itt csak az útválasztó és a Bootstrap importálása van hozzáadva, a többi rész változatlan maradt.

```jsx
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

`src/App.jsx` fájl tartalma:

Definiáljuk a navigációs menüt és az útvonalakat a React Router segítségével. A menü egyszerű linkeket tartalmaz, amelyek lehetővé teszik a felhasználók számára, hogy könnyen navigáljanak a weboldal különböző részei között.

```jsx
import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <NavLink to="/">Főoldal</NavLink>
        <NavLink to="/about">Rólunk</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
```

`src/pages/Home.jsx` fájl tartalma:

```jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setData(response.data))
      .catch(error => console.error('Hiba történt:', error))
  }, [])

  return (
    <div>
      <h1>Főoldal</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Betöltés...</p>
      )}
    </div>
  )
}
```

`src/pages/About.jsx` fájl tartalma:

```jsx
import React from 'react'

export default function About() {
  return (
    <div>
      <h1>Rólunk</h1>
      <p>Ez egy példa React alkalmazás a Vite használatával.</p>
    </div>
  )
}
```

`App.jsx` a menü Bootstrap-el

```jsx
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Weboldalam</NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Főoldal</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">Rólunk</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
```
