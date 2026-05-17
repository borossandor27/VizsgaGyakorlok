// src/pages/Fooldal.jsx
import { Link } from 'react-router-dom';

const KIEMELT = [
  { nev: 'Pannonhalmi Főapátság', tipus: 'kolostor', telepules: 'Pannonhalma', ev: 996,  m: 282 },
  { nev: 'Füzéri Vár',            tipus: 'vár',      telepules: 'Füzér',       ev: 1310, m: 552 },
  { nev: 'Esztergomi Bazilika',   tipus: 'templom',  telepules: 'Esztergom',   ev: 1856, m: 100 },
  { nev: 'Visegrádi Fellegvár',   tipus: 'vár',      telepules: 'Visegrád',    ev: 1250, m: 350 },
];

export default function Fooldal() {
  return (
    <>
      {/* Banner */}
      <header className="fo-banner">
        <p className="banner-felso">MAGYARORSZÁG</p>
        <h1 className="banner-fo-cim">Épített Örökség</h1>
        <div className="banner-elv">
          <span /><i className="bi bi-diamond-fill" /><span />
        </div>
        <p className="banner-alcim">Várak &nbsp;·&nbsp; Templomok &nbsp;·&nbsp; Kolostorok &nbsp;·&nbsp; Tornyok</p>
        <Link to="/lista" className="banner-gomb">
          Építmények felfedezése <i className="bi bi-arrow-right ms-1" />
        </Link>
      </header>

      {/* Kategóriák */}
      <section className="py-5">
        <div className="container-xl">
          <h2 className="szekció-cim">Örökségünk Kategóriái</h2>
          <div className="elv-sor">
            <span /><i className="bi bi-diamond-fill" /><span />
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { ikon: 'bi-shield-fill', cim: 'Várak',
                szoveg: 'Magyarország területén számos középkori vár maradt fenn, amelyek a történelmi határvédelem emlékei. Egertől Visegrádig ezek a kővé meredt hadtörténeti tanúk.' },
              { ikon: 'bi-building-fill', cim: 'Templomok & Kolostorok',
                szoveg: 'A román és gótikus stílusban emelt egyházi épületek az ország szellemi örökségének legszebb darabjai. A pannonhalmi apátság és a pécsi székesegyház az európai örökség részei.' },
              { ikon: 'bi-buildings-fill', cim: 'Egyéb Emlékek',
                szoveg: 'Tornyok, kapuk, kápolnák és emlékművek teszik teljessé a képet. Sopron tűztornyától az ópusztaszeri emlékmű egészen Kecskemét szecessziós városházájáig.' },
            ].map((k) => (
              <div key={k.cim} className="col-md-4">
                <div className="info-kartya h-100">
                  <div className="kartya-ikon"><i className={`bi ${k.ikon}`} /></div>
                  <h3>{k.cim}</h3>
                  <p>{k.szoveg}</p>
                  <Link to="/lista" className="kartya-link">
                    Böngészés <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat sáv */}
      <section className="stat-sav">
        <div className="container-xl">
          <div className="row text-center g-3">
            {[
              { szam: 40,  felirat: 'Építmény' },
              { szam: 34,  felirat: 'Helyszín' },
              { szam: 996, felirat: 'Legrégebbi (év)' },
              { szam: 7,   felirat: 'Típus' },
            ].map((s) => (
              <div key={s.felirat} className="col-6 col-md-3">
                <div className="stat-elem">
                  <span className="stat-szam">{s.szam}</span>
                  <span className="stat-felirat">{s.felirat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kiemelt építmények */}
      <section className="kiemelt-sek">
        <div className="container-xl">
          <h2 className="szekció-cim">Kiemelkedő Építmények</h2>
          <div className="elv-sor">
            <span /><i className="bi bi-diamond-fill" /><span />
          </div>
          <div className="row g-4">
            {KIEMELT.map((k) => (
              <div key={k.nev} className="col-sm-6 col-lg-3">
                <div className="kiemelt-kartya">
                  <span className="kiemelt-tipus-jel">{k.tipus}</span>
                  <h4>{k.nev}</h4>
                  <p className="kiemelt-telepules">
                    <i className="bi bi-geo-alt" /> {k.telepules}
                  </p>
                  <div className="kiemelt-adatok">
                    <span><i className="bi bi-calendar3" /> {k.ev}</span>
                    <span><i className="bi bi-arrow-up" /> {k.m} m</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
