import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './style.css'
//import Header from './layout/Header'
import Footer from './layout/Footer'
import Menu from './layout/Menu'
import HomePage from './pages/HomePage'
import Zenekarok from './pages/Zenekarok'
import HozzaadasEgyuttes from './pages/hozzaadasEgyuttes.jsx'

function Layout() {
  return (
    <div className="layout container">
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/zenekarok" element={<Zenekarok/>} />
          <Route path="/kapcsolat" element={<HozzaadasEgyuttes />} />
          <Route path="*" element={<h1 className="text-danger">404 - Az oldal nem található!</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
function App() {
  return (
    <Layout>
      <HomePage /> {/* vagy más route-ok tartalma */}
    </Layout>
  );
}

export default App
