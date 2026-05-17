// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar     from './components/Navbar';
import Footer     from './components/Footer';
import Fooldal    from './pages/Fooldal';
import Lista      from './pages/Lista';
import UjEpitmeny from './pages/UjEpitmeny';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/"     element={<Fooldal />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/uj"    element={<UjEpitmeny />} />
          <Route path="*"      element={
            <div style={{textAlign:'center', padding:'5rem 1rem'}}>
              <h2 style={{fontFamily:'var(--betu-cim)', color:'var(--szin-ko)'}}>404 – Az oldal nem található</h2>
              <a href="/" style={{color:'var(--szin-arany)'}}>Vissza a főoldalra</a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
