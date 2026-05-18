# Gyógynövény Nyilvántartó Rendszer – Projektfeladat

[cite_start]Ez a projekt egy komplex asztali és webes szoftverfejlesztési vizsgafeladat megvalósítása[cite: 504]. [cite_start]A rendszer Magyarország nevezetes gyógynövényeinek adatait, lelőhelyeit és hasznosítási kategóriáit tartja nyilván[cite: 522, 574]. [cite_start]Magában foglalja az adatok asztali (konzolos és grafikus) feldolgozását, valamint egy teljes webalkalmazást.

---

## 🚀 Projektkomponensek

[cite_start]A teljes projekt az alábbi négy fő fejlesztési részből áll[cite: 510, 575]:

1. [cite_start]**Konzolos alkalmazás (`NagyGyogynovenyek`)**: C# nyelven írt parancssori alkalmazás, amely a forrásként biztosított CSV fájlokból végzi el az adatok beolvasását és statisztikai elemzését[cite: 522, 544].
2. [cite_start]**Grafikus alkalmazás (`NagyGyogynovenekGUI`)**: C# .NET alapú, reszponzív asztali GUI alkalmazás, amely közvetlenül a helyi MySQL adatbázishoz kapcsolódva jeleníti meg a növények adatait és képeit[cite: 562, 564, 565].
3. [cite_start]**Backend REST API**: Node.js és Express alapú szerveralkalmazás, amely MySQL adatbázis segítségével szolgálja ki a frontend kéréseit[cite: 577, 616, 617].
4. [cite_start]**Reszponzív weboldal / Frontend**: Többoldalas webes felület, amely Bootstrap keretrendszer és egyedi CSS segítségével valósítja meg az adatok kezelését az API végpontokon keresztül[cite: 576, 578, 595].

---

## 📊 Adatbázis Struktúra (MySQL)

[cite_start]A projekt a `gyogynovenyek_db` elnevezésű adatbázisra épül[cite: 562, 573]. Az adatbázis importálása a mellékelt `gyogynovenyek_db.sql` állomány segítségével történik[cite: 591].

### Főbb táblák

* [cite_start]`megye`: A lelőhelyek vármegyéinek adatai[cite: 542, 592].
* [cite_start]`lelohely`: A gyűjtési helyszínek adatai (`id`, `nev`, `megyeid`) [cite: 540-542, 592].
* [cite_start]`gyogynoven`: A gyógynövények nyilvántartása[cite: 592, 593].

### A `gyogynoven` tábla részletes mezői:

| Mező | Típus | Leírás |
| :--- | :--- | :--- |
| `azon` | INT (PK) | [cite_start]A gyógynövény egyedi azonosítója [cite: 533] |
| `nev` | VARCHAR | [cite_start]A gyógynövény magyar megnevezése [cite: 534] |
| `fajta` | VARCHAR | [cite_start]A növény latin tudományos neve [cite: 535] |
| `lelohely_id` | INT (FK) | Külső kulcs, amely a `lelohely.id`-ra hivatkozik [cite: 536] |
| `gyujtes_eve` | INT | [cite_start]A gyűjtés/feljegyzés éve [cite: 537] |
| `hasznositas` | VARCHAR | [cite_start]Kategória (pl. gyógyászat, élelmiszer, kozmetika) [cite: 538] |
| `URL` | TEXT | [cite_start]Opcionális link a növény fényképéhez [cite: 593] |

---

## 💻 Részletes modulok és funkciók

### 1. Konzolos Alkalmazás (`NagyGyogynovenyek`)

* [cite_start]OOP szemléletű struktúra saját `Gyogynoveny` osztállyal és konstruktorral[cite: 548, 550].
* [cite_start]A `gyogynovenyek.csv` és a `telepulesek.csv` állományok beolvasása és tárolása összetett adatszerkezetben[cite: 551, 553].
* [cite_start]**Legnépszerűbb lelőhely:** Keresés és statisztika készítése a legtöbb feljegyzett növényt tartalmazó helyszínről[cite: 555].
* [cite_start]**Gyógyászati toplista:** A minta szerint kigyűjti és megjeleníti azt a 4 lelőhelyet, ahol a legtöbb gyógyászati célú növény található, azok részletes adataival[cite: 557].
* [cite_start]**Szűrés fájlba:** Felhasználótól bekért hasznosítási kategória alapján kimenti a növény és lelőhely nevét egy `<kategória>_novenyek.txt` fájlba[cite: 558].

### 2. Grafikus Alkalmazás (`NagyGyogynovenekGUI`)

* [cite_start]Reszponzív ablakkezelés növényes háttérképpel, ahol átméretezéskor kizárólag a képek mérete alkalmazkodik[cite: 565, 566].
* [cite_start]Az "Adatok betöltése" gombra kattintva feltölti a bal oldali listát az adatbázisból, majd a gombot inaktívvá teszi a többszörös betöltés elkerülésére[cite: 568, 569].
* [cite_start]A listából kiválasztott rekord hatására dinamikusan frissül a lelőhely neve, és betöltődik a hozzá tartozó fotó a `kepek/` mappából[cite: 570, 571].

### 3. Backend REST API Végpontok

[cite_start]A szerver alapértelmezetten a `http://localhost:5000` címen fut, és az alábbi végpontokat biztosítja[cite: 656]:

| Metódus | URL | Leírás | Státuszkódok |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/gyogynovenyek` | [cite_start]Lekéri az összes növényt a hozzá tartozó lelőhely nevével összekapcsolva (JOIN)[cite: 621, 625]. | [cite_start]`200 OK` [cite: 623] |
| **POST** | `/api/gyogynovenyek` | Új gyógynövény rögzítése az adatbázisba. [cite_start]Hiányos adatok esetén hibaüzenetet küld[cite: 631, 635]. | [cite_start]`201 Created` / `400 Bad Request` [cite: 633, 635] |
| **DELETE** | `/api/gyogynovenyek/{azon}` | [cite_start]Törli a megadott azonosítójú növényt, amennyiben az létezik[cite: 640, 642]. | [cite_start]`204 No Content` / `404 Not Found` [cite: 642, 643] |
| **PUT** | `/api/gyogynovenyek/{azon}/kep` | [cite_start]Frissíti vagy hozzáadja a megadott növény fényképének URL linkjét[cite: 645, 647]. | [cite_start]`200 OK` [cite: 650] |
| **GET** | `/api/leloehelyek` | [cite_start]Visszaadja az összes elérhető lelőhelyet (`id`, `nev`) az űrlapok legördülő listáihoz[cite: 652]. | `200 OK` |

### 4. Frontend (Reszponzív Weboldal)

[cite_start]A weboldal tiszta MVC elvet követ, Bootstrap grid-rendszert és egyedi stíluslapot (`css/style.css`) használ[cite: 576, 577, 605, 615].

* [cite_start]**`index.html` (Kezdőlap)**: Tartalmaz egy látványos `.start` elnevezésű fejlécet, amely a `kepek/10.jpg` háttérképet használja teljes kitöltéssel (cover), ismétlődés nélkül [cite: 596, 611-613].
* [cite_start]**Egységes Navigáció**: Minden oldalon felső menüsor található, ahol az aktuális oldal kiemelten jelenik meg (RGB(100, 100, 160) színnel és félkövér betűtípussal) [cite: 607-609].
* [cite_start]**`lista.html` (Növények listája)**: REST API-n keresztül kéri le az adatokat, és táblázatban jeleníti meg őket[cite: 597, 661, 662]. [cite_start]Ha nincs kép linkelve, a "Nincs kép" felirat látható[cite: 664]. [cite_start]Minden sor végén egy működő *Törlés* gomb található[cite: 665].
* [cite_start]**`hozzaadas.html` (Új növény felvétele)**: Tartalmaz egy űrlapot, ahol a lelőhelyek legördülő listája dinamikusan az API-ról töltődik be[cite: 598, 667, 669]. [cite_start]Kibővítésre került egy URL típusú kép-link beviteli mezővel is[cite: 670].
* [cite_start]**`kepek.html` (Képlink módosítása)**: Lehetőséget biztosít egy kiválasztott növény fénykép-linkjének módosítására vagy hozzáadására, amely a mentés után azonnal frissül a listában[cite: 599, 678, 679].

---

## 📦 Leadandó állományok szerkezete

[cite_start]A hivatalos vizsgakövetelményeknek megfelelően a leadandó csomag felépítése[cite: 680, 681]:

* [cite_start]**Frontend mappa:** HTML, CSS, JS állományok, Bootstrap fájlok és a `kepek/` mappa[cite: 682].
* [cite_start]**Backend mappa:** Teljes Node.js + Express projekt (a felesleges `node_modules` mappa nélkül)[cite: 683, 686].
* [cite_start]**Adatbázis mappa:** Az importálásra használt, sématiszta `gyogynovenyek_db.sql` fájl[cite: 591, 684].
* [cite_start]**Tesztek:** Thunder Client vagy Postman exportált JSON tesztkollekció a végpontok működésének igazolására[cite: 654, 685].