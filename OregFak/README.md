# Projektfeladat: Szoftverfejlesztő és -tesztelő szakma

**Megnevezés:** B) Asztali- és webes szoftverfejlesztés, adatbázis-kezelés  
**Időtartam:** 240 perc  
**Segédeszköz:** kijelölt számítógép, papír, toll, ceruza, lepecsételt pótlap, általános keresésre internet [cite: 1]

---

## A részfeladatok pontszámai

| Feladat részletezése | Asztali (konzolos) | Asztali (grafikus) | Web (backend + frontend) | Összesen |
| :--- | :---: | :---: | :---: | :---: |
| **Elérhető pontszám** | 15 | 10 | 10 + 15 + 15 | 65 |
| **Minimális % (40%)** | | | | 26 pont |

**Értékelési skála:**

- 80-100% : 5
- 60-79% : 4
- 50-59% : 3
- 40-49% : 2
- 0-39% : 1 [cite: 1, 2]

---

## Fontos tudnivalók

- Az internetkapcsolatot kizárólag általános keresésre használhatja[cite: 5].
- Mentse munkáját rendszeresen a megadott vizsgakönyvtárba[cite: 8].
- Csak a forráskódot tartalmazó állományok értékelhetők[cite: 11].
- Az adatbázis-fejlesztés értékelése az asztali és a webes részekben történik[cite: 12].

---

## 1. Projekt feladat: Asztali alkalmazás fejlesztése

Magyarország nevezetes fáinak adatait tartalmazó szöveges állományok (CSV) feldolgozása[cite: 17].

### Adatforrások

**fa.csv:**

- `azon`: azonosító (egész)
- `faj`: fajta (szöveg)
- `kormeret`: törzs körmérete
- `telepules_id`: település azonosítója
- `meres`: mérés éve [cite: 25]

**telepules.csv:**

- `id`: azonosító
- `nev`: település neve
- `megyeid`: vármegye azonosítója [cite: 25]

### Feladatok (Konzol - NagyFak)

1. Hozzon létre egy `Fa` osztályt a megadott mezőkkel *(Azon, Faj, Kormeret, Telepulesid, MeresEve, TelepulesNev)*[cite: 28].
2. Készítsen statikus `Beolvas` metódust a fájlok betöltéséhez[cite: 29].
3. Határozza meg a legnagyobb körméretű fát és települését[cite: 36].
4. Listázza ki azt a négy települést, ahol a legtöbb nagy körméretű fa található[cite: 37].
5. Kérjen be egy fafajtát a felhasználótól, és mentse az adatait egy `.txt` fájlba (pl. `Hars.csv`)[cite: 38, 39, 42].

### Feladatok (GUI - NagyFakGUI)

1. Készítsen reszponzív grafikus felületet `NagyFakGUI` néven[cite: 49, 50].
2. A háttérkép a `farajz.jpg` legyen[cite: 52].
3. Csatlakozzon a `fak_db` adatbázishoz[cite: 54].
4. Az "Adatok betöltése" gombra kattintva töltse be a fák listáját egy ListBox-ba[cite: 55].
5. A lista elemére kattintva jelenjen meg a település neve és a hozzá tartozó kép az `img` mappából[cite: 55].

---

## 2. Projekt feladat: Webalkalmazás fejlesztése

**Öregfák Nyilvántartó Rendszer**[cite: 56].

### Részek:

1. **Reszponzív weboldal:** Bootstrap és saját CSS használatával[cite: 57].
2. **Backend:** Node.js + Express + MySQL REST API[cite: 57].
3. **Frontend:** Listázás, felvitel, törlés és képlink-módosítás[cite: 57].

### Adatbázis struktúra (fak_db)

- **fa tábla:** `azon`, `faj`, `kormeret`, `telepules_id`, `meres`, `URL` [cite: 63]
- **telepules tábla:** `id`, `nev`, `megyeid` [cite: 63]
- **megye tábla:** `id`, `nev` [cite: 63]

### Weboldal követelmények:

- `index.html` (kezdőlap látványos fejléccel)
- `fak.html` (fák listája)
- `hozzaadas.html` (új fa felvétele)
- `kepek.html` (képlink módosítása) [cite: 8]
- Aktuális menüpont kiemelése: `RGB(100, 100, 160)`, félkövér[cite: 8].

---

### Backend feladat *(Node.js + Express + MySQL)*

Készítse el a backend alkalmazást `server.js` néven a `backend` mappában!

**Alapbeállítások:**

- Használja az `express`, `mysql2` (vagy `mysql`) és `cors` modulokat.
- A szerver a **3000-es porton** hallgasson.
- Adatbázis kapcsolat adatai:
  - `host`: "localhost"
  - `user`: "root"
  - `password`: ""
  - `database`: "fak_db"

**Végpontok (API Endpoints):**

1. **GET `/fak`**
    - Lekéri az összes fát az adatbázisból.
    - Tartalmaznia kell a település nevét is (JOIN művelet a `telepules` táblával).
    - SQL: `SELECT fa.*, telepules.nev AS telepules_nev FROM fa JOIN telepules ON fa.telepules_id = telepules.id`

2. **GET `/telepulesek`**
    - Lekéri az összes települést a `telepules` táblából az űrlapok legördülő listáihoz.

3. **POST `/ujfa`**
    - Új fa rögzítése az adatbázisba.
    - A kérés törzsében (body) érkező adatokat mentse el a `fa` táblába.

4. **PUT `/modosit/:id`**
    - Egy adott azonosítójú (`id`) fa képének (URL mező) módosítása.
    - Sikeres módosítás esetén küldjön visszaigazoló üzenetet.

5. **DELETE `/torol/:id`**

    - Törli a megadott azonosítójú fát az adatbázisból.

**Hibakezelés és elvárások:**

- Használjon megfelelő HTTP állapotkódokat (pl. 200: OK, 201: Létrehozva, 404: Nem található, 500: Szerverhiba).
- A válaszokat JSON formátumban küldje el.
- Tesztelje a végpontokat Postman vagy Thunder Client segítségével!

---

### Frontend feladat (Kliensoldali logika)

A `frontend` mappában található HTML fájlokat egészítse ki a szükséges JavaScript (fetch API) hívásokkal:

- **Listázás:** A `fak.html` betöltésekor jelenjenek meg a fák adatai kártya *(Card)* vagy táblázat formátumban.
- **Új adat:** A `hozzaadas.html` oldalon található űrlap elküldésekor az adatok kerüljenek mentésre a backend segítségével.
- **Törlés:** Minden fánál legyen egy "Törlés" gomb, ami megerősítés után meghívja a törlés végpontot.
- **Kép frissítése:** A `kepek.html` oldalon lehessen kiválasztani egy fát, és megadni az új kép URL-jét.
