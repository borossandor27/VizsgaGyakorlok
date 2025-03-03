import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function NewAdForm() {
  const [hirdetesDatuma, setHirdetesDatuma] = useState("");
  const [ar, setAr] = useState(1000000); // Az ár szerkeszthető legyen
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setHirdetesDatuma(new Date().toISOString().split("T")[0]); // Aktuális dátum beállítása

    fetch("http://localhost:3000/api/kategoriak")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="col-4 mx-auto">
      <h2>Ingatlan hirdetés feladása</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Ingatlan kategóriája</label>
          <select className="form-select">
            <option>Kérem válasszon...</option>
            {categories.map((category) => (
              <option key={category.id}>{category.nev}</option>
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
          <textarea id="leiras" rows="3" className="form-control"></textarea>
        </div>

        <div className="form-check mb-3">
          <input type="checkbox" id="tehermentes" className="form-check-input" />
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
            onChange={(e) => setAr(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="kepUrl" className="form-label">Kép URL</label>
          <input type="url" id="kepUrl" className="form-control" placeholder="http://" />
        </div>

        <button type="submit" className="btn btn-primary">Küldés</button>
      </form>
    </div>
  );
}

export default NewAdForm;
