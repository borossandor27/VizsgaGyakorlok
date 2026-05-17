// src/pages/UjEpitmeny.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTelepulesek, postEpitmeny } from '../api/epitmenyApi';

const TIPUSOK = ['vár','templom','kolostor','torony','kapu','kápolna','romkert','emlékmű','egyéb'];

const URES = { azon: '', nev: '', tipus: '', magassag: '', telepules_id: '', epites_eve: '' };

function validateMezok(m) {
  const h = {};
  if (!m.azon || isNaN(Number(m.azon)) || Number(m.azon) < 1)
    h.azon = 'Pozitív egész szám kötelező.';
  if (!m.nev || m.nev.trim().length === 0)
    h.nev = 'A név megadása kötelező.';
  else if (m.nev.length > 150)
    h.nev = 'Legfeljebb 150 karakter.';
  if (!m.tipus)
    h.tipus = 'Válasszon típust.';
  if (!m.magassag || isNaN(Number(m.magassag)) || Number(m.magassag) < 1)
    h.magassag = 'Pozitív egész szám kötelező.';
  if (!m.telepules_id)
    h.telepules_id = 'Válasszon települést.';
  if (!m.epites_eve || isNaN(Number(m.epites_eve)) ||
      Number(m.epites_eve) < 500 || Number(m.epites_eve) > 2025)
    h.epites_eve = 'Érvényes évszám: 500–2025.';
  return h;
}

export default function UjEpitmeny() {
  const navigate = useNavigate();
  const [mezok, setMezok]               = useState(URES);
  const [hibak, setHibak]               = useState({});
  const [erintett, setErintett]         = useState({});  // melyik mezőt érintette a user
  const [telepulesek, setTelepulesek]   = useState([]);
  const [kuldes, setKuldes]             = useState(false);
  const [szerver_hiba, setSzerver_hiba] = useState(null);
  const [siker, setSiker]               = useState(false);

  useEffect(() => {
    getTelepulesek()
      .then(setTelepulesek)
      .catch(() => {});
  }, []);

  // Valós idejű validáció (csak érintett mezőkre)
  useEffect(() => {
    const h = validateMezok(mezok);
    const lathatoHibak = {};
    Object.keys(h).forEach(k => { if (erintett[k]) lathatoHibak[k] = h[k]; });
    setHibak(lathatoHibak);
  }, [mezok, erintett]);

  function onChange(e) {
    setMezok(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onBlur(e) {
    setErintett(prev => ({ ...prev, [e.target.name]: true }));
  }

  function mezoCls(nev) {
    if (!erintett[nev]) return 'urlap-mezo';
    return 'urlap-mezo ' + (hibak[nev] ? 'ervenytelen' : 'ervenyes');
  }

  // SQL előnézet
  function sqlSzoveg() {
    const { azon, nev, tipus, magassag, telepules_id, epites_eve } = mezok;
    if (!azon && !nev) return '-- Töltse ki az űrlapot az INSERT utasítás megtekintéséhez';
    const nevEsc = nev.replace(/'/g, "''");
    return `INSERT INTO epitmeny (azon, nev, tipus, magassag, telepules_id, epites_eve)\nVALUES (${azon||'?'}, '${nevEsc||'?'}', '${tipus||'?'}', ${magassag||'?'}, ${telepules_id||'?'}, ${epites_eve||'?'});`;
  }

  async function onKuldes(e) {
    e.preventDefault();
    // Minden mezőt érintettnek jelölünk → összes hiba látható lesz
    const mindErintett = Object.fromEntries(Object.keys(URES).map(k => [k, true]));
    setErintett(mindErintett);

    const h = validateMezok(mezok);
    setHibak(h);
    if (Object.keys(h).length > 0) return;

    setKuldes(true);
    setSzerver_hiba(null);
    try {
      await postEpitmeny({
        azon:         Number(mezok.azon),
        nev:          mezok.nev.trim(),
        tipus:        mezok.tipus,
        magassag:     Number(mezok.magassag),
        telepules_id: Number(mezok.telepules_id),
        epites_eve:   Number(mezok.epites_eve),
      });
      setSiker(true);
      setTimeout(() => navigate('/lista'), 2000);
    } catch (err) {
      const uzenet = err.response?.data?.hibak
        ? err.response.data.hibak.join(' ')
        : (err.response?.data?.hiba || 'Szerverhiba a rögzítés során.');
      setSzerver_hiba(uzenet);
    } finally {
      setKuldes(false);
    }
  }

  return (
    <>
      {/* Demo sáv */}
      <div className="demo-sav">
        <i className="bi bi-exclamation-triangle-fill me-2" />
        <strong>DEMO üzemmód</strong> – Az adatok valódi MySQL adatbázisba kerülnek mentésre,
        ha a backend csatlakoztatva van.
      </div>

      {/* Fejléc */}
      <header className="al-fejlec">
        <div className="container-xl">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb morzsa">
              <li className="breadcrumb-item"><Link to="/">Főoldal</Link></li>
              <li className="breadcrumb-item"><Link to="/lista">Építmények</Link></li>
              <li className="breadcrumb-item active">Új rögzítése</li>
            </ol>
          </nav>
          <h1 className="al-fo-cim">
            <i className="bi bi-plus-circle me-2" />Új építmény rögzítése
          </h1>
          <p className="al-alcim">Adja meg az új építmény adatait az alábbi űrlap segítségével</p>
        </div>
      </header>

      <main className="py-5">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">

              {/* Siker */}
              {siker && (
                <div className="alert alert-success d-flex align-items-center gap-2 mb-4">
                  <i className="bi bi-check-circle-fill fs-5" />
                  <div>
                    <strong>Sikeres rögzítés!</strong> Átirányítás a listához…
                  </div>
                </div>
              )}

              {/* Szerverhiba */}
              {szerver_hiba && (
                <div className="alert alert-danger d-flex align-items-center gap-2 mb-4">
                  <i className="bi bi-exclamation-triangle-fill fs-5" />
                  <div>{szerver_hiba}</div>
                </div>
              )}

              {/* Űrlap */}
              <div className="urlap-keret">
                <div className="urlap-fejlec">
                  <i className="bi bi-pencil-square me-2" />Építmény adatai
                </div>
                <div className="urlap-test">
                  <form onSubmit={onKuldes} noValidate>
                    <div className="row g-4">

                      {/* Azonosító */}
                      <div className="col-12 col-sm-4">
                        <label className="urlap-label" htmlFor="azon">
                          Azonosító <span className="kotelező">*</span>
                        </label>
                        <input
                          type="number" id="azon" name="azon"
                          className={mezoCls('azon')}
                          value={mezok.azon} onChange={onChange} onBlur={onBlur}
                          placeholder="pl. 41" min="1"
                        />
                        <div className="urlap-seged">Egyedi egész szám</div>
                        {hibak.azon && <div className="hiba-szoveg">{hibak.azon}</div>}
                      </div>

                      {/* Neve */}
                      <div className="col-12 col-sm-8">
                        <label className="urlap-label" htmlFor="nev">
                          Az építmény neve <span className="kotelező">*</span>
                        </label>
                        <input
                          type="text" id="nev" name="nev"
                          className={mezoCls('nev')}
                          value={mezok.nev} onChange={onChange} onBlur={onBlur}
                          placeholder="pl. Diósgyőri vár" maxLength={150}
                        />
                        <div className="urlap-seged">Legfeljebb 150 karakter</div>
                        {hibak.nev && <div className="hiba-szoveg">{hibak.nev}</div>}
                      </div>

                      {/* Típus */}
                      <div className="col-12 col-sm-6">
                        <label className="urlap-label" htmlFor="tipus">
                          Típusa <span className="kotelező">*</span>
                        </label>
                        <select
                          id="tipus" name="tipus"
                          className={mezoCls('tipus')}
                          value={mezok.tipus} onChange={onChange} onBlur={onBlur}
                        >
                          <option value="">– Válasszon típust –</option>
                          {TIPUSOK.map(t => (
                            <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                          ))}
                        </select>
                        {hibak.tipus && <div className="hiba-szoveg">{hibak.tipus}</div>}
                      </div>

                      {/* Település */}
                      <div className="col-12 col-sm-6">
                        <label className="urlap-label" htmlFor="telepules_id">
                          Helyszín (település) <span className="kotelező">*</span>
                        </label>
                        <select
                          id="telepules_id" name="telepules_id"
                          className={mezoCls('telepules_id')}
                          value={mezok.telepules_id} onChange={onChange} onBlur={onBlur}
                        >
                          <option value="">– Válasszon települést –</option>
                          {telepulesek.map(t => (
                            <option key={t.id} value={t.id}>{t.nev}</option>
                          ))}
                        </select>
                        {hibak.telepules_id && <div className="hiba-szoveg">{hibak.telepules_id}</div>}
                      </div>

                      {/* Magasság */}
                      <div className="col-12 col-sm-6">
                        <label className="urlap-label" htmlFor="magassag">
                          Magasság (tszf., méterben) <span className="kotelező">*</span>
                        </label>
                        <div style={{display:'flex'}}>
                          <input
                            type="number" id="magassag" name="magassag"
                            className={mezoCls('magassag')}
                            style={{borderRadius:'3px 0 0 3px', borderRight:'none'}}
                            value={mezok.magassag} onChange={onChange} onBlur={onBlur}
                            placeholder="pl. 280" min="1" max="3000"
                          />
                          <span className="urlap-addon" style={{borderRadius:'0 3px 3px 0'}}>m</span>
                        </div>
                        <div className="urlap-seged">Tengerszint feletti magasság</div>
                        {hibak.magassag && <div className="hiba-szoveg">{hibak.magassag}</div>}
                      </div>

                      {/* Építés éve */}
                      <div className="col-12 col-sm-6">
                        <label className="urlap-label" htmlFor="epites_eve">
                          Építés éve <span className="kotelező">*</span>
                        </label>
                        <input
                          type="number" id="epites_eve" name="epites_eve"
                          className={mezoCls('epites_eve')}
                          value={mezok.epites_eve} onChange={onChange} onBlur={onBlur}
                          placeholder="pl. 1310" min="500" max="2025"
                        />
                        <div className="urlap-seged">500–2025 közötti évszám</div>
                        {hibak.epites_eve && <div className="hiba-szoveg">{hibak.epites_eve}</div>}
                      </div>

                    </div>{/* /row */}

                    {/* Gombok */}
                    <div className="urlap-gombok">
                      <button
                        type="submit"
                        className="urlap-mentes-gomb"
                        disabled={kuldes || siker}
                      >
                        {kuldes
                          ? <><i className="bi bi-hourglass-split me-2" />Mentés…</>
                          : <><i className="bi bi-floppy2 me-2" />Rögzítés</>
                        }
                      </button>
                      <Link to="/lista" className="urlap-vissza-gomb">
                        <i className="bi bi-arrow-left" /> Vissza a listához
                      </Link>
                    </div>

                  </form>
                </div>
              </div>

              {/* SQL előnézet */}
              <div className="sql-blokk">
                <div className="sql-fejlec">
                  <i className="bi bi-code-slash me-2" />Generált SQL INSERT (oktatási célra)
                </div>
                <pre className="sql-kod">{sqlSzoveg()}</pre>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
