import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Nevnap = () => {
    const [nevnapok, setNevnapok] = useState([]);
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ne töltse újra az oldalt
        try {
            const response = await axios.get(`http://localhost:3000/api/nevnap/?nap=${month}-${day}`);
            setNevnapok(response.data);
        } catch (error) {
            console.error('Hiba a névnapok lekérésekor:', error);
        }
    };

    return (
        <div className="container mt-4">
            <p>Adott hónapra és napra eső névnapokat keresi.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="month" className="form-label">Hónap</label>
                    <input
                        type="number"
                        className="form-control"
                        id="month"
                        placeholder="1-12"
                        min="1"
                        max="12"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="day" className="form-label">Nap</label>
                    <input
                        type="number"
                        className="form-control"
                        id="day"
                        placeholder="1-31"
                        min="1"
                        max="31"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Keresés</button>
            </form>

            <div className="result mt-4">
                <h2>Eredmény</h2>
                <div id="resultText">
                    {nevnapok.length > 0 ? (
                        <ul>
                            {nevnapok.map((nevnap) => (
                                <li key={nevnap.id}>{nevnap.nev}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nincs találat.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nevnap;
