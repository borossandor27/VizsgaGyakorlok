# Feladat ütemezés

Egy egyszerű feladat ütemező alkalmazás, amely lehetővé teszi a felhasználók számára, hogy eseményeket hozzanak létre, megtekintsék, frissítsék és töröljék őket egy webes felületen keresztül. Az alkalmazás backend része Express.js keretrendszerrel készült, míg a frontend React.js-t használ.

## Adatbázis

Az alkalmazás MySQL adatbázist használ az események és felhasználók tárolására. Az alábbi SQL parancsokkal hozhatod létre a szükséges adatbázist és táblákat:

```sql
    CREATE DATABASE IF NOT EXISTS todo;
    USE todo;

    CREATE TABLE IF NOT EXISTS users (
        user_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        birthday DATE DEFAULT CURRENT_TIMESTAMP
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

## Asztali konzolos alkalmazás

Az alkalmazásnak a következő funkciókat kell biztosítania konzolos felületen keresztül:

1. olvassa be a kapott `csv` fájl tartalmát egy olyan adatszerkezetbe, amely alkalmas a további feldolgozásra
1. jelenítse meg a felhasználók listáját névsor szerint rendezve
1. listázza ki a téli hónapokban (december, január, február) született felhasználókat
1. kérjen be egy nevet a felhasználótól, és jelenítse meg az adott nevű felhasználó eseményeit dátum szerint rendezve
1. listázza ki azokat a felhasználókat, akiknek az email címe `@example.com`-ra végződik!
1. mentse el az összes eseményt egy `events.json` nevű fájlba JSON formátumban
1. mely felhasználóknak van legalább 5 eseménye?
1. melyik felhasználóhoz mennyi esemény tartozik?

## Asztali GUI alkalmazás

Az alkalmazásnak a következő funkciókat kell biztosítania grafikus felületen keresztül:

1. jelenítse meg a felhasználók listáját névsor szerint rendezve

## Backend feladat

Készítsd el az alábbi REST API-kat  Express keretrendszerrel, amely az alábbi műveleteket biztosítja

### Felhasználókat kezelő API-k

- `GET /users` Listázza az összes felhasználót.
- `GET /users/:id` Egy felhasználó adatainak lekérdezése.
- `POST /users` Új felhasználó hozzáadása.
- `PUT /users/:id` Egy felhasználó adatainak frissítése.
- `DELETE /users/:id` Felhasználó törlése.

### Eseményeket kezelő API-k

- `GET /events` Listázza az összes eseményt.
- `GET /events/:id` Egy esemény adatainak lekérdezése.
- `POST /events` Új esemény hozzáadása.
- `PUT /events/:id` Egy esemény adatainak frissítése.
- `DELETE /events/:id` Esemény törlése.

## React Frontend Felépítése

Egy React alkalmazás biztosítja a felhasználói felületet, ahol az alábbi funkciók érhetők el

### Felhasználók kezelése

- Lista megjelenítése a felhasználókról.
- Új felhasználó felvitele egy űrlap kitöltésével.
- Felhasználó adatainak szerkesztése.
- Felhasználó törlése.

### Események kezelése

- Lista megjelenítése az eseményekről.
- Új esemény felvitele.
- Esemény adatainak szerkesztése.
- Esemény törlése.

## Backend-Frontend Kapcsolat

A React alkalmazás Axios-t használjon az API hívások végrehajtására. A felhasználóbarát működés érdekében biztosítani kell:

- Hibakezelést az API hívásokra.
- Betöltési állapotokat (“loading” indikátor).
- Értesítő üzeneteket (pl. sikeres mentés vagy hibaüzem).

## Telepítés és Tesztelés

- Adatbázis: Az adatbázis helyben fut.
- Backend: Az Express alkalmazás futtatása egy Node.js környezetben.
- Frontend: A React alkalmazást hosztold lokálisan vagy egy fejlesztői szerveren.
