// src/pages/Lista.jsx
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getEpitmenyek, deleteEpitmeny } from '../api/epitmenyApi';
import TipusBadge from '../components/TipusBadge';

const TIPUSOK = ['vár','templom','kolostor','torony','kapu','kápolna','romkert','emlékmű','egyéb'];

export default function Lista() {
  const [adatok, setAdatok]         = useState([]);
  const [betolt, setBetolt]         = useState(true);
  const [hiba, setHiba]             = useState(null);
  const [szuroTipus, setSzuroTipus] = useState('');
  const [szuroNev, setSzuroNev]     = useState('');
  const [kivalasztott, setKivalasztott] = useState(null);  // részletmodál
  const [torlesJelolt, setTorlesJelolt] = useState(null);  // törlés confirm
  const [torlesFolyamat, setTorlesFolyamat] = useState(false);
  const [toroltvaSiker, setToroltvaSiker]   = useState(null);

  const tolt = useCallback(async () => {
    setBetolt(true);
    setHiba(null);
    try {
      const szurok = {};
      if (szuroTipus) szurok.tipus = szuroTipus;
      if (szuroNev)   szurok.nev   = szuroNev;
      const rows = await getEpitmenyek(szurok);
      setAdatok(rows);
    } catch (e) {
      setHiba(e.response?.data?.hiba || 'Nem sikerült betölteni az adatokat.');
    } finally {
      setBetolt(false);
    }
  }, [szuroTipus, szuroNev]);

  useEffect(() => {
    const id = setTimeout(tolt, 300);   // debounce a névkereséshez
    return () => clearTimeout(id);
  }, [tolt]);

  async function torles(azon) {
    setTorlesFolyamat(true);
    try {
      await deleteEpitmeny(azon);
      setTorlesJelolt(null);
      setToroltvaSiker(azon);
      setTimeout(() => setToroltvaSiker(null), 3000);
      tolt();
    } catch (e) {
      alert(e.response?.data?.hiba || 'Törlési hiba.');
    } finally {
      setTorlesFolyamat(false);
    }
  }

  return (
    <>
      {/* Fejléc */}
      <header className="al-fejlec">
        <div className="container-xl">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb morzsa">
              <li className="breadcrumb-item"><Link to="/">Főoldal</Link></li>
              <li className="breadcrumb-item active">Építmények listája</li>
            </ol>
          </nav>
          <h1 className="al-fo-cim">
            <i className="bi bi-list-ul me-2" />Építmények listája
          </h1>
          <p className="al-alcim">Az adatbázisban nyilvántartott összes épített örökség</p>
        </div>
      </header>

      {/* Szűrő */}
      <div className="szuro-sav">
        <div className="container-xl">
          <div className="row g-2 align-items-end">
            <div className="col-12 col-md-4">
              <label className="szuro-label">Típus szerint</label>
              <select
                className="form-select szuro-select"
                value={szuroTipus}
                onChange={e => setSzuroTipus(e.target.value)}
              >
                <option value="">– Minden típus –</option>
                {TIPUSOK.map(t => (
                  <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                ))}
              </select>
            </div>
            <div className="col-12 col-md-5">
              <label className="szuro-label">Keresés névben</label>
              <input
                type="text"
                className="form-control szuro-input"
                placeholder="pl. Egri vár…"
                value={szuroNev}
                onChange={e => setSzuroNev(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-3 text-md-end">
              <button
                className="btn btn-outline-secondary szuro-reset"
                onClick={() => { setSzuroTipus(''); setSzuroNev(''); }}
              >
                <i className="bi bi-x-circle me-1" />Szűrők törlése
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tartalom */}
      <main className="py-4">
        <div className="container-xl">

          {/* Visszajelzések */}
          {toroltvaSiker && (
            <div className="alert alert-success d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-check-circle-fill" />
              <span>A(z) <strong>{toroltvaSiker}. azonosítójú</strong> építmény törölve.</span>
            </div>
          )}

          {torlesJelolt && (
            <div className="torles-confirm">
              <span className="torles-confirm-szoveg">
                <i className="bi bi-exclamation-triangle-fill me-2" />
                Biztosan törli a(z) <strong>„{torlesJelolt.nev}"</strong> rekordot? Ez nem visszavonható.
              </span>
              <button
                className="torles-igen"
                disabled={torlesFolyamat}
                onClick={() => torles(torlesJelolt.azon)}
              >
                {torlesFolyamat ? 'Törlés…' : 'Igen, törlöm'}
              </button>
              <button className="torles-nem" onClick={() => setTorlesJelolt(null)}>
                Mégse
              </button>
            </div>
          )}

          {/* Találatsor */}
          {!betolt && !hiba && (
            <div className="talalat-sor">
              <span className="talalat-badge">{adatok.length} találat</span>
              <Link to="/uj" className="lista-uj-gomb ms-auto">
                <i className="bi bi-plus-lg" /> Új rögzítése
              </Link>
            </div>
          )}

          {/* Töltés / hiba */}
          {betolt && (
            <div className="tolto-sav">
              <div className="tolto-spinner" />
              Adatok betöltése…
            </div>
          )}

          {hiba && !betolt && (
            <div className="hiba-sav">
              <i className="bi bi-exclamation-triangle fs-1 d-block mb-2" />
              {hiba}
              <br />
              <button className="btn btn-outline-secondary mt-3" onClick={tolt}>Újrapróbálás</button>
            </div>
          )}

          {/* Táblázat */}
          {!betolt && !hiba && adatok.length === 0 && (
            <div className="ures-allapot">
              <i className="bi bi-search fs-1 d-block mb-3" />
              Nincs találat a megadott szűrési feltételekre.
            </div>
          )}

          {!betolt && !hiba && adatok.length > 0 && (
            <div className="tabla-keret">
              <div className="table-responsive">
                <table className="table tabla-epitmeny mb-0">
                  <thead>
                    <tr>
                      <th style={{width:'3rem'}}>#</th>
                      <th>Neve</th>
                      <th>Típusa</th>
                      <th>Helyszín</th>
                      <th className="text-end">Magasság</th>
                      <th className="text-end">Építés éve</th>
                      <th className="text-center" style={{width:'7rem'}}>Műveletek</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adatok.map(e => (
                      <tr key={e.azon} className="tabla-sor">
                        <td className="tabla-sorszam">{e.azon}</td>
                        <td className="tabla-nev">{e.nev}</td>
                        <td><TipusBadge tipus={e.tipus} /></td>
                        <td>
                          <i className="bi bi-geo-alt-fill tabla-geo me-1" />
                          {e.telepules_nev}
                        </td>
                        <td className="text-end tabla-szam">{e.magassag} m</td>
                        <td className="text-end tabla-szam">{e.epites_eve}</td>
                        <td className="text-center">
                          <button
                            className="reszlet-gomb me-1"
                            title="Részletek"
                            onClick={() => setKivalasztott(e)}
                          >
                            <i className="bi bi-eye" />
                          </button>
                          <button
                            className="torles-gomb"
                            title="Törlés"
                            onClick={() => setTorlesJelolt(e)}
                          >
                            <i className="bi bi-trash" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Részlet modál */}
      {kivalasztott && (
        <div
          className="modal fade show d-block"
          style={{backgroundColor:'rgba(0,0,0,.5)'}}
          onClick={e => { if (e.target === e.currentTarget) setKivalasztott(null); }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-epitmeny">
              <div className="modal-header modal-fej">
                <h5 className="modal-title">{kivalasztott.nev}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setKivalasztott(null)} />
              </div>
              <div className="modal-body p-4">
                <div style={{display:'flex', flexDirection:'column', gap:0}}>
                  {[
                    ['Típus',           <TipusBadge tipus={kivalasztott.tipus} />],
                    ['Helyszín',        kivalasztott.telepules_nev],
                    ['Magasság (tszf.)',`${kivalasztott.magassag} m`],
                    ['Építés éve',      kivalasztott.epites_eve],
                    ['Azonosító',       kivalasztott.azon],
                  ].map(([cimke, ertek]) => (
                    <div key={cimke} className="modal-adat-sor">
                      <span className="modal-adat-cimke">{cimke}</span>
                      <span>{ertek}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer modal-lab">
                <small className="text-muted me-auto">
                  <i className="bi bi-database me-1" />epitmeny_db · épített örökség
                </small>
                <button className="btn btn-secondary" onClick={() => setKivalasztott(null)}>Bezárás</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
