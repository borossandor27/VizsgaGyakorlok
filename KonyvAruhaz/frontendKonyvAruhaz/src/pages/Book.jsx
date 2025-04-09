import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Book = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error('Hiba a könyv betöltésekor:', error);
            }
        };
        
        fetchBook();
    }, [id]);
    
    if (!book) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <img 
                src={`./../boritokepek/${book.boritokep}`} 
                alt={book.cim} 
                style={{ width: '200px', height: '300px' }} 
            />
            <h2>{book.cim}</h2>
            <p>Szerző: {book.szerzo}</p>
            <p>Kiadó: {book.kiado}</p>
            <p>Tartalom: {book.leiras}</p>
            <p>Kiadás éve: {book.kiadas_ev}</p>
            <p>Ár: {Number(book.ar).toLocaleString('hu-HU', { maximumFractionDigits: 0 })} Ft</p>
        </div>
    );
}

export default Book;
// Könyv részletei oldal
// A könyv részleteit megjelenítő oldal, amely a könyv azonosítója alapján tölti be az adatokat