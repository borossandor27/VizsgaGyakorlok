
# 5 0613 12 03 Szoftverfejlesztő és -tesztelő szakma Projektfeladat

**Projektfeladat megnevezése:**

B) Asztali- és webes szoftverfejlesztés, adatbázis-kezelés

**Projektfeladat időtartama:**

240 perc


## Rendelkezésre álló idő: 240 perc

| A részfeladatok pontszámai | Konzolós asztali alkalmazás | Grafikus asztali alkalmazás | Reszponzív weboldal | Backend | Frontend | Összesen |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Elérhető pontszám** | 15 | 10 | 15 | 15 | 15 | **65** |
| **Elért pontszám** | | | | | | |
| **„Megfelelt eredmény”-hez szükséges minimális %** | | | | | | **40 %** |
| **Eredmény %-ban:** | | | | | | |
| **Értékelés:** <br> 80-100% - 5 <br> 60-79% - 4 <br> 50-59% - 3 <br> 40-49% - 2 <br> 0-39% - 1 | | | | | | **Érdemjegy:** |

---

## Fontos tudnivalók

- Az első és utolsó oldalon írja be a nevét és a születési idejét!
- A feladat végrehajtásához internetkapcsolat áll a rendelkezésére. Az iskolai hálózati, illetve felhőalapú tároló használata nem megengedett, erről a rendszergazda gondoskodik. Az internetkapcsolatot a projektfeladat elvégzésének ideje alatt kizárólag általános keresésre használhatja, mással történő kommunikációra vagy a feladathoz célirányosan elkészített anyagok letöltésére nem. (Képzési és Kimeneti Követelmények – Szoftverfejlesztő és –tesztelő technikus szakma 12/2020 (II. 7.) Korm. rendelet)
- A feladatlap belső oldalain és a pótlapon készíthet jegyzeteket, ezeket a vizsga végén be kell adni, de tartalmukat nem fogják értékelni. A feladatokat tetszőleges sorrendben oldhatja meg. Javasoljuk, hogy a feladatokat először olvassa végig, utána egyenként oldja meg az egyes részfeladatokat!
- A forrásfájlokat a vizsgakönyvtárban találja. Felhívjuk a figyelmet a gyakori mentésre, és feltétlenül javasoljuk a mentést minden esetben, mielőtt egy másik feladat megoldásába kezd. Dolgozatát a vizsgakönyvtárába kell mentenie. A feladatsor végén ellenőrizze, hogy minden megoldás a megadott könyvtárban van-e, mert csak ezek értékelésére van lehetőség!
- Ellenőrizze, hogy a beadandó állományok olvashatók-e, mert a nem megnyitható állományok értékelése nem lehetséges!
- A feladatok megoldása csak abban az esetben értékelhető, ha a vizsgázó létrehozta a választott programozási környezetnek megfelelő állomány(oka)t a vizsgakönyvtárában, és az tartalmazza a részfeladatok megoldásához tartozó forráskódot. Az adatbázis-fejlesztés értékelése az asztali és a webes szoftverfejlesztési részekben történik.
- Amennyiben számítógépével műszaki probléma keletkezik, jelezze a felügyelő tanárnak! A jelzés ténye és a megállapított hiba jegyzőkönyvezésre kerül. A kiesett idővel a feladatmegoldás ideje hosszabb lesz. Amennyiben a hiba mégsem számítógépes eredetű, a javító tanár értékeléskor köteles figyelembe venni a jegyzőkönyv esetleírását. (A rendszergazda nem segítheti a vizsgázót a dolgozat elkészítésében.).
- A feladat végén a feladatlap első oldalán Önnek fel kell tüntetnie a vizsgakönyvtárban található, Ön által előállított vagy módosított és beadott könyvtárak/fájlok nevét.
- A feladat végeztével addig ne távozzon, amíg ezt meg nem tette, és a felügyelő tanárnak ezt be nem mutatta!

## Sikeres munkát kívánunk!

---

## 1. Projekt feladat: Grafikus és konzolos részt egyaránt tartalmazó asztali alkalmazás fejlesztése

A következő feladatban Magyarország nevezetes fáinak adatait tartalmazó szöveges állományok állnak a rendelkezésünkre, melyekkel programozási feladatokat kell megoldania az Ön által tanult programozási nyelven és fejlesztői környezetben.

- A képernyőre írást igénylő részfeladatok eredményének megjelenítése előtt írja a képernyőre a feladat sorszámát (például: 1.)!
- Az egyes feladatokban a kiírásokat a minta szerint készítse el!
- Az ékezetmentes azonosítók és kiírások is elfogadottak.
- Az azonosítókat kis- és nagybetűkkel is kezdheti.
- A program megírásakor az állományban lévő adatok helyes szerkezetét nem kell ellenőriznie, feltételezheti, hogy a rendelkezésre álló adatok a leírtaknak megfelelnek.
- A megoldását úgy készítse el, hogy az azonos szerkezetű, de tetszőleges bemeneti adatok mellett is helyes eredményt adjon!

Az adatforrásként a `fa.csv`, és a `települések.csv` elnevezésű szöveges állományok állnak rendelkezésére. Az állomány első sora a mezőneveket tartalmazza, az adatokat vesszővel választottuk el. Az adatok idézőjelek között találhatóak. A kapott adatok kódolása UTF-8.

Az adatforrásban a következő adatokat találja meg. Néhány esetben az adatforrás jellege miatt az elnevezések nem pontosan fedik az alábbi lista elemeit, ilyenkor értelemszerűen azonosítsa az adatokat:

**fa.csv:**
- `azon`: a fa azonosítója, egész szám
- `faj`: a fa fajtája, szöveges
- `kormeret`: a fa törzsének körmérete
- `település_id`: a fa településének azonosítója, egész szám
- `meres`: a mérés éve, egész szám

**település.csv:**
- `id`: a település azonosítója, egész szám
- `nev`: a település neve, szöveges
- `megyeid`: a település vármegyéjének azonosítója, egész szám

---

### 1. feladat (15 pont)

1. Készítsen konzolos alkalmazást a következő feladatok megoldására, melynek projektjét `NagyFak` néven mentse el!
2. Készítsen saját osztályt `Fa` azonosítóval, melynek a tulajdonságainak azonosítóit és láthatósági szintjét az osztálydiagram szemlélteti. Ékezetes azonosítókat is készíthet, illetve azokat kis- és nagybetűkkel is kezdheti.
3. Készítsen statikus metódust adatforráshoz történő kapcsolódásra, és az adatforrásban levő adatok betöltésére! A metódus neve utaljon az adatforrásból betöltésre (pl.: `Beolvas`). A metódus visszatérési értéke az `Fa` osztályból képzett lista legyen! A metódus paramétere a betöltendő fájl neve legyen! A későbbi feladatokban, ahol ez szükséges, ezt a metódust használja a megoldásra!
4. Az `Fa` osztály adattagjainak beállítását konstruktor segítségével állítsa be! A paraméterben kapott adatok az adatforrásoktól függően változóak lehetnek.
5. Olvassa be a `fa.csv` adatforrás adatait és tárolja az adatokat az `Fa` osztály segítségével egy olyan összetett adatszerkezetben, amely használatával a további feladatok megoldhatók! Írja ki a képernyőre a minta alapján, hogy a beolvasás sikeres volt!
6. Olvassa be a `települések.csv` fájl tartalmát, tárolja az adatokat egy olyan adatszerkezetben, amely segítségével meg tudja majd határozni az egyes fák települését. A beolvasott adatokat felhasználhatja másik osztály tulajdonságának meghatározására is. A sikeres beolvasásról küldjön értesítést a képernyőre!
7. Határozza meg melyik a legnagyobb körméretű fa Magyarországon a vizsgált időszakban és melyik településen található! Az eredményt írja ki a képernyőre a minta szerint!
8. Írja ki a képernyőre azt a négy települést, ahol a legtöbb nagy körméretű fa található, a települések alatt a minta szerint jelenjenek meg a fák adatai is.
9. Kérjen be a felhasználótól egy fa fajtát (pl.: `szelíldgesztenye`). Írja ki a bekért fajta neve.txt (pl.: `szelíldgesztenye.txt`) állományba az adott fajt tartalmazó bejegyzésekből a fák körméretét és a település nevét! Ha nem létezik ilyen fa fajta az adatforrásban, azt is írja ki a fájlba! Kiírása a mintának megfelelő legyen.

#### Kimeneti minták:

```
5. feladat
A fa.csv fájl tartalmának beolvasása megtörtént

6. feladat
A telepules.csv fájl tartalmának beolvasása megtörtént

7. feladat
A legnagyobb körméretű fa a Ötvöskónyi településen található, fajtája: közönséges bükk, körmérete: 1038 cm.

8. feladat
Monostorapáti 26
 -közönséges bükk:439
 -közönséges bükk:616
 -gyertyán:388
Püspökszentlászló 22
 -közönséges bükk:400
 -közönséges bükk:439
 -közönséges bükk:408
Bükkszentkereszt 21
 -közönséges bükk:420
 -közönséges bükk:441
Gemenc 21
 -fekete nyár:685
 -fekete nyár:695

9. feladat
Kérem adja meg a fa fajtáját: Hárs
A Hárs fákról szóló adatok kiírása a Hárs.csv fájlba megtörtént.
```

**Példa a generált `kocsányos tölgy.csv` fájl tartalmára:**
```csv
527;Vásárosbéc;2010
603;Eszteregnye;2002
657;Sikonda;2003
530;Fenékpuszta;2004
503;Kálócfa;2009
553;Monostorapáti;2004
500;Püspökszentlászló;2009
529;Tátika;2005
589;Rákóczifalva;2004
510;Somogytúr;2003
624;Kőszeg;2003
507;Kisdobsza;2004
578;Sárszentmihály;2003
```

---

## 2. feladat (10 pont)

A grafikus alkalmazás elkészítése előtt ellenőrizze le, hogy a lokális adatbázis-kezelő rendszerében létezi-e `fak_db` néven adatbázis és ennek a `fa` táblájának mező nevei megegyeznek a `fa.csv` állomány mezőneveivel. Ha nem, akkor futtassa le a `fak_db.sql` szkriptet a lokális adatbázis-kezelő rendszerében!

1. Készítsen grafikus alkalmazást a következő feladatok megoldására, melynek projektjét `NagyFakGUI` néven mentse el!
2. A betöltéskor megjelenő ablak a minta alapján reszponzív viselkedésű legyen! Nagyobb ablak esetén csak a képek mérete változzon az ablakhoz képest. Az ablakban levő vezérlők típusai és a feliratok feleljenek meg a mintának megfelelően! Az oldal háttérképe a `farajz.jpg` kép legyen! (Minta 1. és Minta 1k.-kisképernyő méret)
3. Ha szükséges a `Fa` osztályt a `NagyFak` projekt segítségével hivatkozza be, vagy hozza létre újra!
4. Csatlakozzon a `fak_db` adatbázishoz! Amennyiben nem tud csatlakozni az adatbázishoz, a feladat végrehajtásához használhatja a `fak.csv` és `telepules.csv` állományokat, de ebben az estben az adatbázis használatáért járó pontot nem tudja megszerezni.
5. Az **„Adatok betöltése”** gombra kattintva a mintán szereplő bal oldali listába töltse be a `fa` tábla összes rekordját! A listában csak a mintában szereplő adatok jelenjenek meg a látható formában! A betöltés után a gomb ne legyen elérhető. (Minta 2.)
6. A listában megjelent rekordok kiválasztása esetén a **„Település:”** címke alatt, jelenjen meg, hogy melyik településen található a kiválasztott fa, jobboldalon az `img` könyvtárban található képek közül jelenjen meg a település képe, van olyan település, amihez nem található kép, ebben az esetben a kép helye üres maradhat, de a település neve ebben az esetben is jelenjen meg!
7. A kijelölés módosítása esetén változzon a település neve (amennyiben ez nem egyezik meg az előző kijelölt fa településével). (Minta 4. és Minta 4.r)

**MINTÁK:** (a képeket a MINTÁK mappában is megtalálja)

[Az eredeti PDF-ben itt képek (Minta1.jpg, Minta1k.jpg, Minta2.jpg, Minta2k.jpg, Minta3.jpg, Minta3k.jpg) voltak.]

---

## 3. feladat (40 pont) - Öregfák Nyilvántartó Rendszer (fak_db)

Egy természetvédelmi szervezet Magyarország öreg fáit tartja nyilván. A feladata egy olyan webalkalmazás elkészítése, amely a meglévő adatbázist használva képes a fák adatainak megjelenítésére, új fa rögzítésére, törlésre, valamint a fák képlinkjeinek kezelésére.

A megoldásnak három része van:
1. Reszponzív weboldal (Bootstrap + saját CSS)
2. Backend (Node.js + Express + MySQL REST API)
3. Frontend (REST API-t használva: listázás, felvitel, törlés, képlink-módosítás)

**Instrukciók a feladat végrehajtásához:**
- a feladatokat bármely Ön által ismert keretrendszerben megcsinálhatja
- a backend, frontend feladatokat külön-külön, vagy egyben működően is megcsinálhatja
- a reszponzív feladatot külön, vagy a frontenddel egyben kivitelezve is megcsinálhatja

**Kiindulási anyagok (ezeket kötelező használni)**

A feladathoz az alábbi állományokat és mappát kapta meg:
- `leiras.md` – dokumentáció az adatbázisról (ebben találja a táblák jelentését)
- `kepek/` mappa – 10 db kép: `1.jpg` ... `10.jpg`
- `bootstrap/` mappa – benne a .css és a .js a bootstrap használatához
- `adatbazisok/` mappa – 3 almappával, amiben .sql, .json és .csv-ben vannak az adatok; az adatbázis és az adatok (importálandó)

**Fontos:** a táblákat NEM Önnek kell létrehoznia. A feladat az, hogy a meglévő adatbázist importálja, és azzal dolgozzon.

### 0. Előkészítés (minden rész alapja)

1. Importálja a kapott SQL állományt (`fak_db.sql`) MySQL/MariaDB szerverbe (XAMPP + phpMyAdmin vagy Workbench).
2. Ellenőrizze, hogy az adatbázis neve: `fak_db`, és a táblák léteznek (pl. `megye`, `telepules`, `fa`).
3. A `fa` tábla mezői közül a feladat szempontjából kiemelten fontosak (ezekkel fog dolgozni):
   - `azon` (azonosító)
   - `faj`
   - `kormeret`
   - `telepules_id`
   - `meres` (mérés éve)
   - `URL` (képlink – ebbe kell a képek elérési útját menteni)

---

### 1. Reszponzív weboldal készítés és formázás

Készítsen legalább 4 darab HTML oldalt (például):
- `index.html` (kezdőlap)
- `fak.html` (fák listája)
- `hozzaadas.html` (új fa felvétele)
- `kepek.html` (képlink módosítása)

#### 1.1 Kötelező reszponzív beállítások (minden oldalon)
- Minden HTML fájlban szerepeljen a reszponzív megjelenítést biztosító meta tag:
  `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Csatolja a Bootstrap CSS-t minden oldalon.
- Csatolja a Bootstrap JS bundle-t minden oldalon (hogy a mobil menü működjön).
- Csatolja a saját CSS fájlt minden oldalon (pl. `css/style.css`).

#### 1.2 Navigáció és aktív menüpont
- Legyen minden oldalon felső navigációs sáv (menü).
- A menüben mindig látszódjon kiemelten az aktuális oldal menüpontja:
  - szín: RGB(100, 100, 160)
  - félkövér
- Ezt CSS-sel oldja meg (például `active` osztály és egy megfelelő szelektor).

#### 1.3 Háttérkép a kezdőlapon
- A kezdőlap (`index.html`) rendelkezzen egy látványos fejléc résszel (pl. `start` osztály).
- A `start` rész háttérképe ne ismétlődjön, és töltse ki a teljes területet (`cover`).
- A háttérképhez használja a `keepek/10.jpg` fájlt.

#### 1.4 Linkek viselkedése
- A belső oldalakra mutató linkek ne új lapon nyíljanak meg (ne használjon `target="_blank"`-et belső hivatkozásoknál).

#### 1.5 Bootstrap Grid
- Minden oldalon alkalmazzon Bootstrap Grid-et (`container`, `row`, `col-...`) úgy, hogy mobilon és asztali nézetben is rendezett, reszponzív legyen. Használhat a Bootstrap-től eltérő, más reszponzivitást biztosító rendszert pl.: Media Query-k, a Flexbox-ot is.

#### Felületek vázlata (1. feladat, DEMO)

**Fák listája (`fak.html` - 1. feladatban minta adat, a működés később)**
| Azon | Faj | Körméret | Mérés éve | Település | Kép | Művelet |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 10 | Platán | 610 | 2023 | Budapest | Nincs kép | Törlés |
| 11 | Hárs | 380 | 2021 | Szeged | | Törlés |
*Megjegyzés: ebben a külön feladatban a törlés gomb csak a felület része (nem végez adatbázis műveletet).*

**Új fa felvétele (`hozzaadas.html` - 1. feladat: reszponzív űrlap - DEMO mentés, adatbázis nélkül)**
- Mezők: Faj, Körméret (cm), Mérés éve, Település (lenyíló lista), Fa fényképeknek linkje
- Gomb: Mentés

**Képlink módosítása (`kepek.html` - 1. feladat: reszponzív felület - DEMO mentés, adatbázis nélkül)**
- Legördülő lista: Fa kiválasztása
- Mező: Új képlink
- Gomb: Mentés

---

### 2. Backend programozás (Node.js + Express REST API)

Készítsen Node.js + Express alapú REST API-t, amely a már importált `fak_db` adatbázishoz kapcsolódik, és abból szolgáltat adatokat.

**Fontos:** táblát létrehozni nem kell, a meglévő táblákat kell használni.

#### 2.1 Kötelező végpontok

**A) Fák lekérdezése**
- `GET /api/fak`
- Elvárások:
  - Sikeres kérésre 200 státuszkód.
  - JSON tömböt ad vissza.
  - A fák adatai mellett a válasz tartalmazza a település nevét is (JOIN a `fa` és `telepules` táblák között).
  - Visszaadott mezők: `azon`, `faj`, `kormeret`, `meres`, `telepules` (település neve), `URL`

**B) Új fa rögzítése**
- `POST /api/fak`
- Elvárások:
  - Sikeres beszúrás esetén 201 státuszkód.
  - Válaszban adja vissza az új rekord azonosítóját (pl. `{ "id": ... }`).
  - Hiányos adatok (pl. nincs faj / település / év / körméret) esetén: 400 státuszkód, üzenet: `"Hiányos adatok"`
  - Beszúrandó mezők: `faj`, `kormeret`, `telepules_id`, `meres`, opcionálisan `URL`

**C) Fa törlése**
- `DELETE /api/fak/{azon}`
- Elvárások:
  - Ha az `azon` létezik és törlés megtörténik: 204 státuszkód.
  - Ha az `azon` nem létezik: 404 státuszkód, üzenet: `"A keresett fa nem létezik."`

**D) Képlink módosítása**
- Javasolt forma: `PUT /api/fak/{azon}/kep`
- Elvárások:
  - A kérésben érkezik az új link (pl. `URL` mező értéke).
  - Sikeres frissítés esetén 200-as válasz, hiba esetén megfelelő státusz.

#### 2.2 API tesztelés és leadandó
- Mentsen el Thunder Client vagy Postman kollekciót.
- Legalább két végpontot teszteljen le (például GET és POST, vagy GET és DELETE).

**Példa kimenet a backend indításakor:**
```
c: >node server.js
DB kapcsolat rendben. DB: fak_db
Backend fut: http://localhost:5000
Tesztoldal: http://localhost:5000/
```

---

### 3. Frontend programozás (REST API használatával)

A frontenden az adatokat nem kézzel beírva, hanem REST API-n keresztül kell lekérni és módosítani.

#### 3.1 Lista oldal – fák megjelenítése (`fak.html`)
1. Lekéri a fák adatait a backendről (`GET /api/fak`).
2. Táblázatban jeleníti meg az adatokat az alábbi oszlopsorrendben:
   - Fa azonosító (`azon`)
   - Faj (`faj`)
   - Körméret (`kormeret`)
   - Mérési év (`meres`)
   - Település neve
3. A táblázatban jelezze a képet/linket:
   - ha van URL, jelenítse meg linkként vagy képként,
   - ha nincs kép (URL üres), jelenjen meg szöveg: `„Nincs kép”`.

#### 3.2 Új fa felvétele (`hozzaadas.html`)
1. A menü a lap tetején balra igazítva.
2. A település kiválasztása lenyíló listából, a lista elemei adatbázisból érkeznek (API végponton keresztül).
3. Külön mező: `„Fa fényképének linkje”` (típusa: url).
4. A **Mentés** gombra a frontend elküldi az adatokat a backendnek (`POST /api/fak`).
5. Sikeres mentésnél és hibánál is jelenítsen meg üzenetet a felhasználónak.
6. Sikeres mentés után az új fa megjelenik a listában (legalább oldalfrissítés után).

#### 3.3 Képek kezelése (`kepek.html`) – a `kepek/` mappa alapján
1. A `kepek/` mappa fájljaihoz készítsen linkeket, és ezeket mentse be az adatbázisba a `fa.URL` mezőbe a következő szabály szerint:
   - Az `azon = 1` fához tartozzon: `kepek/1.jpg`
   - Az `azon = 2` fához tartozzon: `kepek/2.jpg`
   - ...
   - Az `azon = 10` fához tartozzon: `kepek/10.jpg`
2. A többi fához (amelynek `azon` értéke 11 vagy nagyobb) ne állítson be képet, ott az `URL` maradjon üres, és a listában jelenjen meg: `„Nincs kép”`.
   A végrehajtást/URL feltöltést a `kepek.html` oldalon kell végrehajtani.
3. Készítsen olyan felületet (`kepek.html`), ahol:
   - ki tud választani egy fát,
   - meg tud adni hozzá egy képlinket,
   - a mentés az adatbázis `URL` mezőjét frissíti (API-n keresztül).
4. Ellenőrizze, hogy a listaoldalon (`fak.html`) a módosított link alapján már az új kép/link jelenik meg.

**Megjegyzés:** A kezdőlapon a háttérképhez használja a `kepek/10.jpg` képet.

#### Felületek vázlata (3. feladat, működő verzió)

**Új fa felvétele (`hozzaadas.html`)**
- Azonosító (`azon`): Automatikusan a következő szabad érték (max+1).
- Mezők: Faj, Körméret (cm), Mérés éve
- Település: lenyíló lista, API-n keresztül (`GET /api/telepulesek`)
- Fa fényképének linkje: https://... vagy üresen hagyva
- Gombok: Mentés, Vissza a listához

**Képek kezelése (`kepek.html`)**
- Feladat: Válasszon ki egy fát, adjon meg URL-t majd mentse (`PUT /api/fak/{azon}/kep`).
- Az Automatikus beállítás gomb a feladat szerint 1..10 szabványt állítja be.
- Gombok: Mentés, Automatikus beállítás (1..10), Lista megnyitása

---

## Leadandó

A beadás tartalmazza:
- a frontend fájlokat (HTML/CSS/JS + `kepek/` mappa)
- a backend projektet (Node+Express)
- a kapott SQL állományokat (és ha kéri a feladat, a futtatásuk igazolását)
- a Thunder/Postman kollekciót

**Minden felesleges, nem használt forrás, vagy járulékos fájl a leadandók közé ne kerüljön!**
```

Ez a Markdown változat megőrzi az eredeti dokumentum logikai struktúráját, a feladatok tagolását, a követelményeket és a mintákat.