// src/components/Kezdolap.jsx
import { useNavigate } from 'react-router-dom';

function Kezdolap() {
  const navigate = useNavigate();

  return (
    <>
      {/* ── Hero / Fejléc háttérképpel ──────────────────── */}
      <div className="start">
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-white">
            Fürdők Nyilvántartó Rendszer
          </h1>
          <p className="lead text-white-50">
            Frontend (REST API – lista, új fürdő, képlink kezelés)
          </p>
          <div className="mt-4 d-flex gap-3 flex-wrap">
            <button className="btn btn-primary btn-lg"
              onClick={() => navigate('/furdok')}>
              Fürdők listája
            </button>
            <button className="btn btn-outline-light btn-lg"
              onClick={() => navigate('/uj-furdo')}>
              Új fürdő felvétele
            </button>
          </div>
        </div>
      </div>

      {/* ── Bevezető kártyák ───────────────────────────── */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Lista</h5>
                <p className="card-text text-muted">Reszponzív táblázat elrendezés.</p>
                <button className="btn btn-sm btn-primary"
                  onClick={() => navigate('/furdok')}>Megnyitás</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Új fürdő</h5>
                <p className="card-text text-muted">Reszponzív űrlap, adatbázis mentéssel.</p>
                <button className="btn btn-sm btn-primary"
                  onClick={() => navigate('/uj-furdo')}>Megnyitás</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Képek</h5>
                <p className="card-text text-muted">Reszponzív képlink-módosítás felület.</p>
                <button className="btn btn-sm btn-primary"
                  onClick={() => navigate('/kepek')}>Megnyitás</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kezdolap;
