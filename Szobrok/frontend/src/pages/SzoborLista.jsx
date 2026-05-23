import React, { useState, useEffect, useCallback } from 'react';
import Hero from '../Hero';
import StatuszSav from '../StatuszSav';
import api from '../api';

const BACKEND = 'http://localhost:3333';

function SzoborLista() {
  const [szobrok, setSzobrok] = useState([]);
  const [lekStatusz, setLekStatusz] = useState(null);
  const [muvelStatusz, setMuvelStatusz] = useState(null);
  const [betolt, setBetolt] = useState(false);
  const [torolAlapjan, setTorolAlapjan] = useState(null); // töröltetett id

  const listatBetolt = useCallback(async () => {
    setBetolt(true);
    setMuvelStatusz(null);
    try {
      const res = await api.get('/szobrok');
      setLekStatusz({ uzenet: `Státuszkód: ${res.status} | ${res.data.uzenet}`, tipus: 'siker' });
      setSzobrok(res.data.adatok || []);
    } catch (err) {
      const kod = err.response?.status || 503;
      const uzenet = err.response?.data?.uzenet || 'Hiba a lista lekérésekor!';
      setLekStatusz({ uzenet: `Státuszkód: ${kod} | ${uzenet}`, tipus: 'hiba' });
      setSzobrok([]);
    } finally {
      setBetolt(false);
    }
  }, []);

  useEffect(() => { listatBetolt(); }, [listatBetolt]);

  const torol = async (id) => {
    if (!window.confirm(`Biztosan törli a(z) ${id} azonosítójú szobrot?`)) return;
    setTorolAlapjan(id);
    try {
      const res = await api.delete(`/szobrok/${id}`);
      setMuvelStatusz({ uzenet: `Státuszkód: ${res.status} | ${res.data.uzenet}`, tipus: 'siker' });
      setSzobrok(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      const kod = err.response?.status || 503;
      const uzenet = err.response?.data?.uzenet || 'Törlési hiba!';
      setMuvelStatusz({ uzenet: `Státuszkód: ${kod} | ${uzenet}`, tipus: 'hiba' });
    } finally {
      setTorolAlapjan(null);
    }
  };

  const kepSrc = (kep_url) => {
    if (!kep_url) return null;
    return kep_url.startsWith('/') ? `${BACKEND}${kep_url}` : kep_url;
  };

  return (
    <>
      <Hero
        cim="Szobrok listája"
        alcim="A nyilvántartásban szereplő szobrok áttekintése és kezelése"
        magassag="180px"
      />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0 fw-bold">Szobrok listája</h4>
        <button className="btn btn-outline-secondary btn-sm" onClick={listatBetolt} disabled={betolt}>
          {betolt ? 'Betöltés...' : 'Lista újratöltése'}
        </button>
      </div>

      <StatuszSav
        uzenet={lekStatusz?.uzenet}
        tipus={lekStatusz?.tipus}
        onZar={() => setLekStatusz(null)}
      />

      <StatuszSav
        uzenet={muvelStatusz?.uzenet}
        tipus={muvelStatusz?.tipus}
        onZar={() => setMuvelStatusz(null)}
      />

      <div className="table-responsive">
        <table className="table table-bordered table-hover szobor-tabla">
          <thead>
            <tr>
              <th>Azonosító</th>
              <th>Személy</th>
              <th>Hely</th>
              <th>Avatás</th>
              <th>Alkotó</th>
              <th>Kép</th>
              <th>Művelet</th>
            </tr>
          </thead>
          <tbody>
            {betolt && (
              <tr><td colSpan={7} className="text-center text-muted">Betöltés...</td></tr>
            )}
            {!betolt && szobrok.length === 0 && (
              <tr><td colSpan={7} className="text-center text-muted">Nincs adat.</td></tr>
            )}
            {!betolt && szobrok.map(s => (
              <tr key={s.id} className="fade-in">
                <td>{s.id}</td>
                <td>{s.szemely}</td>
                <td>{s.hely}</td>
                <td>{s.avatas}</td>
                <td>{s.alkoto_nev || '–'}</td>
                <td>
                  {kepSrc(s.kep_url)
                    ? <img src={kepSrc(s.kep_url)} alt={s.szemely} />
                    : <span style={{ fontSize: '0.82rem', color: '#888' }}>Nincs kép</span>
                  }
                </td>
                <td>
                  <button
                    className="torol-btn"
                    onClick={() => torol(s.id)}
                    disabled={torolAlapjan === s.id}
                  >
                    {torolAlapjan === s.id ? '...' : 'Törlés'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SzoborLista;
