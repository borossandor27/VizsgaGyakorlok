# Felhasználók nyilvántartása

A feladat egy egyszerű felhasználó regisztrációs rendszer létrehozása, amely lehetővé teszi új felhasználók hozzáadását, meglévő felhasználók megtekintését és törlését. A feladat backend, frontend és asztali alkalmazás komponensekből áll.

## Adatbázis

Az adatbázisban egy `users` nevű táblát kell létrehozni a következő mezőkkel:

    ````sql
    CREATE DATABASE userregister;
    USE userregister;

    CREATE TABLE users (
        id bigint(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        birthday DATE NOT NULL
    );
    ````

## Konzolos Asztali alkalmazás

A konzolos asztali alkalmazásnak a következő funkciókat kell tartalmaznia:

- Felhasználók listázása a konzolon ABC sorrendben.
- Kérjen be egy keresztnevet, és jelenítse meg az összes olyan felhasználót, akiknek a keresztneve tartalmazza a megadott karakterláncot.
- jelenítse meg a legidősebb felhasználó adatait.
- listázza ki a március 1. és június 30. között született felhasználókat születési dátum szerint növekvő sorrendben.

## GUI Asztali alkalmazás

A grafikus asztali alkalmazásnak a következő funkciókat kell tartalmaznia:

- Felhasználók listázása egy listában vagy táblázatban.
- Keresési mező, amely lehetővé teszi a felhasználók keresését név alapján.
- Gomb a legidősebb felhasználó adatainak megjelenítésére.
- Gomb a március 1. és június 30. között született felhasználók listázására születési dátum szerint növekvő sorrendben.

## Backend

A backend egy REST API-t kell, hogy szolgáltasson a felhasználók kezeléséhez. A következő végpontokat kell implementálni:

- `GET /users`: Visszaadja az összes felhasználót.
- `POST /users`: Új felhasználó hozzáadása. A kérés törzsében a felhasználó adatai *(név, email, születési dátum)* szerepelnek.
- `DELETE /users/{id}`: Törli a megadott azonosítóval rendelkező felhasználót.

## Frontend

A frontend egy egyszerű webes felületet kell, hogy biztosítson a felhasználók kezeléséhez. A következő funkciókat kell implementálni:

- Felhasználók listázása egy táblázatban.
- Új felhasználó hozzáadására szolgáló űrlap.
- Felhasználó törlése egy gomb segítségével a felhasználók listájában.

