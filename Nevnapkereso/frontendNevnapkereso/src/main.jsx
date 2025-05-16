import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Fejlec from './layout/fejlec.jsx'
import Lablec from './layout/lablec.jsx'
import Menu from './layout/menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Fejlec />
      <Menu />
      
      <Lablec />
    </BrowserRouter>
  </StrictMode>,
)
