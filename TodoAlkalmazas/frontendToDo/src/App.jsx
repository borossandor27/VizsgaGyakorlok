import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {  Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import About from './pages/About'
import Calendar from './pages/Calendar'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
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
                  <Link className="nav-link" to="/users">Felhasználók</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/calendar">Naptár</Link>
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
            <Route path="/users" element={<Users />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <footer className="bg-light text-center text-lg-start mt-4">
          <div className="text-center p-3">
            © 2023 Weboldalam
          </div>
        </footer>
    
    </BrowserRouter>
  )
}
