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
cd ..
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm pkg set type=module
npm install axios react-router-dom
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