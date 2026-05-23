import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero';
import api from '../api';

function Kezdolap() {
  const navigate = useNavigate();
  const [alkotok, setAlkotok] = useState([]);
  const [kivalasztott, setKivalasztott] = useState('');
  const [muvek, setMuvek] = useState([]);
  const [muvelBetolt, setMuvelBetolt] = useState(false);

  useEffect(() => {
    api.get('/alkotok')
      .then(res => setAlkotok(res.data.adatok || []))
      .catch(() => {});
  }, []);

  const alkotoValtozas = async (e) => {
    const id = e.target.value;
    setKivalasztott(id);
    setMuvek([]);
    if (!id) return;
    setMuvelBetolt(true);
    try {
      const res = await api.get(`/szobrok/alkotonkent/${id}`);
      setMuvek(res.data.adatok || []);
    } catch {
      setMuvek([]);
    } finally {
      setMuvelBetolt(false);
    }
  };

  return (
    <>
      <Hero
        cim="Szobrok nyilvántartása"
        alcim="Komplex minta a reszponzív frontend és az adatbázis-kezelés együttes ellenőrzésére."
      />

      <div className="row g-4">
        {/* Kártya 1 */}
        <div className="col-12 col-md-4">
          <div className="funkcio-kartya">
            <div>
              <h5 className="fw-bold">Szobrok listája</h5>
              <p className="text-muted" style={{ fontSize: '0.93rem' }}>
                Adatok lekérése API-ból, táblázatos megjelenítés törlési lehetőséggel.
              </p>
            </div>
            <button className="btn btn-primary mt-3" onClick={() => navigate('/lista')}>
              Megnyitás
            </button>
          </div>
        </div>

        {/* Kártya 2 */}
        <div className="col-12 col-md-4">
          <div className="funkcio-kartya">
            <div>
              <h5 className="fw-bold">Kép hozzárendelése meglévő szoborhoz</h5>
              <p className="text-muted" style={{ fontSize: '0.93rem' }}>
                Új rekord rögzítése, alkotó kiválasztása dinamikus listából.
              </p>
            </div>
            <button className="btn btn-primary mt-3" onClick={() => navigate('/kep')}>
              Megnyitás
            </button>
          </div>
        </div>

        {/* Kártya 3 – Alkotó és művei */}
        <div className="col-12 col-md-4">
          <div className="funkcio-kartya">
            <div>
              <h5 className="fw-bold">Alkotó és művei</h5>
              <p className="text-muted" style={{ fontSize: '0.93rem' }}>
                REST API eléréssel az alkotók megjelenítése legördülő menüben.
              </p>
              <label className="form-label mb-1 small fw-semibold">-- Válasszon alkotót --</label>
              <select className="form-select mb-2" value={kivalasztott} onChange={alkotoValtozas}>
                <option value="">-- Válasszon alkotót --</option>
                {alkotok.map(a => (
                  <option key={a.id} value={a.id}>{a.nev}</option>
                ))}
              </select>
              {muvelBetolt && <div className="text-muted small">Betöltés...</div>}
              {muvek.length > 0 && (
                <ul className="muvek-lista">
                  {muvek.map(s => (
                    <li key={s.id}>{s.szemely} – {s.hely} ({s.avatas})</li>
                  ))}
                </ul>
              )}
              {kivalasztott && !muvelBetolt && muvek.length === 0 && (
                <p className="text-muted small">Nincs rögzített szobor.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kezdolap;
