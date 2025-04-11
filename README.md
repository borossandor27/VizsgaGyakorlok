# Gyakorló feladatok
A szakmai vizsga `projekt vizsga-tevékenység ` `adatbázis - backend - frontend` 240 perces gyakorlati vizsgafeladatára felkészülést segítő feladatok 

## [Könyv áruház](./KonyvAruhaz/)

## [Felhasználó nyilvántartás](./UserRegister/)

## [Feladat ütemezés](./TodoAlkalmazas/)

## [Gyümölcsök](./Gyumolcsok/)

## [Névnap kereső](./Nevnapkereso/)

## [Ingatlan hirdetések](./Ingatlanhirdetesek/)

## [Éttermi rendelések](./EttermiRendeles/)

**Ami várhatóan közös minden feladatban:**
```bash
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

cd ..
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm pkg set type=module
npm install axios react-router-dom
npm install react-bootstrap bootstrap bootstrap-icons 
cd ..
```

> [!WARNING]  
> Mindkét `package.json`-ban állítsd be `"type": "module"` 

`src/main.jsx`
```jsx
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
```

`src/App.jsx`
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
```

`src/pages/Home.jsx`
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

`src/pages/About.jsx`
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
```