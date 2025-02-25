import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
