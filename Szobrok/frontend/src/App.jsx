import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Kezdolap from './pages/Kezdolap';
import SzoborLista from './pages/SzoborLista';
import KepHozzaadas from './pages/KepHozzaadas';

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/"      element={<Kezdolap />} />
          <Route path="/lista" element={<SzoborLista />} />
          <Route path="/kep"   element={<KepHozzaadas />} />
        </Routes>
      </main>
      <footer>
        &copy; 2026 Szobrok nyilvántartása
      </footer>
    </>
  );
}

export default App;
