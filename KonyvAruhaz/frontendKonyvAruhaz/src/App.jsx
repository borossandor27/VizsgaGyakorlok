import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Books from './pages/Books'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound'


function App() {

  return (
    <BrowserRouter>
      <header>
        <h1>Könyv Áruház</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} /> //Főoldal
        <Route path="/konyvek" element={<Books />} />
        <Route path="/konyvek/:id" element={<Book />} />
        <Route path="/konyvek/uj" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <nav>
        <ul>
          <li><Link to="/">Főoldal</Link></li>
          <li><Link to="/konyvek">Könyvek</Link></li>
          <li><Link to="/konyvek/uj">Új könyv hozzáadása</Link></li>
          <li><Link to="/konyvek/:id">Könyv részletei</Link></li>
        </ul>
      </nav>

    </BrowserRouter>
  )
}

export default App
