**Szakmai záróvizsga online tanórák, 2022. 04. 20. Szoftverfejlesztő és -tesztelő próba vizsgafeladatsor**

1. **Grafikus és konzolos részt egyaránt tartalmazó asztali alkalmazás fejlesztése**
   - A következő feladatban ingatlan hirdetésekkel kapcsolatos szöveges állomány áll a rendelkezésünkre, melyekkel programozási feladatokat kell megoldania.
   - A feladat megoldása során vegye figyelembe a következőket:
     - A képernyőre írást igénylő részfeladatok eredményének megjelenítése előtt írja a képernyőre a feladat sorszámát (például: 3. feladat:)!
     - Az egyes feladatokban a kiírásokat a minta szerint készítse el!
     - Az ékezetmentes azonosítók és kiírások is elfogadottak.
     - Az azonosítókat kis- és nagybetűkkel is kezdheti.
     - A program megírásakor az állományban lévő adatok helyes szerkezetét nem kell ellenőriznie, feltételezheti, hogy a rendelkezésre álló adatok a leírtaknak megfelelnek.
     - A megoldását úgy készítse el, hogy az azonos szerkezetű, de tetszőleges bemeneti adatok mellett is helyes eredményt adjon!
   - Az adatforrás két formában áll rendelkezésére, amelyek közül egyet kell választania a feladat megoldásához:
     - `realestates.json` elnevezésű JSON típusú szöveges fájl
     - `realestates.csv` elnevezésű szöveges állomány
   - Az állomány első sora a mezőneveket tartalmazza, az adatokat pontosvesszővel választottuk el. Mindkét esetben a kapott adatok kódolása UTF-8.
   - Az adatforrásokban a következő adatokat találja meg:
     - `id`: a hirdetés azonosítója, egész szám
     - `description`: a hirdetés szövege, szöveges
     - `rooms`: az ingatlan szobáinak száma, egész szám
     - `area`: az ingatlan alapterülete, egész szám
     - `floors`: az ingatlan hányadik emeleten helyezkedik el, egész szám
     - `category`: az ingatlan kategóriája, önálló osztály (id, name)
     - `seller`: az ingatlan eladója, önálló osztály (id, name, phone)
     - `freeOfCharge`: az ingatlan tehermentes-e, logikai
     - `imageUrl`: a hirdetéshez tartozó képállomány elérési útvonala, szöveges
     - `latlong`: az ingatlan földrajzi koordinátái (szélességi, hosszúsági fok) vesszővel elválasztva. A szélességi és hosszúsági fok valós szám, a tizedesjel a pont karakter.
     - `createAt`: a hirdetés felkerülésének dátuma, dátum

2. **Készítsen konzolos alkalmazást a következő feladatok megoldására, melynek projektjét RealEstate néven mentse el!**
   - Készítsen saját osztályokat `Ad`, `Seller` és `Category` azonosítóval, melynek az adattagjainak azonosítóit és láthatósági szintjét az osztálydiagramok szemléltetik! A privát adattagokat egy lakat szimbólum különbözteti meg a publikusaktól. Ékezetes azonosítókat is készíthet, illetve azokat kis- és nagybetűkkel is kezdheti.
   - Készítsen statikus metódust az `Ad` osztályhoz az adatforráshoz történő kapcsolódásra, és az adatforrásban levő adatok betöltésére! A metódus neve utaljon az adatforrásból betöltésre (pl.: `LoadFromCsv`). A metódus visszatérési értéke az `Ad` osztályból képzett lista legyen! A metódus paramétere a betöltendő fájl neve legyen!
   - Szükség esetén az `Ad` osztály adattagjainak beállítását konstruktor segítségével állítsa be! A paraméterben kapott adatok az adatforrásoktól függően változóak lehetnek.
   - Olvassa be a választott adatforrás adatait és tárolja az adatokat az `Ad` osztály segítségével egy olyan összetett adatszerkezetben, amely használatával a további feladatok megoldhatók!
   - Határozza meg és írja ki a minta szerint az eladásra kínált földszinti ingatlanok átlagos alapterületét! Az eredményt a minta alapján két tizedesjegy pontossággal írja ki!
   - Készítsen `DistanceTo` néven valós értékkel visszatérő metódust, amelynek segítségével adott ingatlan esetében meg lehet állapítani egy GPS koordinátától való távolságot Pitagorasz-tétel segítségével!
   - A Mesevár óvoda Budán a 47.4164220114023, 19.066342425796986 GPS koordinátán helyezkedik el. Keresse ki és írja ki a minta alapján annak a tehermentes ingatlannak az adatait, melyik a legközelebb van légvonalban a Mesevár óvodához!

3. **Backend programozás**
   - Hozzon létre backend szerver projektet az Ön által választott programnyelven, illetve fejlesztési környezetben! A projektmappát „Vezetéknév_Keresztnév_backend” formában nevezze el! A feladat megoldása során ékezetmentes azonosítókat és állományneveket is használhat.
   - Készítsen adatbázist ingatlan néven!
   - A lenti ábra alapján:
     - Hozzon létre modelleket a megfelelő adattípusokkal és beállításokkal!
     - Az ingatlan adatbázisban hozza létre a két táblát!
   - Oldja meg, hogy ha a hirdetés dátuma nem kerül megadásra, akkor annak alapértelmezett értéke az aktuális dátum legyen!
   - Töltse fel a kategoriak táblát (kollekciót) az alábbi rekordokkal (dokumentumokkal):
     - id nev
     - 1 Ház
     - 2 Lakás
     - 3 Építési telek
     - 4 Garázs
     - 5 Mezőgazdasági terület
     - 6 Ipari ingatlan
   - Hozzon létre végpontot az adatbázisban szerepelő összes ingatlan lekérdezésére az alábbi beállításokkal! Oldja meg, hogy a válasz üzenetben a kategoriak tábla nev mezője is szerepeljen! A válasz tartalma a lenti mintáktól eltérhet a választott technológiának megfelelően, de a mintákban szereplő összes adatot – beleértve a kategória nevét is – tartalmaznia kell!
   - Hozzon létre végpontot új ingatlan rögzítésére az alábbi beállításokkal! Sikeres rögzítés esetén 201 CREATED státuszkóddal és az újonnan beszúrt rekord azonosítóját tartalmazó JSON üzenettel térjen vissza! Bármely kötelező mező hiánya esetén 400 BAD REQUEST hibakóddal és a hibára utaló „Hiányos adatok” üzenettel térjen vissza!
   - Hozzon létre végpontot az adatbázisban szerepelő ingatlan törlésére az alábbi beállításokkal! Az {id} helyén a törölni kívánt ingatlan azonosítója szerepeljen! Sikeres törlés esetén `204 NO CONTENT` státuszkóddal térjen vissza! Amennyiben a megadott azonosító nem létezik `404 NOT FOUND` státuszkóddal és az `Ingatlan nem létezik` üzenettel térjen vissza!
  
4. **Frontend programozás**
   - A következő feladatban egy frontend alkalmazást készítését kell elvégeznie a kiadott leírás szerint! Az alkalmazás felhasználói felületének kialakítását minták segítik, melyeket nem kell követnie a megoldásában.
   - Indítsa el a projektkönyvtárának backend mappájából a weboldalát kiszolgáló szervert (`IngatlanWebAPI.exe`)! A program indulása után az alábbi képernyő jelenik meg:
     - A mintán látható „Content root path” a program indításának a helyét mutatja. A webkiszolgáló a `http://localhost:5000` címen fog elindulni. A böngészőbe beírva a `http://localhost:5000/docs` URL-t a kap segítséget a webszerveren elérhető REST API függvényekhez.
   - Az alábbi REST API függvények érhetőek el a szerveren:
     - `/api/kategoriak`
       - Metódus: GET
       - Válasz: Az adatbázisban lévő kategóriák azonosítói és nevei.
       - Válasz minta:
         ```json
         [
           { "id": 1, "megnevezes": "Ház" },
           ...
           { "id": 6, "megnevezes": "Ipari ingatlan" }
         ]
         ```
     - `/api/ingatlan`
       - Metódus: GET
       - Válasz: Az adatbázisban jelenleg található hirdetések adatai.
       - Válasz minta:
         ```json
         [
           {
             "id": 1,
             "kategoriaId": 1,
             "kategoriaNev": "Ház",
             "leiras": "Kertvárosi részén, egyszintes házat kínálunk ...",
             "hirdetesDatuma": "2022.02.27",
             "tehermentes": true,
             "kepUrl": "https://cdn.jhmrad.com/wp-content/uploads...jpg"
           },
        
           {
             "id": 6,
             "kategoriaId": 6,
             "kategoriaNev": "Ipari ingatlan",
             "leiras": "Felújításra szoruló üzemcsarnok zöld környezetben ...",
             "hirdetesDatuma": "2022.03.01",
             "tehermentes": false,
             "kepUrl": "https://cdn.pixabay.com/photo/2019/01/31/09/...jpg"
           }
         ]
         ```
     - `/api/ujingatlan`
       - Metódus: POST
       - A kérés törzsében kell a szerver felé elküldeni a rögzíteni kívánt új hirdetés adatait.
       - Minta a kérésre:
         ```json
         {
           "kategoriaId": 1,
           "leiras": "Szép ház van eladó",
           "hirdetesDatuma": "2022-03-09",
           "tehermentes": true,
           "kepUrl": "http://kep.hu/azenhazam.png"
         }
         ```
       - Válasz minta:
         ```json
         {
           "id": 7,
           "kategoriaId": 1,
           "kategoriaNev": "Ház",
           "leiras": "Szép ház van eladó",
           "hirdetesDatuma": "2022.03.09",
           "tehermentes": true,
           "kepUrl": "http://kep.hu/azenhazam.png"
         }
         ```

5. **Feladatok**
   - Az Ön által választott Javascript keretrendszer (Angular, VueJs vagy React) valamelyikével készítse el az alábbi feladatokat:
     - Adja hozzá az alkalmazáshoz a választott UI keretrendszer (pl.: Bootstrap) legfrissebb verzióját! A keretrendszerek használatához szükséges állományokat a keretrendszerek nevével ellátott alkönyvtárban találja meg.
     - Hozzon létre egy komponenst, amely a webalkalmazás nyitó oldala lesz:
       - A komponenst a minta alapján hozza létre!
       - A komponens létrehozása során használhatja a forrás könyvtárban szereplő UI keretrendszertől függő állományokat (pl.: Bootstrap: `openpage.html`, `openpage.css`)!
       - A komponens háttérképe a források könyvtárban található `real-estate-agent.png` kép legyen!
     - Hozzon létre egy újabb komponenst a hirdetések megjelenítéséhez!
       - Az oldalon szereplő ajánlatokat tartalmazó adatokat a kiszolgáló szerver `/api/ingatlan` URL-jén szereplő REST API függvénnyel kérdezze le!
       - Az adatokat táblázatos formában – a kiadott mintára hasonlító – az Ön által választott keretrendszerhez alkalmazható külső komponens segítségével jelenítse meg (pl.: PrimeNG, Angular Material, Quasar)! Ügyeljen arra, hogy a táblázatban szereplő adatok és az oszlopok sorrendje egyezzen a mintával!
       - Állítsa be a komponensnek az eléréséhez a `/offers` útvonalat!
       - A kezdőoldalon a „Nézze meg kínálatunkat” feliratú gombhoz állítsa be, hogy arra kattintva navigáljon át a `/offers` útvonalra!
     - Hozza létre az új hirdetés feladását megvalósító komponenst!
       - A komponens létrehozása során használhatja a források könyvtárban szereplő UI keretrendszertől függő (pl.: Bootstrap: `newad.html`) oldalt.
       - Az ingatlanok típusait tartalmazó lenyíló listához az elemeket a szerver `/api/kategoriak` URL-jéről töltse le!
       - Állítsa be a hirdetés dátuma mező értékét csak olvashatóra, a mező értéke az oldal megnyitásakor legyen az aktuális dátum!
       - Az új ajánlatokat küldje el a szerver `/api/ujingatlan` URL-re az API leírás alapján!
       - Sikeres küldés esetén navigáljon át a `/offers` útvonalra, hiba esetén a mintának megfelelően jelenítse meg az üzenetet!
       - Állítsa be ennek a komponensnek az eléréséhez a `/newad` útvonalat!
       - A kezdőoldalon a „Hirdessen nálunk!” feliratú gombhoz állítsa be, hogy arra kattintva navigáljon át a `/newad` útvonalra!
     - Forráskódját a választott technológiának megfelelően adja le:
       - Tömörítés előtt törölje a felesleges állományokat! Ügyeljen arra, hogy feladatmegoldást tartalmazó mappát/állományt ne töröljön!
       - A forráskódját tömörítse be `Vezetéknév_Keresztnév_frontend.zip` néven!



- GET /api/ingatlan
- POST /api/ingatlan
- DELETE /api/ingatlan/{id}
