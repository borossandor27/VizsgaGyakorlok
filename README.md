# Gyakorló feladatok

A szakmai vizsga `projekt vizsga-tevékenység ` `adatbázis - backend - frontend` 240&nbsp;perces gyakorlati vizsgafeladatára felkészülést segítő feladatok

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

A feladat megoldása során egy reszponzív weboldalt kell készíteni HTML, CSS és JavaScript használatával. A weboldalnak alkalmazkodnia kell különböző eszközök képernyőméreteihez, és felhasználóbarát felületet kell biztosítania. A weboldal tartalmazhat statikus tartalmat, valamint interaktív elemeket is. Vannak olyan vizsgafeladatok, amelyeknél a frontend megvalósításánál kell reszponzív viselkedést alkalmazni és erre adják a&nbsp;pontot.

### 4. Backend programozás

A feladat megoldása során egy REST API kiszolgálót kell létrehozni, amely képes adatbázis lekérdezéseket végrehajtani és adatokat szolgáltatni a frontend számára. A backend alkalmazásnak képesnek kell lennie különböző végpontokat kezelni, amelyek lehetővé teszik az adatok lekérését, hozzáadását, módosítását és törlését. A backend alkalmazás fejlesztéséhez használhatók különböző programozási nyelvek és keretrendszerek, például Node.js, Python, Java vagy C#. Ajánlott az Express.js használata Node.js környezetben.

  ````bash
  mkdir vizsga
  cd vizsga
  mkdir forras
  mkdir asztali
  mkdir backend
  cd backend
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
  echo. >> index.js
  echo app.listen(3000, () =^> ^{ >> index.js
  echo     console.log('Server is running on http://localhost:3000'); >> index.js
  echo }); >> index.js
  ````

### 5. Frontend programozás

A feladat megoldása során egy webes frontend alkalmazást kell készíteni HTML, CSS és JavaScript használatával, amely képes kommunikálni a backend REST API-val. A frontend alkalmazásnak képesnek kell lennie adatokat lekérni a backendről, megjeleníteni azokat a felhasználó számára, valamint lehetőséget kell biztosítania az adatok hozzáadására, módosítására és törlésére. A frontend alkalmazás fejlesztéséhez használhatók különböző keretrendszerek és könyvtárak, például React, Angular vagy Vue.js. Ajánlott a React használata Vite környezetben.

  ````bash
  mkdir frontend
  cd frontend
  npm create vite@latest my-react-app -- --template react
  cd my-react-app
  npm install
  npm install axios react-router-dom bootstrap bootstrap-icons
  npm pkg set type=module
  ````

`src/main.jsx` fájl tartalma:

  ````jsx
  import React from 'react'
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
  ````

`src/App.jsx` fájl tartalma:

  ```jsx
  import React from 'react'
  import { Routes, Route, Link } from 'react-router-dom'
  import Home from './pages/Home'
  import About from './pages/About'

  export default function App() {
    return (
      <div>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/">Főoldal</Link>
          <Link to="/about">Rólunk</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    )
  }
  ````

`src/pages/Home.jsx` fájl tartalma:

  ````jsx
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
  ````

`src/pages/About.jsx` fájl tartalma:

  ````jsx
  import React from 'react'

  export default function About() {
    return (
      <div>
        <h1>Rólunk</h1>
        <p>Ez egy példa React alkalmazás a Vite használatával.</p>
      </div>
    )
  }
  ````

`App.jsx` a menü Bootstrap-el

  ````jsx
  import { BrowserRouter } from 'react-router-dom'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.bundle.min'
  import 'bootstrap-icons/font/bootstrap-icons.css'
  import {  Routes, Route, Link } from 'react-router-dom'
  import Home from './pages/Home'
  import About from './pages/About'

  export default function App() {
    return (
      <BrowserRouter>

        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Weboldalam</Link>
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
                    <Link className="nav-link" to="/">Főoldal</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">Rólunk</Link>
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
  ````

## 1. [Könyv áruház](./KonyvAruhaz/)

Erős feladat authentikációval, jogosultság kezeléssel, adatbázis kapcsolattal, REST API backenddel és React front-enddel.

## 2. [Felhasználó nyilvántartás](./UserRegister/)

## 3. [Feladat ütemezés](./TodoAlkalmazas/)

## 4. [Gyümölcsök](./Gyumolcsok/)

## 5. [Névnap kereső](./Nevnapkereso/)

## 6. [Ingatlan hirdetések](./Ingatlanhirdetesek/)

## 7. [Éttermi rendelések](./EttermiRendeles/)

## 8. [Autó kölcsönzés](./AutoKolcsonzes/)

## 9. [Diák nyilvántartás](./DiakNyilvantartas/)

## 10. [Mozijegyek](./Mozijegyek/)

## 11. [Zenelejátszó](./Zenelejatszo/)

## 12. [Sportesemények](./Sportesemenyek/)

## 13. [Utazási ajánlatok](./UtazasiAjanlatok/)

## 14. [Kép galéria](./KepGaleria/)

## 15. [Állatmenhely](./Allatmenhely/)

## 16. [Online tanfolyamok](./OnlineTanfolyamok/)

## 17. [Hírek olvasó](./HirOlvaso/)

## 18. [Időjárás alkalmazás](./IdojarasAlkalmazas/)

## 19. [Közösségi hálózat](./KozossegiHalozat/)

## 20. [Egészségügyi napló](./EgeszsegugyiNaplo/)

## 21. [Kertészeti napló](./KerteszetiNaplo/)

## 22. [Film adatbázis](./FilmAdatbazis/)

## 23. [Receptek gyűjteménye](./ReceptekGyujtemenye/)

## 24. [Közlekedési menetrend](./KozlekedesiMenetrend/)

## 25. [Könyvjelző kezelő](./KonyvjelzoKezele/)

## 26. [Nyelvtanuló alkalmazás](./NyelvtanuloAlkalmazas/)

## 27. [Pénzügyi nyilvántartás](./PenzugyiNyilvantartas/)

## 28. [Művészeti galéria](./MuveszetiGaleria/)

## 29. [Virtuális könyvtár](./VirtualisKonyvtar/)

## 30. [Autóalkatrész bolt](./AutoalkatreszBolt/)
