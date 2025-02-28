// NewAdForm.js
export function NewAdForm() {
    return (
      <div>
        <h2>Új hirdetés elküldése</h2>
        <form>
          <label>Ingatlan kategóriája</label>
          <select>
            <option>Ház</option>
            <option>Lakás</option>
            <option>Garázs</option>
          </select>
          <br />
          <label>Leírás</label>
          <textarea rows="3"></textarea>
          <br />
          <button type="submit">Küldés</button>
        </form>
      </div>
    );
  }
  
    export default NewAdForm;