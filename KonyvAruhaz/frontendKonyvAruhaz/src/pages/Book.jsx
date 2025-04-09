import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';   // useParams hook importálása
import axios from 'axios'; // Axios importálása
// A könyv részletes nézetének megjelenítése

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
        <h2>{book.cim}</h2>
        <p>Szerző: {book.szerzo}</p>
        <p>Kiadás éve: {book.kiadas_eve}</p>
        <p>Ár: {book.ar} Ft</p>
        </div>
    );
    }

export default Book;
// A könyv részletes nézetének megjelenítése