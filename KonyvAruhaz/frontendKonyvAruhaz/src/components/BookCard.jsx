const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <h3>{book.cim}</h3>
            <p>Szerző: {book.szerzo}</p>
            <p>Kiadás éve: {book.kiadas_eve}</p>
            <p>Ár: {book.ar} Ft</p>
            <button onClick={() => window.location.href = `/books/${book.id}`}>Részletek</button>
        </div>
    );
}

export default BookCard;
// A könyv kártya komponens, amely megjeleníti a könyv adatait és egy gombot a részletekhez