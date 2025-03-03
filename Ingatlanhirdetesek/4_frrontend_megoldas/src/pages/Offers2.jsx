import { useState, useEffect } from "react";
import axios from "axios";
import OfferTable from "../components/OfferTable";

function Offers2() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/ingatlan")
      .then(response => {
        setOffers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Hiba történt az adatok lekérésekor:", error);
        setError("Nem sikerült betölteni az adatokat.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Ajánlataink</h1>
      {loading && <p>🔄 Betöltés...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <OfferTable offers={offers} />}
    </div>
  );
}

export default Offers2;
