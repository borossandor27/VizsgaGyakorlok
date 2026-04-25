// src/components/FurdokLista.jsx
import { useState, useEffect } from 'react';

const API = 'http://localhost:5000';

function FurdokLista() {
  const [furdok,  setFurdok]  = useState([]);
  const [uzenet,  setUzenet]  = useState('');
  const [hibaTxt, setHibaTxt] = useState('');

  // ── Adatok betöltése ──────────────────────────────────────
  const betoltes = () => {
    fetch(`${API}/api/furdok`)
      .then(res => {
        if (!res.ok) throw new Error('Hálózati hiba');
        return res.json();
      })
      .then(data => {
        setFurdok(data);
        setUzenet(`Sikeres betöltés. Rekordok száma: ${data.length}`);
        setHibaTxt('');
      })
      .catch(err => setHibaTxt('Hiba a betöltés során: ' + err.message));
  };

  useEffect(() => { betoltes(); }, []);

  // ── Törlés ────────────────────────────────────────────────
  const torles = (azon) => {
    if (!window.confirm(`Biztosan törli a(z) ${azon}. azonosítójú fürdőt?`)) return;

    fetch(`${API}/api/furdok/${azon}`, { method: 'DELETE' })
      .then(res => {
        if (res.status === 204) {
          setFurdok(prev => prev.filter(f => f.azon !== azon));
          setUzenet('Fürdő sikeresen törölve.');
        } else {
          return res.json().then(d => { throw new Error(d.uzenet); });
        }
      })
      .catch(err => setHibaTxt(err.message));
  };

  // ── Render ────────────────────────────────────────────────
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2>Fürdők listája</h2>
          <p className="text-muted mb-0">Rekordok száma: {furdok.length}</p>
        </div>
        <button className="btn btn-outline-secondary" onClick={betoltes}>
          Frissítés
        </button>
      </div>

      {uzenet  && <div className="alert alert-success alert-dismissible">
        {uzenet}
        <button type="button" className="btn-close"
          onClick={() => setUzenet('')} />
      </div>}
      {hibaTxt && <div className="alert alert-danger">{hibaTxt}</div>}

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Azonosító</th>
              <th>Fürdő neve</th>
              <th>Típus</th>
              <th>Belépőjegy</th>
              <th>Nyitás éve</th>
              <th>Város</th>
              <th>Kép</th>
              <th>Művelet</th>
            </tr>
          </thead>
          <tbody>
            {furdok.map(f => (
              <tr key={f.azon}>
                <td>{f.azon}</td>
                <td>{f.nev}</td>
                <td><span className="badge bg-secondary">{f.tipus}</span></td>
                <td>{f.belepodij.toLocaleString('hu-HU')} Ft</td>
                <td>{f.nyitas_eve}</td>
                <td>{f.varos}</td>
                <td>
                  {f.URL
                    ? <a href={f.URL} target="_blank" rel="noreferrer"
                        className="btn btn-sm btn-outline-primary">Megnyitás</a>
                    : <span className="text-muted fst-italic">Nincs kép</span>}
                </td>
                <td>
                  <button className="btn btn-sm btn-danger"
                    onClick={() => torles(f.azon)}>
                    Törlés
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FurdokLista;
