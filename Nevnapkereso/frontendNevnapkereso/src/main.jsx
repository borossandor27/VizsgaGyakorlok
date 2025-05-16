import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fooldal from './pages/Fooldal.jsx';
import Nevnap from './pages/Nevnap.jsx';
import Szuletesnap from './pages/Szuletesnap.jsx';
import Kapcsolat from './pages/Kapcsolat.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Fejlec from './layout/fejlec.jsx'
import Lablec from './layout/lablec.jsx'
import Menu from './layout/menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Fejlec />
      <Menu />
      <Routes>
        <Route path="/" element={<Fooldal />} />
        <Route path="/nevnap" element={<Nevnap />} />
        <Route path="/szulinap" element={<Szuletesnap />} />
        <Route path="/kapcsolat" element={<Kapcsolat />} />
      </Routes>
      <Lablec />
    </BrowserRouter>
  </StrictMode>,
)
