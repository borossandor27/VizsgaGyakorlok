# Gyümölcsök Nyilvántartási Rendszere

## Projekt leírása

Ez a projekt gyümölcs érkezzését nyilvántartó alkalmazás, amely adatbázisban tárolja a gyümölcsök nevét, mennyiségét és egységárát. Az alkalmazás lehetővé teszi a gyümölcsök listázását, új gyümölcs hozzáadását, meglévő gyümölcs adatainak módosítását és gyümölcs törlését. A backend REST API végpontokat biztosít a frontend számára, amely egy felhasználóbarát felületen keresztül jeleníti meg az adatokat és kezeli a műveleteket.

## Adatbázis szerkezet

    ````sql
    CREATE TABLE `gyumolcs` (
      `gyumolcsid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
      `nev` varchar(200) UNIQUE NOT NULL,
      `megjegyzes` varchar(500) DEFAULT NULL,
      `nev_eng` varchar(200) DEFAULT NULL,
      `alt_szoveg` varchar(200) NOT NULL,
      `src` varchar(200) NOT NULL
    );

    CREATE TABLE `erkezes` (
      `gyumolcsid` bigint(20) UNSIGNED NOT NULL,
      `mennyiseg` int(11) NOT NULL,
      `egysegar` decimal(10,2) NOT NULL,
      `erkezett` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    ````

## Asztali konzolos alkalmazás

Az asztali konzolos alkalmazás lehetővé teszi a gyümölcsök érkezési adatai alapján egyszerű mutatószámok megjelenítését. Az alábbi mutatószámokat kell megjeleníteni:

    - 1. Az összes gyümölcs mennyisége.
    - 2. Az összes gyümölcs értéke (mennyiség * egységár).
    - 3. A legdrágább gyümölcs neve és egységára.
    - 4. Mennyi volt az összértéke az "Alma" (gyumolcsid: 1) érkezéseinek?
    - 5. Melyik gyümölcs érkezett a legtöbb alkalommal?
    - 6. Hány szállítmány érkezett 2026 februárjában?

## Asztali GUI alkalmazás

Az asztali GUI alkalmazás egy grafikus felületet biztosít a gyümölcsök nyilvántartására. A felhasználó képes lesz megtekinteni a gyümölcsök listáját, hozzáadni új gyümölcsöket, szerkeszteni meglévő gyümölcsöket és törölni felesleges bejegyzéseket. Az alkalmazás a backend REST API végpontjait használja az adatok kezelésére.

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


## Várható eredmény

A fejlesztett alkalmazás lehetőséget biztosít egy felhasználóbarát felületen keresztül a gyümölcsök nyilvántartására, az adatok dinamikus frissítésére, valamint az egyszerű CRUD (*Create, Read, Update, Delete*) műveletek elvégzésére.