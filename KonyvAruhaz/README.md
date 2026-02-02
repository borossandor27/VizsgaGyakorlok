# Könyv áruház

Készítsünk egy olyan webes alkalmazást, ahol a felhasználók kereshetnek könyvek között, részletes információkat kaphatnak róluk, és akár vásárlási lehetőséget is biztosítunk.

## Adatbázis (MySQL)

### Könyvek tábla

- konyv_id (auto inkrementáló sorszám)
- cím
- szerző
- kiadó
- kiadási év
- ISBN
- leírás
- borítókép (fájl elérési útja)
- ár
- készleten (logikai érték: igen/nem)

### Felhasználók tábla

- user_id *(automatikusan növekvő sorszám)
- felhasználónév
- email
- jelszó *(hash-elve)*
- cím
- telefonszám

### Rendelések tábla

- rendeles_id *(automatikusan növekvő sorszám)*
- felhasználó_id (idegen kulcs a felhasználók táblára)
- könyv_id (idegen kulcs a könyvek táblára)
- mennyiség
- dátum

## [Asztali alkalmazás](./asztaliKonyvAruhaz/)

## [Backend - Express.js API](./backendKonyvAruhaz/)

### React frontend

