# Szoftverfejlesztő és -tesztelő próba vizsgafeladatsor

## 1. Grafikus és konzolos részt egyaránt tartalmazó asztali alkalmazás fejlesztése

A következő feladatban ingatlan hirdetésekkel kapcsolatos szöveges állomány áll a rendelkezésünkre, melyekkel programozási feladatokat kell megoldania.

### Feladatmegoldás során figyelembe veendő szempontok:
- A képernyőre írást igénylő részfeladatok eredményének megjelenítése előtt írja a képernyőre a feladat sorszámát (pl.: 3. feladat:).
- Az egyes feladatokban a kiírásokat a minta szerint készítse el!
- Az ékezetmentes azonosítók és kiírások is elfogadottak.
- Az azonosítókat kis- és nagybetűkkel is kezdheti.
- A program megírásakor az állományban lévő adatok helyes szerkezetét nem kell ellenőriznie, feltételezheti, hogy a rendelkezésre álló adatok a leírtaknak megfelelnek.
- A megoldását úgy készítse el, hogy az azonos szerkezetű, de tetszőleges bemeneti adatok mellett is helyes eredményt adjon!

### Adatforrások:
- **A.** `realestates.json` elnevezésű JSON típusú szöveges fájl
- **B.** `realestates.csv` elnevezésű szöveges állomány

Az állomány első sora a mezőneveket tartalmazza, az adatokat pontosvesszővel választottuk el. Mindkét esetben a kapott adatok kódolása UTF-8.

### Adatforrásokban található adatok:
- **_id**: a hirdetés azonosítója, egész szám
- **_description**: a hirdetés szövege, szöveges
- **_rooms**: az ingatlan szobáinak száma, egész szám
- **_area**: az ingatlan alapterülete, egész szám
- **_floors**: az ingatlan hányadik emeleten helyezkedik el, egész szám
- **_category**: az ingatlan kategóriája, önálló osztály (id, name)
- **_seller**: az ingatlan eladója, önálló osztály (id, name, phone)
- **_freeOfCharge**: az ingatlan tehermentes-e, logikai
- **_imageUrl**: a hirdetéshez tartozó képállomány elérési útvonala, szöveges
- **_latlong**: az ingatlan földrajzi koordinátái (szélességi, hosszúsági fok) vesszővel elválasztva. A szélességi és hosszúsági fok valós szám, a tizedesjel a pont karakter.
- **_createAt**: a hirdetés felkerülésének dátuma, dátum

### Feladatok:
1. Készítsen konzolos alkalmazást a következő feladatok megoldására, melynek projektjét `RealEstate` néven mentse el!
2. Készítsen saját osztályokat `Ad`, `Seller` és `Category` azonosítóval, melynek az adattagjainak azonosítóit és láthatósági szintjét az osztálydiagramok szemléltetik!
3. Készítsen statikus metódust az `Ad` osztályhoz az adatforráshoz történő kapcsolódásra, és az adatforrásban levő adatok betöltésére! A metódus neve utaljon az adatforrásból betöltésre (pl.: `LoadFromCsv`). A metódus visszatérési értéke az `Ad` osztályból képzett lista legyen! A metódus paramétere a betöltendő fájl neve legyen!
4. Szükség esetén az `Ad` osztály adattagjainak beállítását konstruktor segítségével állítsa be! A paraméterben kapott adatok az adatforrásoktól függően változóak lehetnek.
5. Olvassa be a választott adatforrás adatait és tárolja az adatokat az `Ad` osztály segítségével egy olyan összetett adatszerkezetben, amely használatával a további feladatok megoldhatók!
6. Határozza meg és írja ki a minta szerint az eladásra kínált földszinti ingatlanok átlagos alapterületét! Az eredményt a minta alapján két tizedesjegy pontossággal írja ki!
7. Készítsen `DistanceTo` néven valós értékkel visszatérő metódust, amelynek segítségével adott ingatlan esetében meg lehet állapítani egy GPS koordinátától való távolságot Pitagorasz-tétel segítségével.
8. A Mesevár óvoda Budán a `47.4164220114023, 19.066342425796986` GPS koordinátán helyezkedik el. Keresse ki és írja ki a minta alapján annak a tehermentes ingatlannak az adatait, melyik a legközelebb van légyonalban a Mesevár óvodához!

## 2. Reszponzív viselkedésű weboldal

A következő feladatban egy ingatlanok értékesítésével foglalkozó vállalkozás weboldalát kell módosítania a feladatleírás és a minta szerint.

### Feladatok:
1. A `style.css` állományban megfelelő szelektor alkalmazásával állítsa be, hogy az ingatlan kínálat oldalon a kártyák címe (pl.: Ház 2022-02-24) feliratnak a szövegszíne ugyanolyan legyen, mint az oldal háttérszíne!
2. Mindhárom oldalon a navigációs sávon kiemelten látszik az aktuális oldalhoz tartozó menüpont (az aktuális sötétebb szürke, mint a másik kettő). A stíluslapon a megfelelő szelektor segítségével állítsa be, hogy az aktív laphoz tartozó menüpont színe (R: 71, G: 71, B:150) legyen, és félkövéren jelenjen meg!
3. Állítsa be a stíluslapon, hogy a `start` osztályjelölőhöz tartozó keret háttérképe ne ismétlődjön, és töltse ki teljesen a keretet! (Az ismétlődés nagyobb képernyőfelbontás esetén jelentkezik.)
4. A nyitó oldalon (`index.html`) található gombokhoz tartozó HTML kódot módosítsa úgy, hogy rájuk kattintva azonos lapon megnyíljon az `offers.html` illetve a `newad.html` oldal!
5. A `newad.html` oldalon az oldal tetején a menü nem középen jelenik meg. Javítsa a hibát!
6. A `newad.html` oldal végén a két soros javascript kód feladata, hogy a hirdetés dátumának értéke az aktuális dátum legyen. A script futásakor a konzolon az alábbi hiba jelenik meg: `Uncaught TypeError: document.querySelector(...) is null`. Javítsa a hibát!
7. A kínálatot tartalmazó oldalon szúrjon be a két ház után egy újabb hirdetést! A hirdetés adatait megtalálja a `lakas.txt` állományban. Az állományban szereplő minden adatra szüksége van a teljeskörű megoldáshoz.
8. Egészítse ki az új hirdetés feladása oldalt egy új beviteli mezővel:
   - A beviteli mező címkéjének a felirata legyen: „Fénykép az ingatlanról”!
   - A beviteli mező típusa legyen `url`!
   - Ügyeljen arra, hogy a megjelenő elemek stílusa megegyezzen az oldalon lévő többi elem stílusával!

## 3. Backend programozás

Az alábbi feladatban egy ingatlan hirdetéssel foglalkozó cég weboldalának backend szerverét kell elkészítenie.

### Feladatok:
1. Hozzon létre backend szerver projektet az Ön által választott programnyelven, illetve fejlesztési környezetben! A projektmappát `Vezetéknév_Keresztnév_backend` formában nevezze el! A feladat megoldása során ékezetmentes azonosítókat és állományneveket is használhat.
2. Készítsen adatbázist `ingatlan` néven!
3. A lenti ábra alapján:
   - Hozzon létre modelleket a megfelelő adattípusokkal és beállításokkal!
   - Az ingatlan adatbázisban hozza létre a két táblát!
4. Oldja meg, hogy ha a hirdetés dátuma nem kerül megadásra, akkor annak alapértelmezett értéke az aktuális dátum legyen!
5. Töltse fel a `kategoriak` táblát (kollekciót) az alábbi rekordokkal (dokumentumokkal):

   | id | nev |
   |----|-----|
   | 1  | Ház |
   | 2  | Lakás |
   | 3  | Építési telek |
   | 4  | Garázs |
   | 5  | Mezőgazdasági terület |
   | 6  | Ipari ingatlan |

6. Hozzon létre végpontot az adatbázisban szerepelő összes ingatlan lekérdezésére az alábbi beállításokkal! Oldja meg, hogy a válasz üzenetben a `kategoriak` tábla `nev` mezője is szerepeljen!
7. Hozzon létre végpontot új ingatlan rögzítésére az alábbi beállításokkal! Sikeres rögzítés esetén `201 CREATED` státuszkóddal és az újonnan beszúrt rekord azonosítóját tartalmazó JSON üzenettel térjen vissza! Bármely kötelező mező hiánya esetén `400 BAD REQUEST` hibakóddal és a hibára utaló „Hiányos adatok” üzenettel térjen vissza!
8. Hozzon létre végpontot az adatbázisban szerepelő ingatlan törlésére az alábbi beállításokkal! Sikeres törlés esetén `204 NO CONTENT` státuszkóddal térjen vissza! Amennyiben a megadott azonosító nem létezik `404 NOT FOUND` státuszkóddal és az „Ingatlan nem létezik” üzenettel térjen vissza!
9. Hozzon létre Thunder Client vagy Postman kollekciót `Backend teszt` néven, melyben az Ön által létrehozott összes útvonalat ellenőrzi! Exportálja a kollekciót a projekt gyökérkönyvtárába `Backend_teszt` néven!
10. Projektmappáját a választott technológiának megfelelően adja le:
    - Tömörítés előtt törölje a felesleges állományokat! Ügyeljen arra, hogy feladatmegoldást tartalmazó mappát/állományt ne töröljön!
    - A forráskódját tömörítse be `Vezetéknév_Keresztnév_backend.zip` néven!
    - A tömörített állomány tartalmazza az adatbázist létrehozó SQL scriptet vagy JSON állományt is!

## 4. Frontend programozás

A következő feladatban egy frontend alkalmazást készítését kell elvégeznie a kiadott leírás szerint!

### Feladatok:
1. Adja hozzá az alkalmazáshoz a választott UI keretrendszer (pl.: Bootstrap) legfrissebb verzióját! A keretrendszerek használatához szükséges állományokat a keretrendszerek nevével ellátott alkönyvtárban találja meg.
2. Hozzon létre egy komponenst, amely a webalkalmazás nyitó oldala lesz:
   - A komponenst a minta alapján hozza létre!
   - A komponens létrehozása során használhatja a forrás könyvtárban szereplő UI keretrendszertől függő állományokat (pl.: Bootstrap: `openpage.html`, `openpage.css`)!
   - A komponens háttérképe a források könyvtárban található `real-estate-agent.png` kép legyen!
3. Hozzon létre egy újabb komponenst a hirdetések megjelenítéséhez:
   - Az oldalon szereplő ajánlatokat tartalmazó adatokat a kiszolgáló szerver `/api/ingatlan` URL-jén szereplő REST API függvénnyel kérdezze le!
   - Az adatokat táblázatos formában – a kiadott mintára hasonlító – az Ön által választott keretrendszerhez alkalmazható külső komponens segítségével jelenítse meg (pl.: PrimeNG, Angular Material, Quasar)! Ügyeljen arra, hogy a táblázatban szereplő adatok és az oszlopok sorrendje egyezzen a mintával!
   - Állítsa be a komponensek az eléréséhez a `/offers` útvonalat!
   - A kezdőoldalon a „Nézze meg kínálatunkat” feliratú gombhoz állítsa be, hogy arra kattintva navigáljon át a `/offers` útvonalra!
4. Hozza létre az új hirdetés feladását megvalósító komponenst:
   - A komponens létrehozása során használhatja a források könyvtárban szereplő UI keretrendszertől függő (pl.: Bootstrap: `newad.html`) oldalt.
   - Az ingatlanok típusait tartalmazó lenyíló listához az elemeket a szerver `/api/kategoriak` URL-jéről töltse le!
   - Állítsa be a hirdetés dátuma mező értékét csak olvashatóra, a mező értéke az oldal megnyitásakor legyen az aktuális dátum!
   - Az új ajánlatokat küldje el a szerver `/api/ujingatlan` URL-re az API leírás alapján!
   - Sikeres küldés esetén navigáljon át a `/offers` útvonalra, hiba esetén a mintának megfelelően jelenítse meg az üzenetet!
   - Állítsa be ennek a komponensek az eléréséhez a `/newad` útvonalat!
   - A kezdőoldalon a „Hirdessen nálunk!” feliratú gombhoz állítsa be, hogy arra kattintva navigáljon át a `/newad` útvonalra!
5. Forráskódját a választott technológiának megfelelően adja le:
   - Tömörítés előtt törölje a felesleges állományokat! Ügyeljen arra, hogy feladatmegoldást tartalmazó mappát/állományt ne töröljön!
   - A forráskódját tömörítse be `Vezetéknév_keresztnév_frontend.zip` néven!