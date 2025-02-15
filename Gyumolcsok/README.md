# Gyümölcsök Nyilvántartási Rendszere
## Projekt leírása
Ez a projekt egy teljeskörű gyümölcs-nyilvántartó alkalmazás, amely MySQL adatbázisban tárolja a gyümölcsök nevét, mennyiségét és egységárát. A backend egy Express.js alapú szerver, amely REST API végpontokat biztosít a React frontend számára az adatok megjelenítéséhez és módosításához.

## Szükséges technológiai eszközök
- **Backend**: Node.js, Express.js, MySQL
- **Frontend**: React.js, Axios (HTTP kérésekhez)
- **Adatbázis**: MySQL

## Funkcionalitás
- Gyümölcsök listázása.
- Új gyümölcs hozzáadása.
- Meglévő gyümölcs adatainak módosítása.
- Gyümölcs törlése.

## Backend REST API végpontok
- `GET /fruits` – Az összes gyümölcs lekérdezése.
- `GET /fruits/:id` – Egy adott gyümölcs lekérdezése ID alapján.
- `POST /fruits` – Új gyümölcs hozzáadása.
- `PUT /fruits/:id` – Egy meglévő gyümölcs adatainak frissítése.
- `DELETE /fruits/:id` – Egy gyümölcs törlése.

## Frontend funkciók
- A gyümölcsök listájának megjelenítése egy táblázatban.
- Új gyümölcs felvétele egy űrlapon keresztül.
- Szerkesztési lehetőség a meglévő gyümölcsökre.
- Törlés gomb a felesleges bejegyzések eltávolítására.

## Adatbázis szerkezet
```sql
CREATE TABLE fruits (     
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	quantity INT NOT NULL,
	price DECIMAL(10,2) NOT NULL );
```

## Várható eredmény
A fejlesztett alkalmazás lehetőséget biztosít egy felhasználóbarát felületen keresztül a gyümölcsök nyilvántartására, az adatok dinamikus frissítésére, valamint az egyszerű CRUD (*Create, Read, Update, Delete*) műveletek elvégzésére.