// src/components/KepekKezeles.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:5000';

function KepekKezeles() {
  const navigate = useNavigate();

  const [furdok,   setFurdok]   = useState([]);
  const [kivalasztott, setKivalasztott] = useState('');
  const [url,      setUrl]      = useState('');
  const [uzenet,   setUzenet]   = useState('');
  const [hibaTxt,  setHibaTxt]  = useState('');

  // ── Fürdők betöltése ─────────────────────────────────────
  useEffect(() => {
    fetch(`${API}/api/furdok`)
      .then(r => r.json())
      .then(setFurdok)
      .catch(() => setHibaTxt('Fürdők betöltése sikertelen.'));
  }, []);

  // ── Automatikus beállítás 1..10 ──────────────────────────
  const automatikusBeallitas = () => {
    const igenek = furdok.filter(f => f.azon <= 10);
    if (igenek.length === 0) {
      setHibaTxt('Nem találhatóak azon 1-10 közötti rekordok.');
      return;
    }

    let szamlalo = 0;
    const kuldes = (i) => {
      if (i >= igenek.length) {
        setUzenet(`Automatikus beállítás kész: ${szamlalo} rekord frissítve.`);
        setHibaTxt('');
        return;
      }
      const f = igenek[i];
      fetch(`${API}/api/furdok/${f.azon}/kep`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ URL: `kepek/${f.azon}.jpg` })
      })
        .then(r => {
          if (r.ok) szamlalo++;
          kuldes(i + 1);
        })
        .catch(() => kuldes(i + 1));
    };
    kuldes(0);
  };

  // ── Képlink mentése ──────────────────────────────────────
  const mentes = () => {
    setUzenet('');
    setHibaTxt('');

    if (!kivalasztott) {
      setHibaTxt('Kérem válasszon fürdőt!');
      return;
    }

    fetch(`${API}/api/furdok/${kivalasztott}/kep`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ URL: url })
    })
      .then(res => {
        if (res.ok) {
          setUzenet('Képlink sikeresen mentve!');
          // Lokálisan frissíti a listát
          setFurdok(prev =>
            prev.map(f =>
              f.azon === parseInt(kivalasztott) ? { ...f, URL: url } : f
            )
          );
        } else {
          return res.json().then(d => { throw new Error(d.uzenet); });
        }
      })
      .catch(err => setHibaTxt('Hiba: ' + err.message));
  };

  // ── Render ────────────────────────────────────────────────
  return (
    <div className="container my-4" style={{ maxWidth: 640 }}>
      <h2 className="mb-1">Képek kezelése</h2>
      <p className="text-muted mb-4">
        Válasszon ki egy fürdőt, adjon meg URL-t, majd mentse
        <code> (PUT /api/furdok/&#123;azon&#125;/kep)</code>. Az{' '}
        <strong>Automatikus beállítás</strong> gomb a feladat szerinti 1..10
        szabályt állítja be.
      </p>

      {uzenet  && <div className="alert alert-success">{uzenet}</div>}
      {hibaTxt && <div className="alert alert-danger">{hibaTxt}</div>}

      <div className="mb-3">
        <label className="form-label">Fürdő kiválasztása</label>
        <select className="form-select" value={kivalasztott}
          onChange={e => {
            setKivalasztott(e.target.value);
            const f = furdok.find(x => x.azon === parseInt(e.target.value));
            setUrl(f?.URL || '');
          }}>
          <option value="">Válasszon fürdőt...</option>
          {furdok.map(f => (
            <option key={f.azon} value={f.azon}>
              {f.azon} – {f.nev}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="form-label">Képlink (URL)</label>
        <input className="form-control" type="url"
          placeholder="kepek/3.jpg"
          value={url}
          onChange={e => setUrl(e.target.value)} />
      </div>

      <div className="d-flex gap-2 flex-wrap">
        <button className="btn btn-primary" onClick={mentes}>
          Mentés
        </button>
        <button className="btn btn-outline-secondary" onClick={automatikusBeallitas}>
          Automatikus beállítás (1..10)
        </button>
        <button className="btn btn-outline-secondary"
          onClick={() => navigate('/furdok')}>
          Lista megnyitása
        </button>
      </div>
    </div>
  );
}

export default KepekKezeles;
