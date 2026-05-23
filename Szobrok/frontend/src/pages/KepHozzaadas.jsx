import React, { useState, useEffect } from 'react';
import Hero from '../Hero';
import StatuszSav from '../StatuszSav';
import api from '../api';

function KepHozzaadas() {
  const [alkotok, setAlkotok] = useState([]);
  const [helyek, setHelyek] = useState([]);
  const [szobrokAlkotonak, setSzobrokAlkotonak] = useState([]);
  const [szurtSzobrok, setSzurtSzobrok] = useState([]);

  const [alkotoid, setAlkotoid] = useState('');
  const [hely, setHely] = useState('');
  const [szoborid, setSzoborid] = useState('');
  const [kepUrl, setKepUrl] = useState('');
  const [kepFajl, setKepFajl] = useState(null);

  const [lekStatusz, setLekStatusz] = useState(null);
  const [mentStatusz, setMentStatusz] = useState(null);
  const [betolt, setBetolt] = useState(false);

  // Alkotók + helyek betöltése
  useEffect(() => {
    const betoltes = async () => {
      try {
        const [alkotRes, helyRes] = await Promise.all([
          api.get('/alkotok'),
          api.get('/helyek'),
        ]);
        setAlkotok(alkotRes.data.adatok || []);
        setHelyek(helyRes.data.adatok || []);
        setLekStatusz({
          uzenet: `Státuszkód: ${alkotRes.status} | ${alkotRes.data.uzenet} Rekordok száma: ${alkotRes.data.adatok.length}`,
          tipus: 'info'
        });
      } catch (err) {
        setLekStatusz({ uzenet: 'Státuszkód: 503 | Szerver nem elérhető.', tipus: 'hiba' });
      }
    };
    betoltes();
  }, []);

  // Alkotó változás → szobrok lekérése az alkotóhoz
  const alkotoValtozas = async (e) => {
    const id = e.target.value;
    setAlkotoid(id);
    setHely('');
    setSzoborid('');
    setSzurtSzobrok([]);
    setMentStatusz(null);
    if (!id) { setSzobrokAlkotonak([]); return; }
    try {
      const res = await api.get(`/szobrok/alkotonkent/${id}`);
      setSzobrokAlkotonak(res.data.adatok || []);
    } catch { setSzobrokAlkotonak([]); }
  };

  // Város változás → szobrok szűrése
  const varosValtozas = (e) => {
    const val = e.target.value;
    setHely(val);
    setSzoborid('');
    setMentStatusz(null);
    if (!val) { setSzurtSzobrok([]); return; }
    setSzurtSzobrok(szobrokAlkotonak.filter(s => s.hely === val));
  };

  // Mentés
  const mentGomb = async () => {
    if (!szoborid) return;
    if (!kepFajl && !kepUrl.trim()) {
      setMentStatusz({ uzenet: 'Adjon meg képfájlt vagy képlinket!', tipus: 'hiba' });
      return;
    }
    setBetolt(true);
    setMentStatusz(null);
    try {
      let res;
      if (kepFajl) {
        const fd = new FormData();
        fd.append('kep', kepFajl);
        res = await api.post(`/szobrok/${szoborid}/kep`, fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        res = await api.patch(`/szobrok/${szoborid}/kep`, { kep_url: kepUrl.trim() });
      }
      setMentStatusz({ uzenet: `Státuszkód: ${res.status} | ${res.data.uzenet}`, tipus: 'siker' });
      setKepUrl('');
      setKepFajl(null);
    } catch (err) {
      const kod = err.response?.status || 503;
      const uzenet = err.response?.data?.uzenet || 'Mentési hiba!';
      setMentStatusz({ uzenet: `Státuszkód: ${kod} | ${uzenet}`, tipus: 'hiba' });
    } finally {
      setBetolt(false);
    }
  };

  // Helyek deduplikálása az alkotóhoz tartozó szobrokból
  const alkotoHelyek = [...new Set(szobrokAlkotonak.map(s => s.hely))].sort();

  return (
    <>
      <Hero
        cim="Kép módosítása"
        alcim="Új kép hozzárendelése a nyilvántartásban már meglévő szoborhoz"
        magassag="180px"
      />

      <div className="urlap-kartya">
        <div className="urlap-fejlec">Kép hozzárendelése meglévő szoborhoz</div>

        <StatuszSav
          uzenet={lekStatusz?.uzenet}
          tipus={lekStatusz?.tipus}
          onZar={() => setLekStatusz(null)}
        />

        {/* 1. Alkotó */}
        <div className="mb-3">
          <label className="form-label fw-semibold">1. Alkotó kiválasztása</label>
          <select className="form-select" value={alkotoid} onChange={alkotoValtozas}>
            <option value="">-- Válasszon szobrászt --</option>
            {alkotok.map(a => (
              <option key={a.id} value={a.id}>{a.nev}</option>
            ))}
          </select>
        </div>

        {/* 2. Város + 3. Szobor */}
        <div className="row g-3 mb-3">
          <div className="col-12 col-sm-6">
            <label className="form-label fw-semibold">2. Város kiválasztása</label>
            <select
              className="form-select"
              value={hely}
              onChange={varosValtozas}
              disabled={!alkotoid}
            >
              <option value="">-- Válasszon települést --</option>
              {alkotoHelyek.map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>
          <div className="col-12 col-sm-6">
            <label className="form-label fw-semibold">3. Konkrét szobor</label>
            <select
              className="form-select"
              value={szoborid}
              onChange={e => { setSzoborid(e.target.value); setMentStatusz(null); }}
              disabled={!hely}
            >
              <option value="">-- Válassza ki a személyt --</option>
              {szurtSzobrok.map(s => (
                <option key={s.id} value={s.id}>{s.szemely} ({s.avatas})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Képszekció – csak szobor választás után */}
        {szoborid && (
          <div className="fade-in">
            <hr />
            <div className="mb-3">
              <label className="form-label fw-semibold">Képfájl kiválasztása</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={e => setKepFajl(e.target.files[0] || null)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Vagy képlink (URL) megadása</label>
              <input
                type="text"
                className="form-control"
                placeholder="https://... vagy /kepek/..."
                value={kepUrl}
                onChange={e => setKepUrl(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary w-100"
              onClick={mentGomb}
              disabled={betolt}
            >
              {betolt ? 'Mentés...' : 'Feltöltés és adatbázis frissítése'}
            </button>
          </div>
        )}

        <StatuszSav
          uzenet={mentStatusz?.uzenet}
          tipus={mentStatusz?.tipus}
          onZar={() => setMentStatusz(null)}
        />
      </div>
    </>
  );
}

export default KepHozzaadas;
