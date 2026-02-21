# Diáknyilvántartás feladat

## C# konzolos feladat

Készíts egy konzolos alkalmazást, amely egy diáknyilvántartást valósít meg. A programnak a következő funkciókat kell tartalmaznia**:

### Alapvető statisztikák (Összegzés, Megszámlálás, Átlag)

1. **Összegzés**: Számold ki az összes rögzített érdemjegy összegét!
2. **Átlag**: Számold ki az összes jegy átlagát a teljes adatsoron!
3. **Megszámlálás**: Hány darab jegyet rögzítettek a "11.B" osztály számára?
4. **Szűrt átlag**: Mennyi a "Matematika" tantárgyból szerzett jegyek átlaga?
5. **Tanári statisztika**: Hány jegyet osztott ki összesen "Vass Edit"?

### Szélsőérték keresés (Minimum, Maximum)

6. **Maximum**: Ki kapta a legutolsó jegyet az időrend alapján (legkésőbbi dátum)?
7. **Minimum**: Melyik a legkorábbi dátum, amikor jegyet rögzítettek?
8. **Komplex maximum**: Határozd meg, melyik diák kapta a legtöbb 5-öst!
9. **Legszigorúbb tanár**: Melyik tanárnál a legalacsonyabb a jegyek átlaga?
10. **Legjobb diák**: Ki az a diák, akinek a legmagasabb a tanulmányi átlaga?

### Eldöntés és Keresés

11. **Eldöntés**: Van-e olyan diák, aki "Kémia" tárgyból 5-öst kapott? (Igen/Nem)
12. **Keresés**: Találd meg az első olyan bejegyzést, ahol a jegy 1-es! Írd ki a diák nevét és a tantárgyat!
13. **Eldöntés**: Minden diák kapott legalább egyszer 3-asnál jobb jegyet?
14. **Keresés**: Van-e olyan bejegyzés, amely február 29-re esik (szökőnap)?

### Kiválogatás és Csoportosítás

15. **Kiválogatás**: Gyűjtsd ki egy listába az összes olyan diák nevét (ismétlődés nélkül), aki "Informatika" órát hallgat!
16. **Negatív kiválogatás**: Listázd ki az összes olyan bejegyzést (Név, Tárgy, Jegy), ahol a diák megbukott (1-est kapott)!
17. **Csoportosítás**: Számold meg, hány darab 5-ös, 4-es, 3-as, 2-es és 1-es van az összesített adatokban!
18. **Osztály statisztika**: Melyik osztályban született több jegy**: a 10.A-ban vagy a 11.B-ben?

### Összetett algoritmusok

19. **Többszörös feltétel**: Keresd meg azt a diákot, aki a legtöbb különböző tantárgyból kapott jegyet!
20. **Dátum szűrés**: Listázd ki azokat a diákokat, akik március hónapban kaptak jegyet!
21. **Tanári rangsor**: Rangsorold a tanárokat a kiosztott jegyek átlaga alapján, és írd ki a top 3 tanárt!
22. **Diák rangsor**: Rangsorold a diákokat a tanulmányi átlaguk alapján, és írd ki a top 5 diákot!
23. **Tantárgyi rangsor**: Rangsorold a tantárgyakat a kiosztott jegyek átlaga alapján, és írd ki a top 3 tantárgyat!

Megvalósítási javaslatok:

- Hozz létre C# .NETFramework vagy .NET Core konzolos alkalmazást `DiakNyilvantartas` néven.
- Hozz létre egy `Jegy` osztályt, amely tartalmazza a diák nevét, osztályát, tantárgyát, jegyét, tanár nevét és a dátumot.
- Használj egy listát a diákok tárolására, és implementáld a fenti funkciókat különböző metódusokban.
- Másold a kapott `teljesiskolairiport.csv` fájlt a projekt gyökerébe, és olvasd be a fájl tartalmát a program indításakor, hogy feltöltsd a diákok listáját.
- Implementáld a statisztikák és rangsorok kiszámításához szükséges algoritmusokat, és jelenítsd meg az eredményeket a konzolon.

## C# GUI-s feladat

Készíts egy Windows Forms vagy WPF alkalmazást, amely egy diáknyilvántartást valósít meg. Az alkalmazásnak a következő funkciókat kell tartalmaznia:

- Adatbevitel: Lehetővé teszi új diákok és jegyek hozzáadását egy űrlapon keresztül.
- Adatmegjelenítés: Egy DataGridView-ben vagy ListView-ben jeleníti meg a rögzített adatokat.
- Statisztikák: Egy külön panelen vagy ablakban jeleníti meg a fent említett statisztikákat és rangsorokat.
- Szűrés és keresés: Lehetővé teszi a diákok és jegyek szűrését és keresését különböző kritériumok alapján (pl. név, tantárgy, jegy).
- Adatmentés és betöltés: Lehetővé teszi az adatok mentését egy fájlba (pl. CSV, JSON) és betöltését onnan.
- Felhasználói élmény: Az alkalmazás legyen felhasználóbarát, könnyen navigálható és esztétikus megjelenésű.

Az alkalmazás fejlesztése során használj objektumorientált programozási elveket, és törekedj a kód tisztaságára és karbantarthatóságára. Az adatok kezelésére használj megfelelő adatstruktúrákat (pl. listák, osztályok), és implementálj hatékony algoritmusokat a statisztikák és rangsorok kiszámításához. Az alkalmazás tesztelése során győződj meg arról, hogy minden funkció megfelelően működik, és az adatok helyesen jelennek meg a felhasználói felületen.

## Back-end fejlesztés

Készíts egy RESTful API-t ASP.NET Core-ban, amely egy diáknyilvántartást valósít meg. Az API-nak a következő végpontokat kell tartalmaznia:

- **GET /students**: Visszaadja az összes diák listáját.
- **GET /students/{id}**: Visszaadja egy adott diák adatait azonosító alapján.
- **POST /students**: Új diák hozzáadása az adatbázishoz.
- **PUT /students/{id}**: Egy adott diák adatainak frissítése azonosító alapján.
- **DELETE /students/{id}**: Egy adott diák törlése az adatbázisból.

[Adatbázist létrehozó SQL szkript](./forrasok/diaknyilvatartas.sql)

## Front-end fejlesztés

Készíts egy egyszerű webalkalmazást React-ben, amely a fenti RESTful API-t használja a diáknyilvántartás kezelésére. Az alkalmazásnak a következő funkciókat kell tartalmaznia:

- Diákok listázása: Megjeleníti az összes diák nevét és adatait egy táblázatban.
- Diák hozzáadása: Lehetővé teszi új diákok hozzáadását egy űrlapon keresztül.
- Diák szerkesztése: Lehetővé teszi egy adott diák adatainak frissítését egy szerkesztő űrlapon keresztül.
- Diák törlése: Lehetővé teszi egy adott diák törlését egy gomb megnyomásával.
