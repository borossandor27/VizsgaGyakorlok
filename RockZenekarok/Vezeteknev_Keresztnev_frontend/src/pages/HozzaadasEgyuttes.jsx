import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Hozzáadva a useNavigate hook

const HozzaadasEgyuttes = () => {
  const [stilusok, setStilusok] = useState([]);
  const [nev, setNev] = useState('');
  const [stilusId, setStilusId] = useState('0');
  const [orszag, setOrszag] = useState('');
  const [varos, setVaros] = useState('');
  const [aktivEvek, setAktivEvek] = useState('');
  const [tagok, setTagok] = useState('');
  const [legsikeresebbAlbum, setLegsikeresebbAlbum] = useState('');
  const [kepUrl, setKepUrl] = useState(''); // Új állapotváltozó a kép URL-hez

  const navigate = useNavigate(); // useNavigate hook inicializálása

  // Stílusok lekérése a szerverről
  useEffect(() => {
    const fetchStilusok = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/stilusok');
        setStilusok(response.data);
      } catch (error) {
        console.error('Hiba történt a stílusok lekérésekor:', error);
      }
    };
    fetchStilusok();
  }, []);

  // Űrlap elküldésének kezelése
  const handleSubmit = async () => {
    // Validáció (opcionális, de ajánlott)
    if (!nev || stilusId === '0' || !orszag || !varos || !aktivEvek || !tagok || !legsikeresebbAlbum || !kepUrl) {
      alert('Kérjük, töltsön ki minden mezőt!');
      return;
    }

    const ujZenekar = {
      nev,
      stilus_id: parseInt(stilusId), // Fontos, hogy szám legyen
      orszag,
      varos,
      aktiv_evek: aktivEvek,
      tagok,
      legsikeresebb_album: legsikeresebbAlbum,
      kep_url: kepUrl, // Hozzáadva a kép URL
    };
console.log('Új zenekar adatai:', ujZenekar);
    try {
      const response = await axios.post('http://localhost:3000/api/ujzenekar', ujZenekar);
      alert('Sikeresen hozzáadva az új zenekar!');
      console.log('Szerver válasza:', response.data);
      // Sikeres küldés után navigálás
      navigate('/zenekarok'); 
    } catch (error) {
      console.error('Hiba történt az új zenekar hozzáadásakor:', error);
      alert('Hiba történt az új zenekar hozzáadásakor!');
    }
  };

  return (
    <>
      <h2 className="mb-4 text-center">Egy új együttes rögzítése</h2>
      <div className="row">
        <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Az együttes neve:</label>
            <textarea
              className="form-control"
              id="name"
              rows="1"
              value={nev}
              onChange={(e) => setNev(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tipus" className="form-label">A zenekar stílusa:</label>
            <select
              className="form-select"
              id="tipus"
              value={stilusId}
              onChange={(e) => setStilusId(e.target.value)}
            >
              <option value="0">Kérem válasszon</option>
              {stilusok.map((stilus) => (
                <option key={stilus.id} value={stilus.id}>
                  {stilus.stilus_neve}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="orszag" className="form-label">Az együttes országa:</label>
            <textarea
              className="form-control"
              id="orszag"
              rows="1"
              value={orszag}
              onChange={(e) => setOrszag(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="varos" className="form-label">Az együttes varosa:</label>
            <textarea
              className="form-control"
              id="varos"
              rows="1"
              value={varos}
              onChange={(e) => setVaros(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="evek" className="form-label">Aktív évek</label>
            <textarea
              className="form-control"
              id="evek"
              rows="1"
              value={aktivEvek}
              onChange={(e) => setAktivEvek(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tagok" className="form-label">Tagok</label>
            <textarea
              className="form-control"
              id="tagok"
              rows="1"
              placeholder="0"
              value={tagok}
              onChange={(e) => setTagok(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="siker" className="form-label">Legsikeresebb album:</label>
            <textarea
              className="form-control"
              id="siker"
              rows="1"
              value={legsikeresebbAlbum}
              onChange={(e) => setLegsikeresebbAlbum(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="kep_url" className="form-label">Az együttesről készült fénykép linkje</label>
            <input
              type="url"
              className="form-control"
              id="kep_url"
              placeholder="https://example.com/zenekar.jpg"
              value={kepUrl}
              onChange={(e) => setKepUrl(e.target.value)}
            />
          </div>

          <div className="mb-3 text-center">
            <button className="btn btn-secondary px-5" onClick={handleSubmit}>Feltöltés</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HozzaadasEgyuttes;