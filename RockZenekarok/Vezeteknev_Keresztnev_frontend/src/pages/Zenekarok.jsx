import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../style.css';

const Zenekarok = () => {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBands = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/zenekar');
        setBands(response.data);
      } catch (err) {
        setError(err.message);
        console.error('API hiba:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBands();
  }, []);

  // Aktív évek számának kiszámítása (pl. "1970-1991" -> 21 év)
  const calculateActiveYears = (activeYears) => {
    if (!activeYears) return 0;
    const years = activeYears.match(/\d{4}/g);
    if (!years) return 0;
    // Ha még napjainkban is aktív, akkor az aktuális évvel számolunk
    if (years.length === 1) {
      years.push(new Date().getFullYear().toString());
    }
    return parseInt(years[1]) - parseInt(years[0]);
  };

  if (loading) return (
    <div className="text-center mt-5">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Betöltés...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger mx-auto mt-5" style={{ maxWidth: '500px' }}>
      <strong>Hiba történt:</strong> {error}<br />
      <button 
        className="btn btn-sm btn-secondary mt-2"
        onClick={() => window.location.reload()}
      >
        Újrapróbálkozás
      </button>
    </div>
  );

  return (
    <div className="zenekarok-page container py-4">
      <h2 className="mb-4 text-center">A Rock and Roll nagyjai</h2>
      
      <div className="row g-4">
        {bands.map((band) => (
          <div key={band.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-secondary text-white d-flex justify-content-between">
                <span className="fw-bold">{band.nev}</span>
                <span className="badge bg-light text-dark">{band.stilus_neve}</span>
              </div>
              
              <div className="card-body d-flex flex-column">
                <div className="mb-3">
                  <img 
                    className="img-fluid rounded"
                    src={band.kep_url} 
                    alt={band.nev}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Kép+nem+elérhető';
                      e.target.className = 'img-fluid rounded border';
                    }}
                  />
                </div>
                
                <ul className="list-unstyled mb-auto">
                  <li><strong>Származás:</strong> {band.orszag}, {band.varos}</li>
                  <li><strong>Aktív évek:</strong> {band.aktiv_evek}</li>
                  <li><strong>Tagok:</strong> {band.tagok}</li>
                  <li><strong>Legnépszerűbb album:</strong> {band.legsikeresebb_album}</li>
                </ul>
              </div>
              
              <div className="card-footer bg-transparent text-center">
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    const years = calculateActiveYears(band.aktiv_evek);
                    alert(`${band.nev} aktív éveinek száma: ${years} év`);
                  }}
                >
                  Aktív évek mutatása
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zenekarok;