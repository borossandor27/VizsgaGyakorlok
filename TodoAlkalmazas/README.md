# Feladat ütemezés
##	Adatbázis 
```sql
    CREATE DATABASE IF NOT EXISTS esemenyek;
    USE esemenyek;

    CREATE TABLE IF NOT EXISTS users (
        user_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS events (
        events_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        date DATETIME NOT NULL,
        user_id BIGINT UNSIGNED NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
    );
```

# Backend feladat
 Készítsd el az alábbi REST API-kat  Express keretrendszerrel, amely az alábbi CRUD műveleteket biztosítja
##	Felhasználókat kezelő API-k
-	GET /users: Listázza az összes felhasználót.
-	GET /users/:id: Egy felhasználó adatainak lekérdezése.
-	POST /users: Új felhasználó hozzáadása.
-	PUT /users/:id: Egy felhasználó adatainak frissítése.
-	DELETE /users/:id: Felhasználó törlése.

##	Eseményeket kezelő API-k
-	GET /events: Listázza az összes eseményt.
-	GET /events/:id: Egy esemény adatainak lekérdezése.
-	POST /events: Új esemény hozzáadása.
-	PUT /events/:id: Egy esemény adatainak frissítése.
-	DELETE /events/:id: Esemény törlése.

#	React Frontend Felépítése
Egy React alkalmazás biztosítja a felhasználói felületet, ahol az alábbi funkciók érhetők el

##	Felhasználók kezelése
-	Lista megjelenítése a felhasználókról.
-	Új felhasználó felvitele egy űrlap kitöltésével.
-	Felhasználó adatainak szerkesztése.
-	Felhasználó törlése.

##	Események kezelése
-	Lista megjelenítése az eseményekről.
-	Új esemény felvitele.
-	Esemény adatainak szerkesztése.
-	Esemény törlése.

#	Backend-Frontend Kapcsolat
A React alkalmazás Axios-t használjon az API hívások végrehajtására. A felhasználóbarát működés érdekében biztosítani kell:
-	Hibakezelést az API hívásokra.
-	Betöltési állapotokat (“loading” indikátor).
-	Értesítő üzeneteket (pl. sikeres mentés vagy hibaüzem).

#	Telepítés és Tesztelés
-	Adatbázis: Az adatbázis helyben fut.
-	Backend: Az Express alkalmazás futtatása egy Node.js környezetben.
-	Frontend: A React alkalmazást hosztold lokálisan vagy egy fejlesztői szerveren.

