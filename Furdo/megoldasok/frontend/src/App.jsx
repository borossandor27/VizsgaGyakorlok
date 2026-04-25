// src/App.jsx
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import FurdokLista   from './components/FurdokLista';
import UjFurdo       from './components/UjFurdo';
import KepekKezeles  from './components/KepekKezeles';
import Kezdolap      from './components/Kezdolap';
import './App.css';

function App() {
  return (
    <Router>
      {/* ── Navigációs sáv ─────────────────────────────── */}
      <nav className="navbar navbar-expand-lg navbar-dark furdo-navbar">
        <div className="container">
          <span className="navbar-brand fw-bold">Öregfürdők</span>

          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active-menu' : '')} to="/" end>
                  Kezdőlap
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active-menu' : '')} to="/furdok">
                  Fürdők listája
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active-menu' : '')} to="/uj-furdo">
                  Új fürdő
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active-menu' : '')} to="/kepek">
                  Képek
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ── Útvonalak ──────────────────────────────────── */}
      <Routes>
        <Route path="/"         element={<Kezdolap />} />
        <Route path="/furdok"   element={<FurdokLista />} />
        <Route path="/uj-furdo" element={<UjFurdo />} />
        <Route path="/kepek"    element={<KepekKezeles />} />
      </Routes>
    </Router>
  );
}

export default App;
