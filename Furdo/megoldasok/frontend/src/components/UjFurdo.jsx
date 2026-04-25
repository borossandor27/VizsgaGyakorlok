// src/components/UjFurdo.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:5000';

function UjFurdo() {
  const navigate = useNavigate();

  const [varosok,  setVarosok]  = useState([]);
  const [uzenet,   setUzenet]   = useState('');
  const [hibaTxt,  setHibaTxt]  = useState('');

  const [form, setForm] = useState({
    nev:        '',
    tipus:      '',
    medencek:   '',
    belepodij:  '',
    varos_id:   '',
    nyitas_eve: new Date().getFullYear(),
    URL:        ''
  });

  // ── Városok betöltése a dropdownhoz ──────────────────────
  useEffect(() => {
    fetch(`${API}/api/varosok`)
      .then(r => r.json())
      .then(setVarosok)
      .catch(() => setHibaTxt('Városok betöltése sikertelen.'));
  }, []);

  // ── Input kezelő ─────────────────────────────────────────
  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ── Mentés ────────────────────────────────────────────────
  const mentes = () => {
    setUzenet('');
    setHibaTxt('');

    fetch(`${API}/api/furdok`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        medencek:   parseInt(form.medencek)  || 1,
        belepodij:  parseInt(form.belepodij),
        varos_id:   parseInt(form.varos_id),
        nyitas_eve: parseInt(form.nyitas_eve)
      })
    })
      .then(res => {
        if (res.status === 201) {
          setUzenet('Új fürdő sikeresen mentve!');
          setTimeout(() => navigate('/furdok'), 1500);
        } else {
          return res.json().then(d => { throw new Error(d.uzenet || 'Ismeretlen hiba'); });
        }
      })
      .catch(err => setHibaTxt('Hiba: ' + err.message));
  };

  // ── Render ────────────────────────────────────────────────
  return (
    <div className="container my-4" style={{ maxWidth: 640 }}>
      <h2 className="mb-4">Új fürdő felvétele</h2>

      {uzenet  && <div className="alert alert-success">{uzenet}</div>}
      {hibaTxt && <div className="alert alert-danger">{hibaTxt}</div>}

      <div className="mb-3">
        <label className="form-label text-muted small">
          Azonosító (azon) – automatikusan a következő szabad érték (max+1)
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label">Fürdő neve</label>
        <input className="form-control" name="nev"
          value={form.nev} onChange={onChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">Típus</label>
        <select className="form-select" name="tipus"
          value={form.tipus} onChange={onChange}>
          <option value="">Válasszon típust...</option>
          <option>gyógyfürdő</option>
          <option>strand</option>
          <option>élményfürdő</option>
        </select>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Belépőjegy ára (Ft)</label>
          <input className="form-control" type="number" name="belepodij"
            value={form.belepodij} onChange={onChange} />
        </div>
        <div className="col">
          <label className="form-label">Medencék száma</label>
          <input className="form-control" type="number" name="medencek"
            value={form.medencek} onChange={onChange} />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Nyitás éve</label>
          <input className="form-control" type="number" name="nyitas_eve"
            value={form.nyitas_eve} onChange={onChange} />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Város</label>
        <select className="form-select" name="varos_id"
          value={form.varos_id} onChange={onChange}>
          <option value="">Válasszon települést...</option>
          {varosok.map(v => (
            <option key={v.id} value={v.id}>{v.nev}</option>
          ))}
        </select>
        <small className="text-muted">
          A lista API-n keresztül jön: GET /api/varosok
        </small>
      </div>

      <div className="mb-4">
        <label className="form-label">Fürdő fényképének linkje</label>
        <input className="form-control" type="url" name="URL"
          placeholder="https://... vagy üresen hagyva -nincs kép-"
          value={form.URL} onChange={onChange} />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={mentes}>Mentés</button>
        <button className="btn btn-outline-secondary"
          onClick={() => navigate('/furdok')}>
          Vissza a listához
        </button>
      </div>
    </div>
  );
}

export default UjFurdo;
