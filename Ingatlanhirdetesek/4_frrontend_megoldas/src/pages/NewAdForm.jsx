import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export function NewAdForm() {
  const [hirdetesDatuma, setHirdetesDatuma] = useState("");
  const [ar, setAr] = useState(1000000);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [leiras, setLeiras] = useState("");
  const [tehermentes, setTehermentes] = useState(false);
  const [kepUrl, setKepUrl] = useState("");
  const [hibaUzenet, setHibaUzenet] = useState(""); // 🔥 Hibaüzenet tárolása

  useEffect(() => {
    setHirdetesDatuma(new Date().toISOString().split("T")[0]);

    axios.get("http://localhost:3000/api/kategoriak")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Hiba történt a kategóriák betöltésekor:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHibaUzenet(""); // 🔥 Előző hiba törlése

    const newAd = {
      kategoria: Number(selectedCategory),
      hirdetesDatuma,
      leiras,
      tehermentes,
      ar: Number(ar),
      kepUrl,
    };

    try {
      const response = await axios.post("http://localhost:3000/api/ujingatlan", newAd, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Sikeres feltöltés:", response.data);
      alert("Hirdetés sikeresen elküldve!");

      // Mezők törlése sikeres beküldés után
      setSelectedCategory("");
      setHirdetesDatuma(new Date().toISOString().split("T")[0]);
      setLeiras("");
      setTehermentes(false);
      setAr(1000000);
      setKepUrl("");
    } catch (error) {
      console.error("Hiba történt:", error.response ? error.response.data : error.message);
      setHibaUzenet("Nem sikerült elküldeni a hirdetést. Kérjük, próbálja újra!"); // 🔥 Hibaüzenet beállítása
    }
  };

  return (
    <div className="col-4 mx-auto">
      <h2>Ingatlan hirdetés feladása</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Ingatlan kategóriája</label>
          <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Kérem válasszon...</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.nev}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="HirdetesDatuma" className="form-label">Hirdetés dátuma</label>
          <input
            type="date"
            id="HirdetesDatuma"
            className="form-control"
            value={hirdetesDatuma}
            onChange={(e) => setHirdetesDatuma(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="leiras" className="form-label">Ingatlan leírása</label>
          <textarea id="leiras" rows="3" className="form-control" value={leiras} onChange={(e) => setLeiras(e.target.value)}></textarea>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            id="tehermentes"
            className="form-check-input"
            checked={tehermentes}
            onChange={(e) => setTehermentes(e.target.checked)}
          />
          <label htmlFor="tehermentes" className="form-check-label ms-2">Tehermentes</label>
        </div>

        <div className="mb-3">
          <label htmlFor="ar" className="form-label">Ár (Ft)</label>
          <input
            type="number"
            id="ar"
            className="form-control"
            step={10000}
            value={ar}
            onChange={(e) => setAr(Number(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="kepUrl" className="form-label">Kép URL</label>
          <input
            type="url"
            id="kepUrl"
            className="form-control"
            placeholder="http://"
            value={kepUrl}
            onChange={(e) => setKepUrl(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Küldés</button>

        {/* Hibaüzenet megjelenítése Bootstrap alerttel */}
        {hibaUzenet && (
          <div className="alert alert-danger mt-3" role="alert">
            {hibaUzenet}
          </div>
        )}
      </form>
    </div>
  );
}

export default NewAdForm;
