# Gyógynövény Nyilvántartó Rendszer – Projektfeladat

Ez a projekt egy komplex asztali és webes szoftverfejlesztési vizsgafeladat megvalósítása. A rendszer Magyarország nevezetes gyógynövényeinek adatait, lelőhelyeit és hasznosítási kategóriáit tartja nyilván[cite: 522, 574]. Magában foglalja az adatok asztali (konzolos és grafikus) feldolgozását, valamint egy teljes webalkalmazást.

---

## 🚀 Projektkomponensek

A teljes projekt az alábbi négy fő fejlesztési részből áll[cite: 510, 575]:

1. **Konzolos alkalmazás (`NagyGyogynovenyek`)**: C# nyelven írt parancssori alkalmazás, amely a forrásként biztosított CSV fájlokból végzi el az adatok beolvasását és statisztikai elemzését[cite: 522, 544].
2. **Grafikus alkalmazás (`NagyGyogynovenekGUI`)**: C# .NET alapú, reszponzív asztali GUI alkalmazás, amely közvetlenül a helyi MySQL adatbázishoz kapcsolódva jeleníti meg a növények adatait és képeit.
3. **Backend REST API**: Node.js és Express alapú szerveralkalmazás, amely MySQL adatbázis segítségével szolgálja ki a frontend kéréseit.
4. **Reszponzív weboldal / Frontend**: Többoldalas webes felület, amely Bootstrap keretrendszer és egyedi CSS segítségével valósítja meg az adatok kezelését az API végpontokon keresztül.

---

## 📊 Adatbázis Struktúra (MySQL)

A projekt a `gyogynovenyek_db` elnevezésű adatbázisra épül. Az adatbázis importálása a mellékelt `gyogynovenyek_db.sql` állomány segítségével történik.

### Főbb táblák

* `megye`: A lelőhelyek vármegyéinek adatai.
* `lelohely`: A gyűjtési helyszínek adatai (`id`, `nev`, `megyeid`).
* `gyogynoven`: A gyógynövények nyilvántartása.

### A `gyogynoven` tábla részletes mezői:

| Mező | Típus | Leírás |
| :--- | :--- | :--- |
| `azon` | INT (PK) | A gyógynövény egyedi azonosítója |
| `nev` | VARCHAR | A gyógynövény magyar megnevezése |
| `fajta` | VARCHAR | A növény latin tudományos neve |
| `lelohely_id` | INT (FK) | Külső kulcs, amely a `lelohely.id`-ra hivatkozik |
| `gyujtes_eve` | INT | A gyűjtés/feljegyzés éve  |
| `hasznositas` | VARCHAR | Kategória (pl. gyógyászat, élelmiszer, kozmetika) |
| `URL` | TEXT | Opcionális link a növény fényképéhez |

---

## 💻 Részletes modulok és funkciók

### 1. Konzolos Alkalmazás (`NagyGyogynovenyek`)

* OOP szemléletű struktúra saját `Gyogynoveny` osztállyal és konstruktorral.
* A `gyogynovenyek.csv` és a `telepulesek.csv` állományok beolvasása és tárolása összetett adatszerkezetben.
* **Legnépszerűbb lelőhely:** Keresés és statisztika készítése a legtöbb feljegyzett növényt tartalmazó helyszínről.
* **Gyógyászati toplista:** A minta szerint kigyűjti és megjeleníti azt a 4 lelőhelyet, ahol a legtöbb gyógyászati célú növény található, azok részletes adataival.
* **Szűrés fájlba:** Felhasználótól bekért hasznosítási kategória alapján kimenti a növény és lelőhely nevét egy `<kategória>_novenyek.txt` fájlba.

### 2. Grafikus Alkalmazás (`NagyGyogynovenekGUI`)

* Reszponzív ablakkezelés növényes háttérképpel, ahol átméretezéskor kizárólag a képek mérete alkalmazkodik.
* Az "Adatok betöltése" gombra kattintva feltölti a bal oldali listát az adatbázisból, majd a gombot inaktívvá teszi a többszörös betöltés elkerülésére.
* A listából kiválasztott rekord hatására dinamikusan frissül a lelőhely neve, és betöltődik a hozzá tartozó fotó a `kepek/` mappából.

### 3. Backend REST API Végpontok

A szerver alapértelmezetten a `http://localhost:5000` címen fut, és az alábbi végpontokat biztosítja[cite: 656]:

| Metódus | URL | Leírás | Státuszkódok |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/gyogynovenyek` | Lekéri az összes növényt a hozzá tartozó lelőhely nevével összekapcsolva (JOIN). | `200 OK` |
| **POST** | `/api/gyogynovenyek` | Új gyógynövény rögzítése az adatbázisba. Hiányos adatok esetén hibaüzenetet küld. | `201 Created` / `400 Bad Request` |
| **DELETE** | `/api/gyogynovenyek/{azon}` | Törli a megadott azonosítójú növényt, amennyiben az létezik. | `204 No Content` / `404 Not Found` |
| **PUT** | `/api/gyogynovenyek/{azon}/kep` | Frissíti vagy hozzáadja a megadott növény fényképének URL linkjét. | `200 OK` |
| **GET** | `/api/leloehelyek` | Visszaadja az összes elérhető lelőhelyet (`id`, `nev`) az űrlapok legördülő listáihoz. | `200 OK` |

### 4. Frontend (Reszponzív Weboldal)

A weboldal tiszta MVC elvet követ, Bootstrap grid-rendszert és egyedi stíluslapot (`css/style.css`) használ.

* **`index.html` (Kezdőlap)**: Tartalmaz egy látványos `.start` elnevezésű fejlécet, amely a `kepek/10.jpg` háttérképet használja teljes kitöltéssel (cover), ismétlődés nélkül.
* **Egységes Navigáció**: Minden oldalon felső menüsor található, ahol az aktuális oldal kiemelten jelenik meg (RGB(100, 100, 160) színnel és félkövér betűtípussal).
* **`lista.html` (Növények listája)**: REST API-n keresztül kéri le az adatokat, és táblázatban jeleníti meg őket. Ha nincs kép linkelve, a "Nincs kép" felirat látható. Minden sor végén egy működő *Törlés* gomb található.
* **`hozzaadas.html` (Új növény felvétele)**: Tartalmaz egy űrlapot, ahol a lelőhelyek legördülő listája dinamikusan az API-ról töltődik be. Kibővítésre került egy URL típusú kép-link beviteli mezővel is.
* **`kepek.html` (Képlink módosítása)**: Lehetőséget biztosít egy kiválasztott növény fénykép-linkjének módosítására vagy hozzáadására, amely a mentés után azonnal frissül a listában.

---

## 📦 Leadandó állományok szerkezete

A hivatalos vizsgakövetelményeknek megfelelően a leadandó csomag felépítése:

* **Frontend mappa:** HTML, CSS, JS állományok, Bootstrap fájlok és a `kepek/` mappa.
* **Backend mappa:** Teljes Node.js + Express projekt (a felesleges `node_modules` mappa nélkül).
* **Adatbázis mappa:** Az importálásra használt, sématiszta `gyogynovenyek_db.sql` fájl.
* **Tesztek:** Thunder Client vagy Postman exportált JSON tesztkollekció a végpontok működésének igazolására.
