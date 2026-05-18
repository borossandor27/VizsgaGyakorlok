# Klasszikus Filmek – Projektfeladat

Ez a projekt egy komplex szoftverfejlesztési és adatbázis-kezelési vizsgafeladat megoldása. Magában foglalja az adatok asztali (konzolos és grafikus) feldolgozását, valamint egy teljes körű webes (backend API és responsive frontend) alkalmazás megvalósítását.

---

## 🚀 Projektkomponensek

A projekt négy fő fejlesztési részből áll:

1. **Konzolos alkalmazás (`Klasszikus Filmek`)**: C# nyelven írt, CSV alapú adatfeldolgozó és szűrő program.
2. **Grafikus alkalmazás (`Klasszikus FilmekGUI`)**: C# .NET alapú, reszponzív asztali GUI az adatbázisban tárolt adatok megjelenítésére és elemzésére.
3. **Backend API**: Node.js alapú REST API, amely MySQL adatbázishoz kapcsolódva szolgálja ki a frontendet.
4. **Reszponzív weboldal / Frontend**: MVC-elvet követő, tiszta HTML/CSS/JS frontend, amely dinamikusan kommunikál a backend API-val.

---

## 📊 Adatbázis Struktúra (MySQL)

A webes és a GUI alkalmazás a `klasszikus_filmek` nevű adatbázisra épül. A táblák közötti kapcsolat **1:N** (egy műfajhoz több film is tartozhat).

### `mufajok` tábla

| Mező | Típus | Leírás |
| :--- | :--- | :--- |
| `id` | INT (PK) | Egyedi azonosító minden műfajhoz |
| `mufaj_neve` | VARCHAR(100) | A műfaj megnevezése (pl. 'Dráma / Románc') |

### `filmek` tábla

| Mező | Típus | Leírás |
| :--- | :--- | :--- |
| `id` | INT (PK) | A film egyedi azonosítója |
| `cim` | VARCHAR(200) | A film címe |
| `mufaj_id` | INT (FK) | Külső kulcs, amely a `mufajok.id`-ra hivatkozik |
| `rendezo` | VARCHAR(100) | A film rendezője |
| `gyartasi_ev` | INT | A film gyártási éve (pl. 1972) |
| `szarmazasi_orszag`| VARCHAR(50) | Származási ország (pl. USA, UK/USA) |
| `szereplok` | TEXT | Főszereplők felsorolása, vesszővel elválasztva |
| `legsikeresebb_dijak`| VARCHAR(255) | Legismertebb/legszebb elnyert díjak |
| `kep_url` | TEXT | Publikus URL a film plakátjához |

> **Megjegyzés:** A konzolos alkalmazás a forrásként biztosított, pontosvesszővel elválasztott, UTF-8 kódolású `filmek.csv` és `mufajok.csv` fájlokból dolgozik.

---

## 💻 Részletes modulok és funkciók

### 1. Konzolos Alkalmazás

* OOP szemléletű megvalósítás saját `Film` osztállyal és statikus adatbeolvasó metódussal.
* **Statisztika:** Megszámolja és kilistázza az 1970 előtt készült filmeket a minta szerint.
* **Keresés:** Bekér egy műfajt a felhasználótól, majd statikus segédmetódusokkal megkeresi a hozzá tartozó filmeket. Ha nincs találat, hibát jelez.

### 2. Grafikus Alkalmazás (GUI)

* Reszponzív ablakkezelés, ahol az ablak átméretezésekor csak a képek mérete változik.
* **Adatbázis-kapcsolat:** Az "Adatok betöltése" gombra kattintva beolvassa az összes rekordot, majd leghatékonyabb működés érdekében letiltja a gombot.
* **Dinamikus megjelenítés:** A listából kiválasztott film plakátját URL alapján tölti be, és kiszámítja a film aktuális korát (2025-ös bázisévhez képest).

### 3. Backend API Végpontok

A szerver a `/api` gyökérútvonal alatt az alábbi REST végpontokat biztosítja:

* **`GET /api/film`**
  * *Leírás:* Lekéri az összes film adatát a műfaj nevével összekapcsolva.
  * *Válasz:* `200 OK` – JSON tömb.
* **`POST /api/ujfilm`**
  * *Leírás:* Új film rögzítése az adatbázisba.
  * *Body:* JSON objektum a film adataival.
  * *Válasz:* `201 CREATED` (sikeres mentés esetén az új ID-val) vagy `400 BAD REQUEST` ("Hiányos adatok." üzenettel).
* **`GET /api/mufajok`**
  * *Leírás:* Lekéri az összes választható műfajt a legördülő menük feltöltéséhez.
  * *Válasz:* `200 OK` – JSON tömb/szöveg.

### 4. Frontend (Reszponzív Weboldal)

* **Design:** Egységes CSS stíluslapok, `filmszalag.png` háttérkép, valamint az aktív menüpontok vizuális kiemelése félkövér és egyedi világosszürke színnel.
* **Filmek oldala:** Az adatokat `GET /api/film` hívással kéri le, és kártyás elrendezésben jeleníti meg (mobilnézetben 1 hasáb, tablet/desktop nézetben 2 hasáb). A film korát egy interaktív gombbal ugorhatjuk fel egy üzenetablakban.
* **Új film hozzáadása:** Az űrlapon a műfajok listája dinamikusan töltődik be a backendről. Kiegészítésre került egy URL típusú plakát link beviteli mezővel is. Sikeres küldés (`POST`) után automatikusan visszanavigál a listaoldalra.

---

## 📦 Leadandó állományok szerkezete

A beadásra kerülő ZIP csomagok az alábbi felépítést követik:

* **Frontend:** HTML, CSS, kliensoldali JS fájlok és az `img/` mappa.
* **Backend:** Node.js projektfájlok a függőségekkel, kiegészítve az adatbázist felépítő `.sql` állománnyal.
* **Tesztek:** A végpontok ellenőrzésére szolgáló exportált Thunder Client / Postman kollekció fájl (`Backend_teszt.json`).
* **Konzolos és GUI alkalmazás:** Külön ZIP fájlok a C# projektek forráskódjával, valamint a szükséges CSV fájlokkal.
