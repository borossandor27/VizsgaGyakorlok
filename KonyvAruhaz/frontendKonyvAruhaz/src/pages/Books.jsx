import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Books = () => {
    // A könyvek listájának megjelenítése
    const url = "http://localhost:3000/books/";
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        try {
            const response = await axios.get(url);
            setBooks(response.data);
        } catch (error) {
            console.error('Hiba a könyvek betöltésekor:', error);
        }
    };
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>Könyvek</h2>
            <p>Itt található a könyvek listája.</p>
            <div className="books-list">
                {books.map((book) => (
                    <div key={Number(book.konyv_id)} className="book-card">
                        <img
                            src={`./../boritokepek/${book.boritokep}`}
                            alt={book.cim}
                            style={{ width: '200px', height: '300px' }}
                        />
                        <h3>{book.cim}</h3>
                        <p>Szerző: {book.szerzo}</p>
                        <p>Kiadás éve: {book.kiadas_eve}</p>
                        <p>Ár: {Number(book.ar).toLocaleString('hu-HU', { maximumFractionDigits: 0 })} Ft</p>
                        <button onClick={() => window.location.href = `/books/${book.konyv_id}`}>Részletek</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Books;