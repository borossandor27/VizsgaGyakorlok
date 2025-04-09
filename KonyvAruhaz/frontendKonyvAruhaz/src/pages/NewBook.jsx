const NewBook = () => {
    return (
        <div>
            <h2>Új könyv hozzáadása</h2>
            <form>
                <div>
                    <label htmlFor="title">Cím:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div>
                    <label htmlFor="author">Szerző:</label>
                    <input type="text" id="author" name="author" required />
                </div>
                <div>
                    <label htmlFor="price">Ár:</label>
                    <input type="number" id="price" name="price" required />
                </div>
                <button type="submit">Könyv hozzáadása</button>
            </form>
        </div>
    )
}

export default NewBook;
// Új könyv hozzáadása űrlap