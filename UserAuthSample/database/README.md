# JWT *(JSON Web Token)* alapú hitelesítés
SPA alkalmazások esetén felhasználó azonosításra igen gyakori megoldás backend oldalon az *(Express + MySQL + bcrypt + JWT)* összeállítás.
- A felhasználó bejelentkezéskor kap egy JWT tokent a backend szervertől.
- A tokent a böngészőben (pl. localStorage vagy sessionStorage) tárolhatod.
- Az API-kéréseknél a `Authorization: Bearer <token>` fejlécben kell elküldeni.
- A backend oldalon a tokent ellenőrzik és dekódolják.

## Példa alkalmazás felépítése
- **Frontend *(React)***: Bejelentkezési űrlap, regisztrációs oldal, védett oldalak.
- **Backend *(Express)***: API végpontok a regisztrációhoz, bejelentkezéshez, token kezeléshez.
- **Adatbázis *(MySQL)***: Felhasználók adatainak tárolása (jelszó titkosítással).

## Adatbázis
```sql
CREATE DATABASE auth_db;
USE auth_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

